<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
        Course Materials
      </h2>
      <button
        @click="$emit('showUploadMaterial')"
        class="px-4 py-2.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
      >
        <Icon name="mdi:upload" class="mr-2" />
        Upload Material
      </button>
    </div>

    <!-- Materials List -->
    <div v-if="course?.materials?.length" class="space-y-4">
      <div
        v-for="material in course.materials"
        :key="material.id"
        class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
      >
        <div
          v-if="props.editingMaterial !== material.id"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <Icon
              :name="getMaterialIcon(material.file_type)"
              class="text-3xl text-brand dark:text-brand"
            />
            <div>
              <h4 class="font-medium text-gray-900 dark:text-white">
                {{ material.title }}
              </h4>
              <p
                v-if="material.description"
                class="text-sm text-gray-500 dark:text-gray-400"
              >
                {{ material.description }}
              </p>
              <div class="flex items-center gap-3 mt-1 text-xs">
                <span
                  class="capitalize text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded font-medium"
                  >{{ material.file_type }}</span
                >
                <span
                  v-if="material.file_size_bytes"
                  class="text-gray-600 dark:text-gray-400"
                >
                  {{ formatFileSize(material.file_size_bytes) }}
                </span>
                <span
                  class="capitalize bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand/90 px-2 py-0.5 rounded font-medium"
                  >{{ material.access_level }}</span
                >
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button
              @click="emit('startMaterialEdit', material)"
              class="p-2 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
            >
              <Icon name="mdi:pencil" class="flex items-center" />
            </button>
            <button
              @click="$emit('deleteMaterial', material)"
              :disabled="deletingMaterialId === material.id"
              class="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                v-if="deletingMaterialId === material.id"
                name="mdi:loading"
                class="animate-spin"
              />
              <Icon v-else name="mdi:delete" class="flex items-center" />
            </button>
          </div>
        </div>
        <!-- Edit Mode -->
        <div v-else class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >Title</label
            >
            <input
              :value="props.editingMaterialData?.title || ''"
              @input="
                updateMaterialData(
                  'title',
                  ($event.target as HTMLInputElement).value
                )
              "
              type="text"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              placeholder="Material title"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >Description</label
            >
            <textarea
              :value="props.editingMaterialData?.description || ''"
              @input="
                updateMaterialData(
                  'description',
                  ($event.target as HTMLTextAreaElement).value
                )
              "
              rows="2"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              placeholder="Material description"
            ></textarea>
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >Access Level</label
            >
            <div class="relative">
              <select
                :value="props.editingMaterialData?.access_level || 'enrolled'"
                @change="
                  updateMaterialData(
                    'access_level',
                    ($event.target as HTMLSelectElement).value
                  )
                "
                class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
              >
                <option value="public">Public</option>
                <option value="enrolled">Enrolled</option>
                <option value="premium">Premium</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
              >
                <Icon name="mdi:chevron-down" class="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 justify-end">
            <button
              @click="
                emit('saveMaterial', material.id, props.editingMaterialData)
              "
              :disabled="props.isSavingMaterial"
              class="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <Icon
                v-if="props.isSavingMaterial"
                name="mdi:loading"
                class="animate-spin mr-2"
              />
              {{ props.isSavingMaterial ? "Saving..." : "Save" }}
            </button>
            <button
              @click="emit('cancelMaterialEdit')"
              :disabled="props.isSavingMaterial"
              class="px-4 py-2 bg-gray-400 text-white font-medium rounded-lg hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
      <Icon name="mdi:folder-open" class="text-5xl mb-4" />
      <p>No materials uploaded yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface Material {
  id: number;
  title: string;
  description?: string;
  file_type?: string;
  file_size_bytes?: number;
  access_level?: "public" | "enrolled" | "premium";
  order_index?: number;
}

interface Course {
  materials?: Material[];
}

interface Props {
  course: Course | null;
  deletingMaterialId?: number | null;
  editingMaterial?: number | null;
  editingMaterialData?: Partial<Material>;
  isSavingMaterial?: boolean;
}

interface Emits {
  (e: "showUploadMaterial"): void;
  (e: "deleteMaterial", material: Material): void;
  (e: "saveMaterial", materialId: number, data: Partial<Material>): void;
  (e: "startMaterialEdit", material: Material): void;
  (e: "cancelMaterialEdit"): void;
}

const props = withDefaults(defineProps<Props>(), {
  deletingMaterialId: null,
  editingMaterial: null,
  editingMaterialData: () => ({}),
  isSavingMaterial: false,
});

const emit = defineEmits<Emits>();

// Update material data by directly modifying the reactive object from parent
const updateMaterialData = (key: string, value: any) => {
  if (props.editingMaterialData) {
    (props.editingMaterialData as any)[key] = value;
  }
};

const getMaterialIcon = (type?: string) => {
  switch (type) {
    case "pdf":
      return "mdi:file-pdf-box";
    case "video":
      return "mdi:video";
    case "image":
      return "mdi:image";
    case "document":
      return "mdi:file-document";
    case "archive":
      return "mdi:folder-zip";
    default:
      return "mdi:file";
  }
};

const formatFileSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
};
</script>
