<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-50 overflow-y-auto"
    >
      <div class="flex items-center justify-center min-h-screen px-4 py-6 sm:py-8">
        <div
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="$emit('close')"
        ></div>

        <div
          class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 my-6 sm:my-8 mx-auto max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
        >
          <div class="sticky top-0 bg-white dark:bg-gray-800 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white"
            >
              Edit Lesson
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Update lesson details and content
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Section Selection -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Section <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select
                  v-model="formData.section_id"
                  required
                  class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                >
                  <option v-for="section in sections" :key="section.id" :value="section.id">
                    {{ section.title }}
                  </option>
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
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Move lesson to a different section
              </p>
            </div>

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
                placeholder="e.g., Introduction to Variables"
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

            <!-- Dynamic Fields Based on Type -->
            <!-- Video Fields -->
            <div v-if="formData.kind === 'video'" class="space-y-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Video Settings</h4>
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
            <div v-if="formData.kind === 'pdf'" class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">PDF Settings</h4>
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
            <div v-if="formData.kind === 'text'" class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Text Content</h4>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                HTML Content
              </label>
              <textarea
                v-model="formData.html_content"
                rows="8"
                placeholder="Enter lesson content (HTML supported)"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-mono text-sm"
              ></textarea>
            </div>

            <!-- External Link Fields -->
            <div v-if="formData.kind === 'external'" class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">External Link</h4>
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
                placeholder="Display order within section (0 for default)"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Lower numbers appear first
              </p>
            </div>

            <!-- Free Preview -->
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  v-model="formData.is_free_preview"
                  type="checkbox"
                  class="w-5 h-5 text-brand bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-brand focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                />
                <div>
                  <span
                    class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Allow free preview
                  </span>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Users can access this lesson without enrollment
                  </p>
                </div>
              </label>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                @click="$emit('close')"
                class="flex-1 px-4 py-2.5 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isLoading || !formData.title"
                class="flex-1 px-4 py-2.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                <Icon v-if="isLoading" name="mdi:loading" class="animate-spin mr-2" />
                {{ isLoading ? "Updating..." : "Update Lesson" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

interface LessonFormData {
  section_id?: number
  title: string
  kind: string
  order_index?: number
  duration_sec?: number
  vod_asset_id?: string
  pdf_url?: string
  html_content?: string
  external_url?: string
  is_free_preview: boolean
}

interface Section {
  id: number
  title: string
}

interface Lesson {
  id: number
  section_id: number
  title: string
  kind: string
  order_index?: number
  duration_sec?: number
  vod_asset_id?: string
  pdf_url?: string
  html_content?: string
  external_url?: string
  is_free_preview?: boolean
}

interface Props {
  show: boolean
  lesson?: Lesson | null
  sections?: Section[]
  isLoading?: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', data: LessonFormData): void
}

const props = withDefaults(defineProps<Props>(), {
  lesson: null,
  sections: () => [],
  isLoading: false
})

const emit = defineEmits<Emits>()

const formData = reactive<LessonFormData>({
  section_id: undefined,
  title: '',
  kind: 'video',
  order_index: 0,
  duration_sec: undefined,
  vod_asset_id: undefined,
  pdf_url: undefined,
  html_content: undefined,
  external_url: undefined,
  is_free_preview: false
})

// Populate form when lesson prop changes
watch(() => props.lesson, (newLesson) => {
  if (newLesson) {
    formData.section_id = newLesson.section_id
    formData.title = newLesson.title
    formData.kind = newLesson.kind
    formData.order_index = newLesson.order_index || 0
    formData.duration_sec = newLesson.duration_sec
    formData.vod_asset_id = newLesson.vod_asset_id
    formData.pdf_url = newLesson.pdf_url
    formData.html_content = newLesson.html_content
    formData.external_url = newLesson.external_url
    formData.is_free_preview = newLesson.is_free_preview || false
  }
}, { immediate: true })

// Reset form when modal closes
watch(() => props.show, (newShow) => {
  if (!newShow) {
    formData.section_id = undefined
    formData.title = ''
    formData.kind = 'video'
    formData.order_index = 0
    formData.duration_sec = undefined
    formData.vod_asset_id = undefined
    formData.pdf_url = undefined
    formData.html_content = undefined
    formData.external_url = undefined
    formData.is_free_preview = false
  }
})

const handleSubmit = () => {
  if (!formData.title.trim()) return
  
  emit('submit', { ...formData })
}
</script>