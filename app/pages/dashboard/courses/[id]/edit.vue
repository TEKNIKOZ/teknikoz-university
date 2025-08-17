<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                Edit Course
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {{ course?.title || 'Loading...' }}
              </p>
            </div>
            <div class="flex items-center gap-3">
              <NuxtLink
                v-if="course"
                :to="`/course-catalog/${course.slug}`"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Icon name="mdi:eye" class="mr-2" />
                Preview
              </NuxtLink>
              <NuxtLink
                to="/dashboard/courses"
                class="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
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

    <!-- Content -->
    <div v-else-if="course" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
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
        <div v-if="activeTab === 'basic'" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Information
          </h2>
          
          <form @submit.prevent="updateCourseInfo" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Title -->
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Course Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="courseData.title"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <!-- Summary -->
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Course Summary
                </label>
                <textarea
                  v-model="courseData.summary"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <!-- Level -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Difficulty Level
                </label>
                <select
                  v-model="courseData.level"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <!-- Status -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  v-model="courseData.status"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <!-- Visibility -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Visibility
                </label>
                <select
                  v-model="courseData.visibility"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <!-- Cover URL -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Image URL
                </label>
                <input
                  v-model="courseData.cover_url"
                  type="url"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                :disabled="isSaving"
                class="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {{ isSaving ? 'Saving...' : 'Save Changes' }}
              </button>
            </div>
          </form>
        </div>

        <!-- Sections Tab -->
        <div v-if="activeTab === 'sections'" class="space-y-6">
          <!-- Add Section Button -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Course Sections
              </h2>
              <button
                @click="showAddSection = true"
                class="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Icon name="mdi:plus" class="mr-2" />
                Add Section
              </button>
            </div>

            <!-- Sections List -->
            <div v-if="course.sections?.length" class="space-y-4">
              <div
                v-for="section in course.sections"
                :key="section.id"
                class="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div class="p-4 bg-gray-50 dark:bg-gray-700/50">
                  <div class="flex items-center justify-between">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      {{ section.title }}
                    </h3>
                    <div class="flex items-center gap-2">
                      <button
                        @click="editSection(section)"
                        class="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                      >
                        <Icon name="mdi:pencil" />
                      </button>
                      <button
                        @click="deleteSection(section.id)"
                        class="p-2 text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <Icon name="mdi:delete" />
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Lessons -->
                <div v-if="section.lessons?.length" class="p-4 space-y-2">
                  <div
                    v-for="lesson in section.lessons"
                    :key="lesson.id"
                    class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                  >
                    <div class="flex items-center gap-3">
                      <Icon :name="getLessonIcon(lesson.kind)" class="text-gray-500" />
                      <span class="text-gray-900 dark:text-white">{{ lesson.title }}</span>
                      <span class="text-xs text-gray-500">{{ lesson.kind }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <button
                        @click="editLesson(lesson)"
                        class="p-1 text-gray-500 hover:text-primary-600 transition-colors"
                      >
                        <Icon name="mdi:pencil" class="text-sm" />
                      </button>
                      <button
                        @click="deleteLesson(lesson.id)"
                        class="p-1 text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <Icon name="mdi:delete" class="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else class="p-4 text-center text-gray-500">
                  No lessons in this section
                </div>

                <!-- Add Lesson Button -->
                <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    @click="showAddLesson(section.id)"
                    class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Icon name="mdi:plus" class="mr-2" />
                    Add Lesson
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
              <Icon name="mdi:book-open-variant" class="text-5xl mb-4" />
              <p>No sections yet. Add your first section to get started.</p>
            </div>
          </div>
        </div>

        <!-- Materials Tab -->
        <div v-if="activeTab === 'materials'" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Course Materials
            </h2>
            <button
              @click="showUploadMaterial = true"
              class="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Icon name="mdi:upload" class="mr-2" />
              Upload Material
            </button>
          </div>

          <!-- Materials List -->
          <div v-if="course.materials?.length" class="space-y-4">
            <div
              v-for="material in course.materials"
              :key="material.id"
              class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <Icon :name="getMaterialIcon(material.file_type)" class="text-3xl text-gray-500" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">
                    {{ material.title }}
                  </h4>
                  <p v-if="material.description" class="text-sm text-gray-500 dark:text-gray-400">
                    {{ material.description }}
                  </p>
                  <div class="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span>{{ material.file_type }}</span>
                    <span v-if="material.file_size_bytes">
                      {{ formatFileSize(material.file_size_bytes) }}
                    </span>
                    <span class="capitalize">{{ material.access_level }}</span>
                  </div>
                </div>
              </div>
              <button
                @click="deleteMaterial(material.id)"
                class="p-2 text-gray-500 hover:text-red-600 transition-colors"
              >
                <Icon name="mdi:delete" />
              </button>
            </div>
          </div>
          <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
            <Icon name="mdi:folder-open" class="text-5xl mb-4" />
            <p>No materials uploaded yet.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Section Modal -->
    <Teleport to="body">
      <div v-if="showAddSection" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
          <div class="fixed inset-0 bg-black/50" @click="showAddSection = false"></div>
          
          <div class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Add Section
            </h3>
            
            <form @submit.prevent="createSection" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Section Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="sectionForm.title"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Order Index
                </label>
                <input
                  v-model.number="sectionForm.order_index"
                  type="number"
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="showAddSection = false"
                  class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isCreatingSection"
                  class="flex-1 px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {{ isCreatingSection ? 'Creating...' : 'Create Section' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCourseStore } from '~/stores/course.stores';
import { useAuthStore } from '~/stores/auth.stores';
import type { CourseWithDetails, SectionFormData } from '~/types/course';

const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();
const authStore = useAuthStore();

const loading = ref(true);
const error = ref('');
const isSaving = ref(false);
const activeTab = ref('basic');
const showAddSection = ref(false);
const isCreatingSection = ref(false);

const tabs = [
  { id: 'basic', label: 'Basic Info', icon: 'mdi:information' },
  { id: 'sections', label: 'Sections & Lessons', icon: 'mdi:book-open-variant' },
  { id: 'materials', label: 'Materials', icon: 'mdi:folder' }
];

const course = computed(() => courseStore.currentCourse);

const courseData = reactive({
  title: '',
  summary: '',
  level: '',
  status: 'draft',
  visibility: 'public',
  cover_url: ''
});

const sectionForm = reactive<SectionFormData>({
  title: '',
  order_index: 0
});

const getLessonIcon = (kind: string) => {
  switch (kind) {
    case 'video': return 'mdi:play-circle';
    case 'pdf': return 'mdi:file-pdf-box';
    case 'text': return 'mdi:text-box';
    case 'external': return 'mdi:link';
    default: return 'mdi:file';
  }
};

const getMaterialIcon = (type?: string) => {
  switch (type) {
    case 'pdf': return 'mdi:file-pdf-box';
    case 'video': return 'mdi:video';
    case 'image': return 'mdi:image';
    case 'document': return 'mdi:file-document';
    case 'archive': return 'mdi:folder-zip';
    default: return 'mdi:file';
  }
};

const formatFileSize = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
};

const updateCourseInfo = async () => {
  if (!course.value) return;
  
  isSaving.value = true;
  try {
    const result = await courseStore.updateCourse(course.value.id, {
      title: courseData.title,
      summary: courseData.summary,
      level: courseData.level as any,
      status: courseData.status as any,
      visibility: courseData.visibility as any,
      cover_url: courseData.cover_url
    });
    
    if (!result.success) {
      alert('Failed to update course');
    }
  } catch (err) {
    console.error('Error updating course:', err);
    alert('Error updating course');
  } finally {
    isSaving.value = false;
  }
};

const createSection = async () => {
  if (!course.value || !sectionForm.title) return;
  
  isCreatingSection.value = true;
  try {
    const result = await courseStore.createSection(course.value.id, sectionForm);
    
    if (result.success) {
      showAddSection.value = false;
      sectionForm.title = '';
      sectionForm.order_index = 0;
    } else {
      alert('Failed to create section');
    }
  } catch (err) {
    console.error('Error creating section:', err);
    alert('Error creating section');
  } finally {
    isCreatingSection.value = false;
  }
};

const deleteSection = async (sectionId: number) => {
  if (!confirm('Are you sure you want to delete this section?')) return;
  // TODO: Implement section deletion
  console.log('Delete section:', sectionId);
};

const editSection = (section: any) => {
  // TODO: Implement section editing
  console.log('Edit section:', section);
};

const showAddLesson = (sectionId: number) => {
  // TODO: Implement lesson addition
  console.log('Add lesson to section:', sectionId);
};

const editLesson = (lesson: any) => {
  // TODO: Implement lesson editing
  console.log('Edit lesson:', lesson);
};

const deleteLesson = async (lessonId: number) => {
  if (!confirm('Are you sure you want to delete this lesson?')) return;
  // TODO: Implement lesson deletion
  console.log('Delete lesson:', lessonId);
};

const showUploadMaterial = ref(false);

const deleteMaterial = async (materialId: number) => {
  if (!confirm('Are you sure you want to delete this material?')) return;
  
  try {
    const result = await courseStore.deleteMaterial(materialId);
    if (!result.success) {
      alert('Failed to delete material');
    }
  } catch (err) {
    console.error('Error deleting material:', err);
    alert('Error deleting material');
  }
};

onMounted(async () => {
  // Check permissions
  const userRoles = authStore.roles;
  if (!userRoles.includes('admin') && !userRoles.includes('teacher')) {
    router.push('/dashboard');
    return;
  }
  
  // Load course
  const courseId = parseInt(route.params.id as string);
  if (isNaN(courseId)) {
    error.value = 'Invalid course ID';
    loading.value = false;
    return;
  }
  
  try {
    const result = await courseStore.fetchCourseById(courseId, true);
    
    if (result.success && course.value) {
      // Populate form data
      courseData.title = course.value.title;
      courseData.summary = course.value.summary || '';
      courseData.level = course.value.level || '';
      courseData.status = course.value.status || 'draft';
      courseData.visibility = course.value.visibility || 'public';
      courseData.cover_url = course.value.cover_url || '';
    } else {
      error.value = result.error || 'Failed to load course';
    }
  } catch (err) {
    console.error('Error loading course:', err);
    error.value = 'Error loading course';
  } finally {
    loading.value = false;
  }
});
</script>