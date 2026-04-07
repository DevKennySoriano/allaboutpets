<script setup>
const props = defineProps({
  page: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <iframe
    :src="`/legacy/${props.page}`"
    class="legacy-frame"
    :title="props.page"
    loading="eager"
  />
</template>

<style scoped>
.legacy-frame {
  width: 100%;
  height: 100vh;
  border: 0;
  display: block;
}
</style>
