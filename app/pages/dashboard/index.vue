<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div
      class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Welcome back, {{ authStore.name }}!
          </p>
        </div>
      </div>
    </div>

    <!-- Dashboard Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Grid for Teachers/Admins -->
      <div
        v-if="isTeacherOrAdmin"
        class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Courses
              </p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {{ courseStats.total }}
              </p>
            </div>
            <div class="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
              <Icon
                name="mdi:book-open-variant"
                class="text-2xl text-primary-600 dark:text-primary-400"
              />
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                Published
              </p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {{ courseStats.published }}
              </p>
            </div>
            <div class="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
              <Icon
                name="mdi:check-circle"
                class="text-2xl text-green-600 dark:text-green-400"
              />
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                Draft
              </p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {{ courseStats.draft }}
              </p>
            </div>
            <div class="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
              <Icon
                name="mdi:pencil"
                class="text-2xl text-yellow-600 dark:text-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Course Management (Teachers/Admins) -->
        <NuxtLink
          v-if="isTeacherOrAdmin"
          to="/dashboard/courses"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center gap-4">
            <div class="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
              <Icon
                name="mdi:book-cog"
                class="text-3xl text-primary-600 dark:text-primary-400"
              />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Manage Courses
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Create, edit, and manage your courses
              </p>
            </div>
          </div>
        </NuxtLink>

        <!-- Browse Courses -->
        <NuxtLink
          to="/course-catalog"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center gap-4">
            <div class="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
              <Icon
                name="mdi:book-open-page-variant"
                class="text-3xl text-green-600 dark:text-green-400"
              />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Browse Courses
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Explore available courses
              </p>
            </div>
          </div>
        </NuxtLink>

        <!-- My Profile -->
        <NuxtLink
          to="/profile"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center gap-4">
            <div class="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <Icon
                name="mdi:account-circle"
                class="text-3xl text-purple-600 dark:text-purple-400"
              />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                My Profile
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                View and edit your profile
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Recent Courses Section for Teachers/Admins -->
      <div
        v-if="isTeacherOrAdmin && recentCourses.length > 0"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
      >
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Recent Courses
            </h2>
            <NuxtLink
              to="/dashboard/courses"
              class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
            >
              View All →
            </NuxtLink>
          </div>
        </div>

        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <div
            v-for="course in recentCourses"
            :key="course.id"
            class="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ course.title }}
                </h3>
                <div
                  class="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <span class="flex items-center">
                    <Icon name="mdi:school" class="mr-1" />
                    {{ course.level || "All Levels" }}
                  </span>
                  <span class="flex items-center">
                    <Icon name="mdi:eye" class="mr-1" />
                    {{ course.visibility }}
                  </span>
                  <span
                    :class="[
                      'px-2 py-1 rounded-full text-xs font-medium',
                      course.status === 'published'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
                    ]"
                  >
                    {{ course.status }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <NuxtLink
                  :to="`/course-catalog/${course.slug}`"
                  class="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <Icon name="mdi:eye" />
                </NuxtLink>
                <NuxtLink
                  :to="`/dashboard/courses/${course.id}/edit`"
                  class="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <Icon name="mdi:pencil" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enrolled Courses for Students -->
      <div
        v-if="!isTeacherOrAdmin"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
      >
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          My Enrolled Courses
        </h2>
        <div class="text-center py-8 text-gray-500 dark:text-gray-400">
          <Icon name="mdi:book-education" class="text-5xl mb-4" />
          <p>You haven't enrolled in any courses yet.</p>
          <NuxtLink
            to="/course-catalog"
            class="inline-block mt-4 px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Browse Courses
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth.stores";
import { useCourseStore } from "~/stores/course.stores";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const courseStore = useCourseStore();
const router = useRouter();

const isTeacherOrAdmin = computed(() => {
  const roles = authStore.roles;
  return roles.includes("admin") || roles.includes("teacher");
});

const courseStats = computed(() => {
  const courses = courseStore.courses;
  return {
    total: courses.length,
    published: courses.filter((c) => c.status === "published").length,
    draft: courses.filter((c) => c.status === "draft").length,
  };
});

const recentCourses = computed(() => {
  return courseStore.courses.slice(0, 5);
});

onMounted(async () => {
  // Check if user is authenticated
  if (!authStore.isAuthenticated) {
    router.push("/login");
    return;
  }

  // Load courses for teachers/admins
  if (isTeacherOrAdmin.value) {
    await courseStore.fetchCourses({
      status: "all",
      visibility: "all",
      level: "all",
    });
  }
});
</script>
