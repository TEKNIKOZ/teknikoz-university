<template>
  <div class="inline-block">
    <button
      @click="contactStore.openBrochureModal()"
      :class="[
        'group font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl',
        variant === 'hero' 
          ? 'border-2 border-white/60 text-white px-4 sm:px-5 py-3 rounded-full hover:bg-white hover:text-brand text-sm'
          : 'w-full sm:w-auto bg-brand text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-brand/80 text-base sm:text-lg'
      ]"
    >
      <Icon
        name="mdi:download-outline"
        :class="[
          'group-hover:animate-pulse',
          variant === 'hero' 
            ? 'mr-1.5 sm:mr-2 text-sm sm:text-base'
            : 'mr-2 text-lg'
        ]"
      />
      Download Course Brochure
    </button>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from "@/stores/contact";

interface Props {
  variant?: 'hero' | 'section'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'section'
})

const contactStore = useContactStore();
</script>