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
                Course Management
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Manage your courses, sections, lessons, and materials
              </p>
            </div>
            <NuxtLink
              to="/dashboard/courses/create"
              class="inline-flex items-center px-4 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors"
            >
              <Icon name="mdi:plus" class="mr-2 text-xl" />
              Create Course
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="md:col-span-2">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Search Courses
            </label>
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by title..."
                class="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
              />
              <Icon
                name="mdi:magnify"
                class="absolute left-3 top-2.5 text-gray-400 text-xl"
              />
            </div>
          </div>

          <!-- Status Filter -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Status
            </label>
            <select
              v-model="filters.status"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Statuses</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <!-- Level Filter -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Level
            </label>
            <select
              v-model="filters.level"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Course List -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <!-- Loading State -->
      <div
        v-if="courseStore.loading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
        >
          <div class="animate-pulse">
            <div class="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div class="p-6">
              <div
                class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"
              ></div>
              <div
                class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"
              ></div>
              <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="courseStore.error"
        class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6"
      >
        <div class="flex items-center">
          <Icon name="mdi:alert-circle" class="text-red-500 text-2xl mr-3" />
          <div>
            <h3 class="text-lg font-medium text-red-800 dark:text-red-400">
              Error Loading Courses
            </h3>
            <p class="text-red-600 dark:text-red-300 mt-1">
              {{ courseStore.error }}
            </p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="!filteredCourses.length"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center"
      >
        <Icon
          name="mdi:book-open-variant"
          class="text-6xl text-gray-400 mb-4"
        />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{
            searchQuery || filters.status !== "all" || filters.level !== "all"
              ? "No courses found"
              : "No courses yet"
          }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{
            searchQuery || filters.status !== "all" || filters.level !== "all"
              ? "Try adjusting your filters or search query"
              : "Create your first course to get started"
          }}
        </p>
        <NuxtLink
          v-if="
            !searchQuery && filters.status === 'all' && filters.level === 'all'
          "
          to="/dashboard/courses/create"
          class="inline-flex items-center px-4 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors"
        >
          <Icon name="mdi:plus" class="mr-2" />
          Create Your First Course
        </NuxtLink>
      </div>

      <!-- Course Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="course in filteredCourses"
          :key="course.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
        >
          <!-- Course Cover -->
          <div class="aspect-video relative">
            <NuxtImg
              v-if="course.cover_url"
              :src="course.cover_url"
              :alt="course.title"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full bg-gradient-to-br from-brand to-brand/90 flex items-center justify-center"
            >
              <Icon
                name="mdi:book-open-variant"
                class="text-6xl text-white/50"
              />
            </div>

            <!-- Status Badge -->
            <div class="absolute top-4 right-4">
              <span
                :class="[
                  'px-3 py-1 text-xs font-semibold rounded-full',
                  course.status === 'published'
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-white',
                ]"
              >
                {{ course.status }}
              </span>
            </div>
          </div>

          <!-- Course Info -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ course.title }}
            </h3>

            <p
              v-if="course.summary"
              class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
            >
              {{ course.summary }}
            </p>

            <!-- Course Meta -->
            <div
              class="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400"
            >
              <div v-if="course.level" class="flex items-center">
                <Icon name="mdi:school" class="mr-1" />
                <span class="capitalize">{{ course.level }}</span>
              </div>
              <div class="flex items-center">
                <Icon name="mdi:eye" class="mr-1" />
                <span class="capitalize">{{ course.visibility }}</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-2">
              <NuxtLink
                :to="`/course-catalog/${course.slug}`"
                class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center"
              >
                <Icon name="mdi:eye" class="mr-1" />
                Preview
              </NuxtLink>
              <NuxtLink
                :to="`/dashboard/courses/${course.id}/edit`"
                class="flex-1 px-3 py-2 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand/90 transition-colors text-center"
              >
                <Icon name="mdi:pencil" class="mr-1" />
                Edit
              </NuxtLink>
              <button
                @click="confirmDelete(course)"
                class="px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                <Icon name="mdi:delete" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <Teleport to="body">
      <div v-if="showDeleteModal" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
          <div
            class="fixed inset-0 bg-black/50"
            @click="showDeleteModal = false"
          ></div>

          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Delete Course
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete "{{ courseToDelete?.title }}"?
              This action cannot be undone.
            </p>

            <div class="flex items-center gap-3">
              <button
                @click="showDeleteModal = false"
                class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                @click="deleteCourse"
                :disabled="isDeletingCourse"
                class="flex-1 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Icon
                  v-if="isDeletingCourse"
                  name="mdi:loading"
                  class="animate-spin mr-2"
                />
                {{ isDeletingCourse ? "Deleting..." : "Delete" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCourseStore } from "~/stores/course.stores";
import { useAuthStore } from "~/stores/auth.stores";
import type { Course } from "~/types/course";

const courseStore = useCourseStore();
const authStore = useAuthStore();
const router = useRouter();

const searchQuery = ref("");
const filters = ref({
  status: "all",
  level: "all",
});

const showDeleteModal = ref(false);
const courseToDelete = ref<Course | null>(null);
const isDeletingCourse = ref(false);

const filteredCourses = computed(() => {
  let courses = courseStore.courses;

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    courses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.summary?.toLowerCase().includes(query)
    );
  }

  // Filter by status
  if (filters.value.status !== "all") {
    courses = courses.filter(
      (course) => course.status === filters.value.status
    );
  }

  // Filter by level
  if (filters.value.level !== "all") {
    courses = courses.filter((course) => course.level === filters.value.level);
  }

  return courses;
});

const confirmDelete = (course: Course) => {
  courseToDelete.value = course;
  showDeleteModal.value = true;
};

const deleteCourse = async () => {
  if (!courseToDelete.value) return;

  isDeletingCourse.value = true;
  try {
    const result = await courseStore.deleteCourse(courseToDelete.value.id);

    if (result.success) {
      showDeleteModal.value = false;
      courseToDelete.value = null;
      // Refresh the course list
      await courseStore.fetchCourses({
        status: filters.value.status as "all" | "draft" | "published",
        visibility: "all",
        level: filters.value.level as
          | "all"
          | "beginner"
          | "intermediate"
          | "advanced",
      });
    } else {
      alert(result.error || "Failed to delete course");
    }
  } catch (err) {
    console.error("Error deleting course:", err);
    alert("Error deleting course. Please try again.");
  } finally {
    isDeletingCourse.value = false;
  }
};

onMounted(async () => {
  // Check if user has permission to access this page
  const userRoles = authStore.roles;
  if (!userRoles.includes("admin") && !userRoles.includes("teacher")) {
    await router.push("/dashboard");
    return;
  }

  // Fetch courses
  await courseStore.fetchCourses({
    status: "all",
    visibility: "all",
    level: "all",
  });
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
