<template>
  <div class="inline-block">
    <button
      v-if="contactStore.canDownloadBrochure"
      @click="handleDownload"
      class="group border-2 border-green-400 text-green-400 px-4 sm:px-5 py-3 rounded-full font-bold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm"
    >
      <Icon
        name="mdi:download-outline"
        class="mr-1.5 sm:mr-2 text-sm sm:text-base group-hover:animate-pulse"
      />
      Download Brochure
    </button>

    <button
      v-else
      @click="contactStore.openModal()"
      class="group border-2 border-white/60 text-white px-4 sm:px-5 py-3 rounded-full font-bold hover:bg-white hover:text-brand transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm"
    >
      <Icon
        name="mdi:download-outline"
        class="mr-1.5 sm:mr-2 text-sm sm:text-base group-hover:animate-pulse"
      />
      Download Course Brochure
    </button>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from "@/stores/contact";

const contactStore = useContactStore();

// Check previous submission on mount
onMounted(async () => {
  await contactStore.checkPreviousSubmission();
});

const handleDownload = () => {
  const success = contactStore.downloadBrochure();
  if (success) {
    console.log("Brochure downloaded successfully");
  }
};
</script>
