<template>
  <div class="newsletter my-4 max-w-[800px] mx-auto">
    <div class="newsletter-image">
      <img :src="img" alt="Newsletter Image" />
    </div>
    <div class="newsletter-content px-10">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <div class="newsletter-signup">
        <input type="email" v-model="email" placeholder="Enter your email" />
        <button @click="signUp">Sign-up</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: String,
  text: String,
  img: String,
});

const email = ref("");

const signUp = () => {
  alert(`Signed up with email: ${email.value}`);
};
</script>

<style scoped>
.newsletter {
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 315px;
}

.newsletter-image {
  flex: 1;
  max-width: 250px;
  max-height: 400px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.newsletter-content {
  flex: 1;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.newsletter h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.newsletter p {
  font-size: 16px;
  color: #b0b0b0;
  margin-bottom: 20px;
}

.newsletter-signup {
  display: flex;
}

.newsletter-signup input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.newsletter-signup button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #800000;
  color: #ffffff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.newsletter-signup button:hover {
  background-color: #990000;
}
</style>
