<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen px-4 py-6 sm:py-8"
      >
        <div class="fixed inset-0 bg-black/50" @click="$emit('close')"></div>

        <div
          class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-4 sm:p-6 my-6 sm:my-8 mx-auto"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Add Section
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Section Title <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.title"
                type="text"
                required
                placeholder="Enter section title"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Order Index
              </label>
              <input
                v-model.number="formData.order_index"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            <div class="flex items-center gap-3">
              <button
                type="button"
                @click="$emit('close')"
                class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isLoading"
                class="flex-1 px-4 py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {{ isLoading ? "Creating..." : "Create Section" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

interface SectionFormData {
  title: string;
  order_index: number;
}

interface Props {
  show: boolean;
  isLoading?: boolean;
}

interface Emits {
  (e: "close"): void;
  (e: "submit", data: SectionFormData): void;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
});

const emit = defineEmits<Emits>();

const formData = reactive<SectionFormData>({
  title: "",
  order_index: 0,
});

// Reset form when modal closes
watch(
  () => props.show,
  (newShow) => {
    if (!newShow) {
      formData.title = "";
      formData.order_index = 0;
    }
  }
);

const handleSubmit = () => {
  if (!formData.title.trim()) return;

  emit("submit", { ...formData });
};
</script>
