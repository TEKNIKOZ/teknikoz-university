<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen px-4 py-6 sm:py-8"
      >
        <div class="fixed inset-0 bg-black/50" @click="handleCancel"></div>

        <div
          class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-4 sm:p-6 my-6 sm:my-8 mx-auto"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full"
          >
            <Icon
              name="mdi:alert-circle-outline"
              class="w-6 h-6 text-red-600 dark:text-red-400"
            />
          </div>

          <!-- Title -->
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center"
          >
            {{ title }}
          </h3>

          <!-- Message -->
          <p class="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            {{ message }}
          </p>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <button
              type="button"
              @click="handleCancel"
              class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
            >
              {{ cancelText }}
            </button>
            <button
              type="button"
              @click="handleConfirm"
              :disabled="isLoading"
              class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                v-if="isLoading"
                name="mdi:loading"
                class="animate-spin mr-2"
              />
              {{ isLoading ? loadingText : confirmText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  loadingText?: string;
  isLoading?: boolean;
}

interface Emits {
  (e: "confirm"): void;
  (e: "cancel"): void;
}

withDefaults(defineProps<Props>(), {
  title: "Confirm Action",
  message: "Are you sure you want to proceed?",
  confirmText: "Confirm",
  cancelText: "Cancel",
  loadingText: "Processing...",
  isLoading: false,
});

const emit = defineEmits<Emits>();

const handleConfirm = () => {
  emit("confirm");
};

const handleCancel = () => {
  emit("cancel");
};
</script>
