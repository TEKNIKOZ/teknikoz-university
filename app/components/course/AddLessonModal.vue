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
              <div class="grid grid-cols-2 gap-3">
                <label
                  class="relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all"
                  :class="formData.kind === 'video' 
                    ? 'border-brand bg-brand/10 dark:bg-brand/20' 
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'"
                >
                  <input
                    v-model="formData.kind"
                    type="radio"
                    value="video"
                    class="sr-only"
                  />
                  <div class="text-center">
                    <Icon name="mdi:video" class="w-8 h-8 mb-2" :class="formData.kind === 'video' ? 'text-brand' : 'text-gray-500 dark:text-gray-400'" />
                    <span class="block text-sm font-medium" :class="formData.kind === 'video' ? 'text-brand' : 'text-gray-700 dark:text-gray-300'">
                      Video
                    </span>
                  </div>
                </label>
                <label
                  class="relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all"
                  :class="formData.kind === 'pdf' 
                    ? 'border-brand bg-brand/10 dark:bg-brand/20' 
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'"
                >
                  <input
                    v-model="formData.kind"
                    type="radio"
                    value="pdf"
                    class="sr-only"
                  />
                  <div class="text-center">
                    <Icon name="mdi:file-pdf-box" class="w-8 h-8 mb-2" :class="formData.kind === 'pdf' ? 'text-brand' : 'text-gray-500 dark:text-gray-400'" />
                    <span class="block text-sm font-medium" :class="formData.kind === 'pdf' ? 'text-brand' : 'text-gray-700 dark:text-gray-300'">
                      PDF Document
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Video Fields -->
            <div v-if="formData.kind === 'video'" class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Vimeo Video ID <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.vod_asset_id"
                  type="text"
                  required
                  placeholder="e.g., 123456789"
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
            <div v-if="formData.kind === 'pdf'">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Upload PDF File <span class="text-red-500">*</span>
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
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Maximum file size: 100MB
                  </p>
                </div>
                
                <!-- File Preview -->
                <div v-else class="p-6">
                  <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div class="flex items-center gap-3">
                      <Icon name="mdi:file-pdf-box" class="w-10 h-10 text-red-500" />
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
                :disabled="isLoading || !isFormValid"
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
import { reactive, ref, computed, watch } from "vue";

interface LessonFormData {
  section_id?: number;
  title: string;
  kind: string;
  duration_sec?: number;
  vod_asset_id?: string;
  pdf_url?: string;
  is_free_preview: boolean;
  file?: File;
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
  duration_sec: undefined,
  vod_asset_id: undefined,
  pdf_url: undefined,
  is_free_preview: false,
});

const pdfFile = ref<File | null>(null);
const fileError = ref<string>("");
const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

// Computed property to check if form is valid
const isFormValid = computed(() => {
  if (!formData.title.trim()) return false;
  
  if (formData.kind === 'video') {
    return !!formData.vod_asset_id;
  }
  
  if (formData.kind === 'pdf') {
    return !!pdfFile.value;
  }
  
  return false;
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
      formData.duration_sec = undefined;
      formData.vod_asset_id = undefined;
      formData.pdf_url = undefined;
      formData.is_free_preview = false;
      pdfFile.value = null;
      fileError.value = "";
      isDragging.value = false;
    }
  }
);

// Format file size for display
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

// Validate PDF file
const validatePdfFile = (file: File): boolean => {
  fileError.value = "";
  
  // Check file type
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    fileError.value = "Please select a PDF file";
    return false;
  }
  
  // Check file size (100MB limit)
  const maxSize = 100 * 1024 * 1024; // 100MB in bytes
  if (file.size > maxSize) {
    fileError.value = "File size exceeds 100MB limit";
    return false;
  }
  
  return true;
};

// Handle file selection from input
const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file && validatePdfFile(file)) {
    pdfFile.value = file;
  } else if (file) {
    pdfFile.value = null;
  }
};

// Handle drag and drop
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  isDragging.value = false;
  
  const file = event.dataTransfer?.files[0];
  
  if (file && validatePdfFile(file)) {
    pdfFile.value = file;
  } else if (file) {
    pdfFile.value = null;
  }
};

// Remove selected PDF file
const removePdfFile = () => {
  pdfFile.value = null;
  fileError.value = "";
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

// Handle form submission
const handleSubmit = () => {
  if (!isFormValid.value) return;

  const submitData: LessonFormData = { ...formData };
  
  if (formData.kind === 'pdf' && pdfFile.value) {
    submitData.file = pdfFile.value;
  }

  emit("submit", submitData);
};
</script>
