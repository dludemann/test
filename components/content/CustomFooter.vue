<script setup>
defineProps(['title','text','img'])
</script>

<template>
    <div class="custom-footer">
        <p class="info-newsletter"></p>
        <div style="background-color: #000; color: #fff; width: 100%; padding: 20px; border: 20px solid #A01F1F; max-width: 700px;">
            <h5 style="margin: 10px 0;">{{ title }}</h5>
            <p style="margin: 10px 0;">{{ text }}</p>
            <div style="display: flex; align-items: center;">
                <form action="https://www.getdrip.com/forms/21599629/submissions" class="drip-form plausible-event-name=NewsLetterFormSignup" data-drip-embedded-form="21599629" method="post">
                    <input name="fields[email]" placeholder="Email" required="required" style="width: 80%; padding: 10px; margin: 10px 0; border: none; border-radius: 4px;" type="email" value="" /> 
                    <input name="fields[first_name]" placeholder="First Name" required="required" style="width: 80%; padding: 10px; margin: 10px 0; border: none; border-radius: 4px;" type="text" /> 
                    <button onmouseout="this.style.backgroundColor='#FFF'; this.style.color='#000';" onmouseover="this.style.backgroundColor='#444'; this.style.color='#FFF';" style="padding: 10px 20px; background-color: #fff; color: #000; border: none; border-radius: 4px;" type="submit">Send it to me.</button>
                </form>
                <img :src="img" style="margin-left: 20px; margin-top: -69px; max-width: 30%;" />
            </div>
        </div>
    </div>
</template>