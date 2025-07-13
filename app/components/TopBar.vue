<template>
  <div class="bg-brand text-white text-sm py-3">
    <div class="container mx-auto max-w-7xl px-4 md:px-8">
      <!-- Mobile Layout -->
      <div class="block md:hidden">
        <div class="text-center font-medium mb-2">
          July Batch Now Enrolling - Only 50 Seats Left!
        </div>
        <div
          class="flex flex-row items-center justify-center space-x-4 text-xs"
        >
          <div class="flex items-center space-x-1">
            <Icon name="mdi:phone" class="w-3 h-3" />
            <span>(123) 456-7890</span>
          </div>
          <div class="flex items-center space-x-1">
            <Icon name="mdi:email" class="w-3 h-3" />
            <span>support@teknikozuniversity.in</span>
          </div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:flex items-center justify-between">
        <div class="text-left font-medium">
          July Batch Now Enrolling - Only 50 Seats Left!
        </div>
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:phone" class="w-4 h-4" />
            <span>(123) 456 - 7890</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:email" class="w-4 h-4" />
            <span>support@teknikozuniversity.in</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
