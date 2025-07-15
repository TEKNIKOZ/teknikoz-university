<template>
  <div class="bg-brand text-white text-sm py-3">
    <div class="container mx-auto max-w-7xl px-4 md:px-8">
      <!-- Mobile Layout -->
      <div class="md:hidden flex items-center justify-between">
        <div class="text-left font-medium text-sm">
          July Batch Now Enrolling - Only 50 Seats Left!
        </div>
        <div class="flex items-center space-x-3">
          <Icon
            name="heroicons:phone-solid"
            class="w-4 h-4 cursor-pointer"
            @click="call('+91 9876543210')"
          />
          <Icon
            name="heroicons:envelope-solid"
            class="w-4 h-4 cursor-pointer"
            @click="mailto('support@teknikoz.com')"
          />
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:flex items-center justify-between">
        <div class="text-left font-medium">
          July Batch Now Enrolling - Only 50 Seats Left!
        </div>
        <div class="flex items-center space-x-6">
          <div
            class="flex items-center space-x-2 cursor-pointer"
            @click="call('+91 9876543210')"
          >
            <Icon name="heroicons:phone-solid" class="w-4 h-4" />
            <span @click="call('+91 9876543210')">+91 9876543210</span>
          </div>
          <div
            class="flex items-center space-x-2 cursor-pointer"
            @click="mailto('support@teknikoz.com')"
          >
            <Icon name="heroicons:envelope-solid" class="w-4 h-4" />
            <span @click="mailto('support@teknikozuniversity.in')"
              >support@teknikoz.com</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mailto = (email: string) => {
  window.location.href = `mailto:${email}`;
};
const call = (phone: string) => {
  window.location.href = `tel:${phone}`;
};
</script>
