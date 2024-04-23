<script setup lang="ts">
interface Props {
  name: string;
  username: string;
  profilePicture: string;
  content: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="rounded-xl overflow-hidden p-5 bg-[#222326]">
    <div class="flex items-center gap-2">
      <div class="rounded-full h-[48px] w-[48px] overflow-hidden">
        <nuxt-img
          src="/images/home/after.jpg"
          :alt="props.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <p class="text-white font-medium">{{ props.name }}</p>
        <p class="text-[14px] text-gray-500">@{{ props.username }}</p>
      </div>
    </div>

    <p class="text-white mt-4">{{ props.content }}</p>
  </div>
</template>
