<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 py-6 sm:py-8">
        <div class="fixed inset-0 bg-black/50" @click="$emit('close')"></div>

        <div
          class="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-4 sm:p-6 my-6 sm:my-8 mx-auto max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Add Lesson
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Title -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Lesson Title <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.title"
                type="text"
                required
                placeholder="Enter lesson title"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <!-- Lesson Type -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Lesson Type <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select
                  v-model="formData.kind"
                  required
                  class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                >
                  <option value="video">Video</option>
                  <option value="pdf">PDF Document</option>
                  <option value="text">Text Content</option>
                  <option value="external">External Link</option>
                </select>
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                >
                  <Icon
                    name="mdi:chevron-down"
                    class="h-4 w-4 text-gray-400"
                  />
                </div>
              </div>
            </div>

            <!-- Video Fields -->
            <div v-if="formData.kind === 'video'" class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Video Asset ID
                </label>
                <input
                  v-model="formData.vod_asset_id"
                  type="text"
                  placeholder="Enter video asset ID"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Duration (seconds)
                </label>
                <input
                  v-model.number="formData.duration_sec"
                  type="number"
                  min="0"
                  placeholder="Video duration in seconds"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            <!-- PDF Fields -->
            <div v-if="formData.kind === 'pdf'">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                PDF URL
              </label>
              <input
                v-model="formData.pdf_url"
                type="url"
                placeholder="https://example.com/document.pdf"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <!-- Text Content Fields -->
            <div v-if="formData.kind === 'text'">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                HTML Content
              </label>
              <textarea
                v-model="formData.html_content"
                rows="6"
                placeholder="Enter HTML content for the lesson"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <!-- External URL Fields -->
            <div v-if="formData.kind === 'external'">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                External URL
              </label>
              <input
                v-model="formData.external_url"
                type="url"
                placeholder="https://example.com/lesson"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <!-- Order Index -->
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
                placeholder="Display order (0 for default)"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <!-- Free Preview -->
            <div>
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  v-model="formData.is_free_preview"
                  type="checkbox"
                  class="w-4 h-4 text-brand bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-brand focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                />
                <span
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Allow free preview of this lesson
                </span>
              </label>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3 pt-2">
              <button
                type="button"
                @click="$emit('close')"
                class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isLoading || !formData.title"
                class="flex-1 px-4 py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                <Icon
                  v-if="isLoading"
                  name="mdi:loading"
                  class="animate-spin mr-2"
                />
                {{ isLoading ? "Creating..." : "Create Lesson" }}
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

interface LessonFormData {
  section_id?: number;
  title: string;
  kind: string;
  order_index: number;
  duration_sec?: number;
  vod_asset_id?: string;
  pdf_url?: string;
  html_content?: string;
  external_url?: string;
  is_free_preview: boolean;
}

interface Props {
  show: boolean;
  sectionId?: number;
  isLoading?: boolean;
}

interface Emits {
  (e: "close"): void;
  (e: "submit", data: LessonFormData): void;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
});

const emit = defineEmits<Emits>();

const formData = reactive<LessonFormData>({
  title: "",
  kind: "video",
  order_index: 0,
  duration_sec: undefined,
  vod_asset_id: undefined,
  pdf_url: undefined,
  html_content: undefined,
  external_url: undefined,
  is_free_preview: false,
});

// Update section_id when prop changes
watch(
  () => props.sectionId,
  (newSectionId) => {
    if (newSectionId) {
      formData.section_id = newSectionId;
    }
  },
  { immediate: true }
);

// Reset form when modal closes
watch(
  () => props.show,
  (newShow) => {
    if (!newShow) {
      formData.title = "";
      formData.kind = "video";
      formData.order_index = 0;
      formData.duration_sec = undefined;
      formData.vod_asset_id = undefined;
      formData.pdf_url = undefined;
      formData.html_content = undefined;
      formData.external_url = undefined;
      formData.is_free_preview = false;
    }
  }
);

const handleSubmit = () => {
  if (!formData.title.trim()) return;

  emit("submit", { ...formData });
};
</script>
