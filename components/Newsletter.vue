<template>
  <div class="newsletter">
    <img :src="img" alt="Newsletter Image" />
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  img: String,
});
</script>

<style scoped>
.newsletter {
  text-align: center;
}

.newsletter img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.newsletter h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.newsletter p {
  font-size: 16px;
  color: #787878;
}
</style>
