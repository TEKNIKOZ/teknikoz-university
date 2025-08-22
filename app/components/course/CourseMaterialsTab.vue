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
          v-if="editingMaterial !== material.id"
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
                  class="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded font-medium"
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
              @click="startMaterialEdit(material)"
              class="p-2 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
            >
              <Icon name="mdi:pencil" />
            </button>
            <button
              @click="$emit('deleteMaterial', material.id)"
              :disabled="deletingMaterialId === material.id"
              class="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                v-if="deletingMaterialId === material.id"
                name="mdi:loading"
                class="animate-spin"
              />
              <Icon v-else name="mdi:delete" />
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
              v-model="editingMaterialData.title"
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
              v-model="editingMaterialData.description"
              rows="2"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              placeholder="Material description"
            ></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Access Level</label
              >
              <select
                v-model="editingMaterialData.access_level"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              >
                <option value="public">Public</option>
                <option value="enrolled">Enrolled</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Downloadable</label
              >
              <select
                v-model="editingMaterialData.is_downloadable"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              >
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
          </div>
          <div class="flex items-center gap-2 justify-end">
            <button
              @click="$emit('saveMaterial', material.id, editingMaterialData)"
              class="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <Icon name="mdi:check" class="mr-1" />
              Save
            </button>
            <button
              @click="cancelMaterialEdit"
              class="px-4 py-2 bg-gray-400 text-white font-medium rounded-lg hover:bg-gray-500 transition-colors"
            >
              <Icon name="mdi:close" class="mr-1" />
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
  is_downloadable?: boolean;
  order_index?: number;
}

interface Course {
  materials?: Material[];
}

interface Props {
  course: Course | null;
  deletingMaterialId?: number | null;
}

interface Emits {
  (e: "showUploadMaterial"): void;
  (e: "deleteMaterial", materialId: number): void;
  (e: "saveMaterial", materialId: number, data: Partial<Material>): void;
}

withDefaults(defineProps<Props>(), {
  deletingMaterialId: null,
});

defineEmits<Emits>();

const editingMaterial = ref<number | null>(null);
const editingMaterialData = reactive<Partial<Material>>({});

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

const startMaterialEdit = (material: Material) => {
  editingMaterial.value = material.id;
  Object.assign(editingMaterialData, {
    title: material.title,
    description: material.description,
    file_type: material.file_type,
    is_downloadable: material.is_downloadable,
    access_level: material.access_level,
    order_index: material.order_index,
  });
};

const cancelMaterialEdit = () => {
  editingMaterial.value = null;
  Object.assign(editingMaterialData, {});
};
</script>
