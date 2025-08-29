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

            <!-- PDF Upload Field -->
            <div v-if="formData.kind === 'pdf'" class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">PDF Document</h4>
              
              <!-- Show existing PDF if available and no new file selected -->
              <div v-if="formData.pdf_url && !pdfFile" class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <Icon name="mdi:file-pdf-box" class="w-8 h-8 text-red-500" />
                    <div>
                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        Current PDF
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        {{ formData.pdf_url.split('/').pop() || 'document.pdf' }}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="clearExistingPdf"
                    class="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Replace
                  </button>
                </div>
              </div>
              
              <!-- Upload new PDF -->
              <div v-if="!formData.pdf_url || pdfFile">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {{ formData.pdf_url && !pdfFile ? 'Replace' : 'Upload' }} PDF File
                </label>
                
                <!-- Drop Zone -->
                <div
                  @drop="handleDrop"
                  @dragover.prevent
                  @dragenter.prevent
                  @dragleave="isDragging = false"
                  @dragenter="isDragging = true"
                  class="relative border-2 border-dashed rounded-lg transition-all"
                  :class="isDragging 
                    ? 'border-brand bg-brand/10 dark:bg-brand/20' 
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'"
                >
                  <input
                    ref="fileInput"
                    type="file"
                    accept=".pdf,application/pdf"
                    @change="handleFileSelect"
                    class="sr-only"
                  />
                  
                  <div
                    v-if="!pdfFile"
                    class="p-8 text-center cursor-pointer"
                    @click="() => fileInput?.click()"
                  >
                    <Icon 
                      name="mdi:cloud-upload" 
                      class="w-12 h-12 mx-auto mb-3"
                      :class="isDragging ? 'text-brand' : 'text-gray-400 dark:text-gray-500'"
                    />
                    <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Drag and drop your PDF here or click to browse
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      PDF files only (max 10MB)
                    </p>
                  </div>
                  
                  <!-- Selected File Preview -->
                  <div v-else class="p-4">
                    <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <div class="flex items-center gap-3">
                        <Icon name="mdi:file-pdf-box" class="w-8 h-8 text-red-500" />
                        <div>
                          <p class="text-sm font-medium text-gray-900 dark:text-white">
                            {{ pdfFile.name }}
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            {{ formatFileSize(pdfFile.size) }}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        @click="removePdfFile"
                        class="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Icon name="mdi:close" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Error Message -->
                <p v-if="fileError" class="text-sm text-red-500 mt-2">
                  {{ fileError }}
                </p>
              </div>
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
                :disabled="isLoading || !formData.title || !hasChanges"
                :class="[
                  'flex-1 px-4 py-2.5 font-semibold rounded-lg focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all shadow-sm',
                  hasChanges && !isLoading && formData.title
                    ? 'bg-brand text-white hover:bg-brand/90 hover:shadow-md'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                ]"
                :title="!hasChanges ? 'No changes to save' : ''"
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
import { reactive, watch, ref, computed } from 'vue'

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

// PDF file handling
const pdfFile = ref<File | null>(null)
const fileError = ref<string>('')
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

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

// Track original data for change detection
const originalData = ref<LessonFormData | null>(null)

// Check if form has changes
const hasChanges = computed(() => {
  if (!originalData.value) return false
  
  // Check if a new PDF file has been selected
  if (pdfFile.value) return true
  
  return (
    formData.section_id !== originalData.value.section_id ||
    formData.title !== originalData.value.title ||
    formData.kind !== originalData.value.kind ||
    formData.order_index !== originalData.value.order_index ||
    formData.duration_sec !== originalData.value.duration_sec ||
    formData.vod_asset_id !== originalData.value.vod_asset_id ||
    formData.pdf_url !== originalData.value.pdf_url ||
    formData.html_content !== originalData.value.html_content ||
    formData.external_url !== originalData.value.external_url ||
    formData.is_free_preview !== originalData.value.is_free_preview
  )
})

// Populate form when lesson prop changes
watch(() => props.lesson, (newLesson) => {
  if (newLesson) {
    const lessonData = {
      section_id: newLesson.section_id,
      title: newLesson.title || '',
      kind: newLesson.kind || 'video',
      order_index: newLesson.order_index || 0,
      duration_sec: newLesson.duration_sec,
      vod_asset_id: newLesson.vod_asset_id || undefined,
      pdf_url: newLesson.pdf_url || undefined,
      html_content: newLesson.html_content || undefined,
      external_url: newLesson.external_url || undefined,
      is_free_preview: newLesson.is_free_preview || false
    }
    
    // Set form data
    Object.assign(formData, lessonData)
    
    // Store original data for change detection
    originalData.value = { ...lessonData }
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
    originalData.value = null
    pdfFile.value = null
    fileError.value = ''
    isDragging.value = false
  }
})

// Format file size for display
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// Validate PDF file
const validatePdfFile = (file: File): boolean => {
  fileError.value = ''
  
  // Check file type
  if (!file.type.includes('pdf')) {
    fileError.value = 'Please select a valid PDF file'
    return false
  }
  
  // Check file size (10MB limit)
  const maxSize = 10 * 1024 * 1024 // 10MB
  if (file.size > maxSize) {
    fileError.value = 'File size must be less than 10MB'
    return false
  }
  
  return true
}

// Handle file selection from input
const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file && validatePdfFile(file)) {
    pdfFile.value = file
    // Clear the existing URL when a new file is selected
    formData.pdf_url = undefined
  } else if (file) {
    pdfFile.value = null
  }
}

// Handle drag and drop
const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  isDragging.value = false
  
  const file = event.dataTransfer?.files[0]
  
  if (file && validatePdfFile(file)) {
    pdfFile.value = file
    // Clear the existing URL when a new file is selected
    formData.pdf_url = undefined
  } else if (file) {
    pdfFile.value = null
  }
}

// Remove selected PDF file
const removePdfFile = () => {
  pdfFile.value = null
  fileError.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  // Restore original PDF URL if available
  if (originalData.value?.pdf_url) {
    formData.pdf_url = originalData.value.pdf_url
  }
}

// Clear existing PDF to upload new one
const clearExistingPdf = () => {
  formData.pdf_url = undefined
}

const handleSubmit = () => {
  if (!formData.title.trim()) return
  
  // Don't submit if no changes
  if (!hasChanges.value) return
  
  const submitData: any = { ...formData }
  
  // Include PDF file if selected
  if (formData.kind === 'pdf' && pdfFile.value) {
    submitData.file = pdfFile.value
    // Clear pdf_url when uploading new file
    submitData.pdf_url = undefined
  }
  
  emit('submit', submitData)
}
</script>