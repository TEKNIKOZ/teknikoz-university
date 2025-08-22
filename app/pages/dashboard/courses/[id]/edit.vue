<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div
      class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                Edit Course
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {{ course?.title || "Loading..." }}
              </p>
            </div>
            <div class="flex items-center gap-3">
              <NuxtLink
                v-if="course"
                :to="`/course-catalog/${course.slug}`"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600 shadow-sm"
              >
                <Icon name="mdi:eye" class="mr-2" />
                Preview
              </NuxtLink>
              <NuxtLink
                to="/dashboard/courses"
                class="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600 shadow-sm"
              >
                <Icon name="mdi:arrow-left" class="mr-2" />
                Back to Courses
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="max-w-7xl mx-auto px-4 py-8">
      <div class="animate-pulse">
        <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
        <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
        <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-7xl mx-auto px-4 py-8">
      <div
        class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6"
      >
        <div class="flex items-center">
          <Icon name="mdi:alert-circle" class="text-red-500 text-2xl mr-3" />
          <div>
            <h3 class="text-lg font-medium text-red-800 dark:text-red-400">
              Error Loading Course
            </h3>
            <p class="text-red-600 dark:text-red-300 mt-1">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div v-else-if="course" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Tabs -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
        <div class="border-b border-gray-200 dark:border-gray-700">
          <nav class="flex -mb-px">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-6 py-4 text-sm font-medium border-b-2 transition-colors',
                activeTab === tab.id
                  ? 'border-brand text-brand dark:text-brand'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
              ]"
            >
              <Icon :name="tab.icon" class="mr-2" />
              {{ tab.label }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Tab Content -->
      <div>
        <!-- Basic Info Tab -->
        <CourseBasicInfoTab
          v-if="activeTab === 'basic'"
          :course="course"
          :is-loading="isSaving"
          @submit="updateCourseInfo"
        />

        <!-- Old Basic Info content temporarily commented out -->
        <div
          v-if="false"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Information
          </h2>

          <form @submit.prevent="updateCourseInfo" class="space-y-6">
            <!-- Course Title and URL Slug Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Title -->
              <div>
                <label
                  for="title"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Course Title <span class="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  v-model="courseData.title"
                  type="text"
                  required
                  maxlength="255"
                  placeholder="e.g., Introduction to PLM Windchill"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
                />
              </div>

              <!-- Slug -->
              <div>
                <label
                  for="slug"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  URL Slug
                </label>
                <input
                  id="slug"
                  :value="course?.slug || ''"
                  type="text"
                  readonly
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                />
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  URL slug cannot be changed after creation
                </p>
              </div>
            </div>

            <!-- Course Summary Row -->
            <div>
              <label
                for="summary"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Course Summary
              </label>
              <textarea
                id="summary"
                v-model="courseData.summary"
                rows="4"
                placeholder="E.g. Learn the fundamentals of PLM and how to use Windchill effectively"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            <!-- Difficulty Level, Status, Visibility Row -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Level -->
              <div>
                <label
                  for="level"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Difficulty Level
                </label>
                <div class="relative">
                  <select
                    id="level"
                    v-model="courseData.level"
                    class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                  >
                    <option value="">Select Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
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

              <!-- Status -->
              <div>
                <label
                  for="status"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Status
                </label>
                <div class="relative">
                  <select
                    id="status"
                    v-model="courseData.status"
                    class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
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

              <!-- Visibility -->
              <div>
                <label
                  for="visibility"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Visibility
                </label>
                <div class="relative">
                  <select
                    id="visibility"
                    v-model="courseData.visibility"
                    class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
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
            </div>

            <!-- Cover Image URL -->
            <div>
              <label
                for="cover_url"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Cover Image URL
              </label>
              <input
                id="cover_url"
                v-model="courseData.cover_url"
                type="url"
                placeholder="https://example.com/image.jpg"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              />
            </div>

            <!-- Form Actions -->
            <div
              class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8"
            >
              <div class="flex items-center justify-end gap-4">
                <NuxtLink
                  to="/dashboard/courses"
                  class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </NuxtLink>
                <button
                  type="submit"
                  :disabled="isSaving"
                  class="px-6 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSaving">Save Changes</span>
                  <span v-else class="flex items-center">
                    <Icon name="mdi:loading" class="animate-spin mr-2" />
                    Saving...
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Sections Tab -->
        <CourseSectionsTab
          v-if="activeTab === 'sections'"
          :course="course"
          :is-creating-section="isCreatingSection"
          :deleting-section-id="deletingSectionId"
          :deleting-lesson-id="deletingLessonId"
          :editing-section="editingSection"
          :editing-section-title="editingSectionTitle"
          @show-add-section="showAddSection = true"
          @show-add-lesson="showAddLesson"
          @start-section-edit="startSectionEdit"
          @save-section="saveSection"
          @cancel-section-edit="cancelSectionEdit"
          @delete-section="deleteSection"
          @move-section-up="moveSectionUp"
          @move-section-down="moveSectionDown"
          @start-lesson-edit="startLessonEdit"
          @delete-lesson="deleteLesson"
          @move-lesson-up="moveLessonUp"
          @move-lesson-down="moveLessonDown"
        />

        <!-- Materials Tab -->
        <CourseMaterialsTab
          v-if="activeTab === 'materials'"
          :course="course"
          :deleting-material-id="deletingMaterialId"
          :editing-material="editingMaterial"
          :editing-material-data="editingMaterialData"
          @show-upload-material="showUploadMaterial = true"
          @start-material-edit="startMaterialEdit"
          @save-material="saveMaterial"
          @cancel-material-edit="cancelMaterialEdit"
          @delete-material="deleteMaterial"
        />
      </div>
    </div>

    <!-- Add Section Modal -->
    <AddSectionModal
      :show="showAddSection"
      :is-loading="isCreatingSection"
      @close="showAddSection = false"
      @submit="createSection"
    />

    <!-- Upload Material Modal -->
    <UploadMaterialModal
      :show="showUploadMaterial"
      :is-loading="isUploadingMaterial"
      :upload-progress="uploadProgress"
      @close="cancelUpload"
      @submit="uploadMaterial"
    />

    <!-- Add Lesson Modal -->
    <AddLessonModal
      :show="showAddLessonModal"
      :section-id="currentSectionId"
      :is-loading="isCreatingLesson"
      @close="showAddLessonModal = false"
      @submit="createLesson"
    />

    <!-- Edit Lesson Modal -->
    <EditLessonModal
      :show="showEditLessonModal"
      :lesson="currentEditingLesson"
      :sections="course?.sections || []"
      :is-loading="isUpdatingLesson"
      @close="showEditLessonModal = false"
      @submit="updateLesson"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCourseStore } from "~/stores/course.stores";
import { useAuthStore } from "~/stores/auth.stores";

const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();
const authStore = useAuthStore();

const loading = ref(true);
const error = ref("");
const isSaving = ref(false);
const activeTab = ref("basic");
const showAddSection = ref(false);
const isCreatingSection = ref(false);

const tabs = [
  { id: "basic", label: "Basic Info", icon: "mdi:information" },
  {
    id: "sections",
    label: "Sections & Lessons",
    icon: "mdi:book-open-variant",
  },
  { id: "materials", label: "Materials", icon: "mdi:folder" },
];

const course = computed(() => courseStore.currentCourse);

const courseData = reactive({
  title: "",
  summary: "",
  level: "",
  status: "draft",
  visibility: "public",
  cover_url: "",
});


const updateCourseInfo = async (formData: any) => {
  if (!course.value) return;

  isSaving.value = true;
  try {
    const result = await courseStore.updateCourse(course.value.id, {
      title: formData.title,
      summary: formData.summary,
      level: formData.level as any,
      status: formData.status as any,
      visibility: formData.visibility as any,
      cover_url: formData.cover_url,
    });

    if (!result.success) {
      alert("Failed to update course");
    }
  } catch (err) {
    console.error("Error updating course:", err);
    alert("Error updating course");
  } finally {
    isSaving.value = false;
  }
};

const createSection = async (formData: any) => {
  if (!course.value || !formData.title) return;

  isCreatingSection.value = true;
  try {
    const result = await courseStore.createSection(
      course.value.id,
      formData
    );

    if (result.success) {
      showAddSection.value = false;
    } else {
      alert("Failed to create section");
    }
  } catch (err) {
    console.error("Error creating section:", err);
    alert("Error creating section");
  } finally {
    isCreatingSection.value = false;
  }
};

const deleteSection = async (sectionId: number) => {
  if (
    !confirm(
      "Are you sure you want to delete this section? All lessons in this section will also be deleted."
    )
  )
    return;

  deletingSectionId.value = sectionId;
  try {
    const result = await courseStore.deleteSection(sectionId);
    if (!result.success) {
      alert(result.error || "Failed to delete section");
    }
  } catch (err) {
    console.error("Error deleting section:", err);
    alert("Error deleting section. Please try again.");
  } finally {
    deletingSectionId.value = null;
  }
};

// Section reordering functions
const moveSectionUp = async (section: any, index: number) => {
  if (index === 0 || !course.value?.sections) return;

  const prevSection = course.value.sections[index - 1];
  const currentOrder = section.order_index || index;
  const prevOrder = prevSection.order_index || index - 1;

  try {
    // Swap order indices
    await courseStore.updateSection(section.id, {
      title: section.title,
      order_index: prevOrder,
    });
    await courseStore.updateSection(prevSection.id, {
      title: prevSection.title,
      order_index: currentOrder,
    });
  } catch (err) {
    console.error("Error reordering sections:", err);
    alert("Failed to reorder sections");
  }
};

const moveSectionDown = async (section: any, index: number) => {
  if (!course.value?.sections || index >= course.value.sections.length - 1)
    return;

  const nextSection = course.value.sections[index + 1];
  const currentOrder = section.order_index || index;
  const nextOrder = nextSection.order_index || index + 1;

  try {
    // Swap order indices
    await courseStore.updateSection(section.id, {
      title: section.title,
      order_index: nextOrder,
    });
    await courseStore.updateSection(nextSection.id, {
      title: nextSection.title,
      order_index: currentOrder,
    });
  } catch (err) {
    console.error("Error reordering sections:", err);
    alert("Failed to reorder sections");
  }
};

// Lesson reordering functions
const moveLessonUp = async (sectionId: number, lesson: any, index: number) => {
  if (index === 0 || !course.value?.sections) return;

  const section = course.value.sections.find((s) => s.id === sectionId);
  if (!section?.lessons) return;

  const prevLesson = section.lessons[index - 1];
  const currentOrder = lesson.order_index || index;
  const prevOrder = prevLesson.order_index || index - 1;

  try {
    // Swap order indices
    await courseStore.updateLesson(lesson.id, {
      ...lesson,
      order_index: prevOrder,
    });
    await courseStore.updateLesson(prevLesson.id, {
      ...prevLesson,
      order_index: currentOrder,
    });
  } catch (err) {
    console.error("Error reordering lessons:", err);
    alert("Failed to reorder lessons");
  }
};

const moveLessonDown = async (
  sectionId: number,
  lesson: any,
  index: number
) => {
  if (!course.value?.sections) return;

  const section = course.value.sections.find((s) => s.id === sectionId);
  if (!section?.lessons || index >= section.lessons.length - 1) return;

  const nextLesson = section.lessons[index + 1];
  const currentOrder = lesson.order_index || index;
  const nextOrder = nextLesson.order_index || index + 1;

  try {
    // Swap order indices
    await courseStore.updateLesson(lesson.id, {
      ...lesson,
      order_index: nextOrder,
    });
    await courseStore.updateLesson(nextLesson.id, {
      ...nextLesson,
      order_index: currentOrder,
    });
  } catch (err) {
    console.error("Error reordering lessons:", err);
    alert("Failed to reorder lessons");
  }
};

const showAddLesson = (sectionId: number) => {
  currentSectionId.value = sectionId;
  showAddLessonModal.value = true;
};

const createLesson = async (formData: any) => {
  if (!course.value || !formData.title || !formData.section_id) return;

  isCreatingLesson.value = true;
  try {
    const result = await courseStore.createLesson(course.value.id, formData);

    if (result.success) {
      showAddLessonModal.value = false;
    } else {
      alert(result.error || "Failed to create lesson");
    }
  } catch (err) {
    console.error("Error creating lesson:", err);
    alert("Error creating lesson");
  } finally {
    isCreatingLesson.value = false;
  }
};

const updateLesson = async (formData: any) => {
  if (!currentEditingLesson.value || !formData.title) return;

  isUpdatingLesson.value = true;
  try {
    const result = await courseStore.updateLesson(
      currentEditingLesson.value.id,
      formData
    );

    if (result.success) {
      showEditLessonModal.value = false;
      currentEditingLesson.value = null;
    } else {
      alert(result.error || "Failed to update lesson");
    }
  } catch (err) {
    console.error("Error updating lesson:", err);
    alert("Error updating lesson");
  } finally {
    isUpdatingLesson.value = false;
  }
};

// Section edit functions
const startSectionEdit = (section: any) => {
  editingSection.value = section.id;
  editingSectionTitle.value = section.title;
};

const cancelSectionEdit = () => {
  editingSection.value = null;
  editingSectionTitle.value = "";
};

const saveSection = async (sectionId: number, title: string) => {
  if (!title.trim()) {
    alert("Section title cannot be empty");
    return;
  }

  try {
    const result = await courseStore.updateSection(sectionId, {
      title: title.trim(),
    });

    if (result.success) {
      editingSection.value = null;
      editingSectionTitle.value = "";
    } else {
      alert(result.error || "Failed to update section");
    }
  } catch (err) {
    console.error("Error updating section:", err);
    alert("Error updating section");
  }
};

// Lesson edit functions
const startLessonEdit = (lesson: any) => {
  currentEditingLesson.value = lesson;
  showEditLessonModal.value = true;
};

const deleteLesson = async (lessonId: number) => {
  if (!confirm("Are you sure you want to delete this lesson?")) return;

  deletingLessonId.value = lessonId;
  try {
    const result = await courseStore.deleteLesson(lessonId);
    if (!result.success) {
      alert(result.error || "Failed to delete lesson");
    }
  } catch (err) {
    console.error("Error deleting lesson:", err);
    alert("Error deleting lesson. Please try again.");
  } finally {
    deletingLessonId.value = null;
  }
};

// Material edit functions
const startMaterialEdit = (material: any) => {
  editingMaterial.value = material.id;
  editingMaterialData.value = {
    title: material.title,
    description: material.description,
    file_type: material.file_type,
    is_downloadable: material.is_downloadable,
    access_level: material.access_level,
    order_index: material.order_index,
  };
};

const cancelMaterialEdit = () => {
  editingMaterial.value = null;
  editingMaterialData.value = {};
};

const saveMaterial = async (materialId: number, data: any) => {
  if (!data.title?.trim()) {
    alert("Material title cannot be empty");
    return;
  }

  try {
    const result = await courseStore.updateMaterial(materialId, data);

    if (result.success) {
      editingMaterial.value = null;
      editingMaterialData.value = {};
    } else {
      alert(result.error || "Failed to update material");
    }
  } catch (err) {
    console.error("Error updating material:", err);
    alert("Error updating material");
  }
};

const showUploadMaterial = ref(false);
const isUploadingMaterial = ref(false);
const uploadProgress = ref(0);
const deletingSectionId = ref<number | null>(null);
const deletingLessonId = ref<number | null>(null);
const deletingMaterialId = ref<number | null>(null);
const showAddLessonModal = ref(false);
const isCreatingLesson = ref(false);
const currentSectionId = ref<number | null>(null);
const showEditLessonModal = ref(false);
const isUpdatingLesson = ref(false);
const currentEditingLesson = ref<any>(null);

// Edit state variables
const editingSection = ref<number | null>(null);
const editingSectionTitle = ref("");
const editingMaterial = ref<number | null>(null);
const editingMaterialData = ref<{
  title?: string;
  description?: string;
  file_type?: string;
  is_downloadable?: boolean;
  access_level?: "public" | "enrolled" | "premium";
  order_index?: number;
}>({});


const cancelUpload = () => {
  showUploadMaterial.value = false;
  uploadProgress.value = 0;
};

const uploadMaterial = async (formData: FormData) => {
  if (!course.value) return;

  isUploadingMaterial.value = true;
  uploadProgress.value = 0;

  try {
    // Simulate progress (since we don't have real progress tracking)
    const progressInterval = setInterval(() => {
      if (uploadProgress.value < 90) {
        uploadProgress.value += 10;
      }
    }, 200);

    const result = await courseStore.uploadMaterial(course.value.id, formData);

    clearInterval(progressInterval);
    uploadProgress.value = 100;

    if (result.success) {
      // Success - close modal and reset
      setTimeout(() => {
        cancelUpload();
        // Refresh the course to get the new material
        courseStore.fetchCourseById(course.value!.id, true);
      }, 500);
    } else {
      alert(result.error || "Failed to upload material");
      uploadProgress.value = 0;
    }
  } catch (err) {
    console.error("Error uploading material:", err);
    alert("Error uploading material. Please try again.");
    uploadProgress.value = 0;
  } finally {
    isUploadingMaterial.value = false;
  }
};

const deleteMaterial = async (materialId: number) => {
  if (!confirm("Are you sure you want to delete this material?")) return;

  deletingMaterialId.value = materialId;
  try {
    const result = await courseStore.deleteMaterial(materialId);
    if (!result.success) {
      alert("Failed to delete material");
    }
  } catch (err) {
    console.error("Error deleting material:", err);
    alert("Error deleting material. Please try again.");
  } finally {
    deletingMaterialId.value = null;
  }
};

onMounted(async () => {
  // Check permissions
  const userRoles = authStore.roles;
  if (!userRoles.includes("admin") && !userRoles.includes("teacher")) {
    router.push("/dashboard");
    return;
  }

  // Load course
  const courseId = parseInt(route.params.id as string);
  if (isNaN(courseId)) {
    error.value = "Invalid course ID";
    loading.value = false;
    return;
  }

  try {
    const result = await courseStore.fetchCourseById(courseId, true);

    if (result.success && course.value) {
      // Populate form data
      courseData.title = course.value.title;
      courseData.summary = course.value.summary || "";
      courseData.level = course.value.level || "";
      courseData.status = course.value.status || "draft";
      courseData.visibility = course.value.visibility || "public";
      courseData.cover_url = course.value.cover_url || "";
    } else {
      error.value = result.error || "Failed to load course";
    }
  } catch (err) {
    console.error("Error loading course:", err);
    error.value = "Error loading course";
  } finally {
    loading.value = false;
  }
});
</script>
