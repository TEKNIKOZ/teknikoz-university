<template>
  <div>
    <HeroSection />
    <ContactFormModal />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
useHead({
  title: "Free Consultation - TEKNIKOZ Smart Learning",
  meta: [
    {
      name: "description",
      content:
        "Book a free consultation with our PLM & AI experts to discuss your career goals and learning path.",
    },
  ],
});
</script>
