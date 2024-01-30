<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: 'Enquire Now',
    },
    bottom_text: {
      type: String,
      default:
        'Each session includes coaching on posing and facial expressions to help you look better in both photos and real life. You’ll receive a booklet with advice about how to use your photos online, how to open women online, and other tips for your adventures online.',
    },
    hasCityInput: {
      type: Boolean,
      default: true,
    },
    city: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      endpoint: 'https://hooks.zapier.com/hooks/catch/1261564/se0vhq/',
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        source: '',
        city: this.city,
      },
    };
  },
  computed: {
    contactFormAttribute: function () {
      return process.env.DEV_ENV === 'True'
        ? 'ContactFormSubmission-Dev'
        : 'ContactFormSubmission';
    },
  },
  mounted() {
    // Lee: add captcha script tag
    let captcha = document.createElement('script');
    captcha.setAttribute(
      'src',
      'https://www.google.com/recaptcha/api.js?render=6LeefeUoAAAAAIoet4Cfhv5IO4fwB8TR-cF8fjoM'
    );
    document.head.appendChild(captcha);

    //append plausible tracking
    let plausible = document.createElement('script');
    plausible.setAttribute('src', 'https://plausible.io/js/script.js');
    plausible.setAttribute('defer', 'defer');
    plausible.setAttribute('data-domain', 'thematchartist.com');
    document.head.appendChild(plausible);
    let exec = document.createElement('script');
    exec.innerHTML =
      'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }';
    document.head.appendChild(exec);

    // load email and source from cookie
    let email = this.getCookie('email');
    let source = this.getCookie('source');

    this.formData.email = email;
    this.formData.source = source;
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      let plausibleBtn = event.target
        .querySelectorAll('button[data-analytics]')
        .item(0);

      let attributes = plausibleBtn
        .getAttribute('data-analytics')
        .split(/,(.+)/);
      let events = [attributes[0], attributes[1] || '{}'];
      // eslint-disable-next-line no-undef
      plausible(...events);
      setTimeout(function () {}, 150);

      const { firstName, lastName, email, city, source } = this.formData;
      const preparedData = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        City: city,
        Source: source,
        Token: '',
      };
      // eslint-disable-next-line no-undef
      grecaptcha.ready(function () {
        // eslint-disable-next-line no-undef
        grecaptcha
          .execute('6LeefeUoAAAAAIoet4Cfhv5IO4fwB8TR-cF8fjoM', {
            action: 'submit',
          })
          .then(function (token) {
            // Add your logic to submit to your backend server here.
            // console.log('gcaptcha token', token);
            preparedData.Token = token;
            // axios call to zapier
            axios
              .post(
                'https://hooks.zapier.com/hooks/catch/1261564/bdpikub/',
                preparedData,
                {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                }
              )
              .then((res) => {
                window.location.href =
                  'https://bookme.name/thematchartist/lite/free-consultation-with-shane';
              })
              .catch((error) => {
                console.log('ERROR');
                console.log(error);
              });
          });
      });
    },
    getCookie(cname) {
      let name = cname + '=';
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    },
  },
};
</script>
<template>
  <form
    class="container flex flex-col gap-4 w-full max-w-[420px] mx-auto font-display py-8 my-5 px-4"
    method="POST"
    :action="endpoint"
    @submit.stop.prevent="submitForm"
  >
    <h2 class="text-center text-[2.2rem] text-[3.125rem]">Enquire Now</h2>
    <fieldset class="flex flex-col">
      <label class="contact__label" for="firstName">First Name </label>
      <input
        id="firstName"
        v-model="formData.firstName"
        class="input"
        type="text"
        name="FirstName"
        placeholder="Enter your First Name"
        required
      />
    </fieldset>

    <fieldset class="flex flex-col">
      <label class="contact__label" for="lastName">Last Name </label>
      <input
        id="lastName"
        v-model="formData.lastName"
        class="input"
        type="text"
        name="LastName"
        placeholder="Enter your Last Name"
        required
      />
    </fieldset>

    <fieldset class="flex flex-col" v-if="hasCityInput">
      <label class="contact__label" for="city">City </label
      ><input
        id="city"
        v-model="formData.city"
        class="input"
        type="text"
        name="City"
        placeholder="Where do you live?"
        required
      />
    </fieldset>

    <fieldset class="flex flex-col">
      <label class="contact__label" for="email">Email </label>

      <input
        id="email"
        v-model="formData.email"
        class="input"
        type="email"
        name="Email"
        placeholder="Enter your Email"
        required
      />
    </fieldset>

    <input v-if="!hasCityInput" type="hidden" name="City" :value="city" />
    <button
      class="flex bg-[#990800] w-full justify-center py-[12px] px-[24px] text-white font-bold"
      type="submit"
      :data-analytics="contactFormAttribute"
    >
      Enquire Now
      <img src="/icons/arrow-right.svg" class="w-[24px] h-[24px] ml-2" alt="" />
    </button>
  </form>
</template>
