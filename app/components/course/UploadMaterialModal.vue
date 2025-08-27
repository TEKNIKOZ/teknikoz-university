<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 py-6 sm:py-8">
        <div
          class="fixed inset-0 bg-black/50"
          @click="handleCancel"
        ></div>

        <div
          class="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-4 sm:p-6 my-6 sm:my-8 mx-auto max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
        >
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
          >
            Upload Course Material
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- File Input -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                File <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  ref="fileInput"
                  type="file"
                  @change="handleFileSelect"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 dark:file:bg-brand/30 dark:file:text-brand cursor-pointer"
                />
                <div
                  v-if="selectedFile"
                  class="mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                >
                  <Icon
                    :name="getMaterialIcon(getFileType(selectedFile.name))"
                    class="inline mr-2 text-brand dark:text-brand"
                  />
                  <span class="font-medium">{{ selectedFile.name }}</span>
                  <span class="text-gray-500 dark:text-gray-400 ml-2"
                    >({{ formatFileSize(selectedFile.size) }})</span
                  >
                </div>
              </div>
            </div>

            <!-- Title -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Title <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.title"
                type="text"
                required
                placeholder="Enter material title"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <!-- Description -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Description
              </label>
              <textarea
                v-model="formData.description"
                rows="3"
                placeholder="Brief description of the material (optional)"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <!-- Access Level -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Access Level <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select
                  v-model="formData.access_level"
                  required
                  class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                >
                  <option value="public">Public - Anyone can access</option>
                  <option value="enrolled">Enrolled - Only enrolled students</option>
                  <option value="premium">Premium - Paid members only</option>
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



            <!-- Upload Progress -->
            <div
              v-if="uploadProgress > 0 && uploadProgress < 100"
              class="space-y-2"
            >
              <div class="flex justify-between text-sm font-medium">
                <span class="text-gray-700 dark:text-gray-300"
                  >Uploading...</span
                >
                <span class="text-brand dark:text-brand"
                  >{{ uploadProgress }}%</span
                >
              </div>
              <div
                class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden"
              >
                <div
                  class="bg-gradient-to-r from-brand to-brand/80 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                  :style="{ width: `${uploadProgress}%` }"
                ></div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3 pt-2">
              <button
                type="button"
                @click="handleCancel"
                class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isLoading || !selectedFile"
                class="flex-1 px-4 py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {{ isLoading ? "Uploading..." : "Upload Material" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

interface MaterialFormData {
  title: string
  description: string
  access_level: string
}

interface Props {
  show: boolean
  isLoading?: boolean
  uploadProgress?: number
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', formData: FormData): void
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  uploadProgress: 0
})

const emit = defineEmits<Emits>()

const fileInput = ref<HTMLInputElement>()
const selectedFile = ref<File | null>(null)

const formData = reactive<MaterialFormData>({
  title: '',
  description: '',
  access_level: 'enrolled'
})

const getMaterialIcon = (type?: string) => {
  switch (type) {
    case 'pdf':
      return 'mdi:file-pdf-box'
    case 'video':
      return 'mdi:video'
    case 'image':
      return 'mdi:image'
    case 'document':
      return 'mdi:file-document'
    case 'archive':
      return 'mdi:folder-zip'
    default:
      return 'mdi:file'
  }
}

const getFileType = (filename: string): string => {
  const ext = filename.split('.').pop()?.toLowerCase()
  if (['pdf'].includes(ext || '')) return 'pdf'
  if (['mp4', 'avi', 'mov', 'webm'].includes(ext || '')) return 'video'
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return 'image'
  if (['doc', 'docx', 'txt', 'md'].includes(ext || '')) return 'document'
  if (['zip', 'rar', '7z', 'tar'].includes(ext || '')) return 'archive'
  return 'file'
}

const formatFileSize = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  if (bytes === 0) return '0 Bytes'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i]
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
    // Auto-fill title if empty
    if (!formData.title) {
      const filename = selectedFile.value.name
      // Remove extension and replace underscores/hyphens with spaces
      formData.title = filename
        .replace(/\.[^/.]+$/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
    }
  }
}

const handleCancel = () => {
  emit('close')
}

const handleSubmit = () => {
  if (!selectedFile.value) return

  // Create FormData
  const uploadFormData = new FormData()
  uploadFormData.append('file', selectedFile.value)
  uploadFormData.append('title', formData.title)
  uploadFormData.append('description', formData.description || '')
  uploadFormData.append('access_level', formData.access_level)

  emit('submit', uploadFormData)
}

// Reset form when modal closes
watch(() => props.show, (newShow) => {
  if (!newShow) {
    selectedFile.value = null
    formData.title = ''
    formData.description = ''
    formData.access_level = 'enrolled'
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
})
</script>