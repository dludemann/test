<script>
import axios from "axios";

export default {
  name: "ContactForm",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: "Inquire Now",
    },
    bottom_text: {
      type: String,
      default:
        "Each session includes coaching on posing and facial expressions to help you look better in both photos and real life. You’ll receive a booklet with advice about how to use your photos online, how to open women online, and other tips for your adventures online.",
    },
    hasCityInput: {
      type: Boolean,
      default: true,
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      endpoint: "https://hooks.zapier.com/hooks/catch/1261564/se0vhq/",
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        source: "",
        city: this.city,
        state: this.state,
        country: this.country,
      },
    };
  },
  computed: {
    contactFormAttribute: function () {
      return process.env.DEV_ENV === "True"
        ? "ContactFormSubmission-Dev"
        : "ContactFormSubmission";
    },
  },
  mounted() {
    console.log("this.formData", this.props);

    // Lee: add captcha script tag
    let captcha = document.createElement("script");
    captcha.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?render=6LeefeUoAAAAAIoet4Cfhv5IO4fwB8TR-cF8fjoM"
    );
    document.head.appendChild(captcha);

    //append plausible tracking
    let plausible = document.createElement("script");
    plausible.setAttribute("src", "https://plausible.io/js/script.js");
    plausible.setAttribute("defer", "defer");
    plausible.setAttribute("data-domain", "thematchartist.com");
    document.head.appendChild(plausible);
    let exec = document.createElement("script");
    exec.innerHTML =
      "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }";
    document.head.appendChild(exec);

    // load email and source from cookie
    let email = this.getCookie("email");
    let source = this.getCookie("source-cookie");

    if (source) {
      const decodedSource = decodeURIComponent(source);
      const pairs = decodedSource.split(";");
      let sourceValue = null;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split("=");
        if (pair[0].trim() === "source") {
          sourceValue = pair[1];
          break;
        }
      }

      this.formData.source = sourceValue;
    }

    this.formData.email = email;
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      let plausibleBtn = event.target
        .querySelectorAll("button[data-analytics]")
        .item(0);

      let attributes = plausibleBtn
        .getAttribute("data-analytics")
        .split(/,(.+)/);
      let events = [attributes[0], attributes[1] || "{}"];
      // eslint-disable-next-line no-undef
      plausible(...events);
      setTimeout(function () {}, 150);

      const { firstName, lastName, email, city, state, source, country } =
        this.formData;
      const preparedData = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        City: city,
        State: state,
        Country: country,
        Source: source,
        Token: "",
      };
      // eslint-disable-next-line no-undef
      grecaptcha.ready(function () {
        // eslint-disable-next-line no-undef
        grecaptcha
          .execute("6LeefeUoAAAAAIoet4Cfhv5IO4fwB8TR-cF8fjoM", {
            action: "submit",
          })
          .then(function (token) {
            // Add your logic to submit to your backend server here.
            // console.log('gcaptcha token', token);
            preparedData.Token = token;
            // axios call to zapier
            axios
              .post(
                "https://hooks.zapier.com/hooks/catch/1261564/bdpikub/",
                preparedData,
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                }
              )
              .then((res) => {
                const origin = window.location.origin;
                window.location.href = `https://inbound.thematchartist.com/book-a-call`;
              })
              .catch((error) => {
                console.log("ERROR");
                console.log(error);
              });
          });
      });
    },
    getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  },
};
</script>
<template>
  <form
    class="container flex flex-col gap-4 w-full max-w-[420px] mx-auto font-display"
    method="POST"
    :action="endpoint"
    @submit.stop.prevent="submitForm"
    :id="id ? id : 'main-contact-form'"
  >
    <h2 class="font-bold font-accent text-[45px] font-body">Book a Call</h2>
    <fieldset class="flex flex-col">
      <label class="contact__label" for="firstName">First Name </label>
      <input
        id="firstName"
        v-model="formData.firstName"
        class="bg-white border border-[#D0D5DD] flex gap-2 py-2.5 px-[14px] rounded-lg font-body text-body-regular placeholder:text-[#667085] text-[#667085] items-center"
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
        class="bg-white border border-[#D0D5DD] flex gap-2 py-2.5 px-[14px] rounded-lg font-body text-body-regular placeholder:text-[#667085] text-[#667085] items-center"
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
        class="bg-white border border-[#D0D5DD] flex gap-2 py-2.5 px-[14px] rounded-lg font-body text-body-regular placeholder:text-[#667085] text-[#667085] items-center"
        type="text"
        name="City"
        placeholder="Where do you live?"
        required
      />
    </fieldset>

    <input
      id="State"
      v-model="formData.state"
      class="hidden"
      type="text"
      name="State"
    />

    <input
      id="Country"
      v-model="formData.country"
      class="hidden"
      type="text"
      name="Country"
    />

    <input
      class="hidden"
      type="text"
      name="City"
      id="City"
      v-model="formData.city"
    />

    <input
      class="hidden"
      type="text"
      name="AffiliateSource"
      id="affiliate-source"
      v-model="formData.source"
    />

    <fieldset class="flex flex-col">
      <label class="contact__label" for="email">Email </label>

      <input
        id="email"
        v-model="formData.email"
        class="bg-white border border-[#D0D5DD] flex gap-2 py-2.5 px-[14px] rounded-lg font-body text-body-regular placeholder:text-[#667085] text-[#667085] items-center"
        type="email"
        name="Email"
        placeholder="Enter your Email"
        required
      />
    </fieldset>

    <button
      class="flex bg-[#990800] w-full justify-center py-[12px] px-[24px] text-white font-bold"
      type="submit"
      :data-analytics="contactFormAttribute"
    >
      Book a Call
      <tma-image
        src="/icons/arrow-right.svg"
        class="w-[24px] h-[24px] ml-2"
        alt=""
      />
    </button>
  </form>
</template>
