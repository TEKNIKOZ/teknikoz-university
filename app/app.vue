<template>
  <NuxtLayout>
    <ColorScheme tag="html">
      <NuxtPage />
    </ColorScheme>
  </NuxtLayout>
</template>

<script setup>
// Add hydrated class to prevent FOUC
onMounted(() => {
  document.documentElement.classList.add('hydrated');
});
</script>
