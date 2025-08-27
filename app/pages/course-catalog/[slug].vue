<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Loading State -->
    <div v-if="courseStore.loading" class="max-w-7xl mx-auto px-4 py-12">
      <div class="animate-pulse">
        <div class="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg mb-8"></div>
        <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="courseStore.error" class="max-w-7xl mx-auto px-4 py-12">
      <div
        class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8 text-center"
      >
        <Icon name="mdi:alert-circle" class="text-5xl text-red-500 mb-4" />
        <h2 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">
          Error Loading Course
        </h2>
        <p class="text-red-600 dark:text-red-300 mb-6">
          {{ courseStore.error }}
        </p>
        <NuxtLink
          to="/courses"
          class="inline-block px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
        >
          Back to Courses
        </NuxtLink>
      </div>
    </div>

    <!-- Course Content -->
    <div v-else-if="course">
      <!-- Hero Section -->
      <div class="relative bg-gradient-to-r from-brand to-brand/90 text-white">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Course Info -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span
                  v-if="course.level"
                  :class="getLevelBadgeClass(course.level)"
                  class="px-3 py-1 text-sm font-semibold rounded-full capitalize"
                >
                  {{ course.level }}
                </span>
                <span
                  v-if="course.status === 'draft'"
                  class="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm font-semibold rounded-full"
                >
                  Draft
                </span>
                <span
                  v-if="course.visibility === 'private'"
                  class="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm font-semibold rounded-full"
                >
                  Private
                </span>
              </div>

              <h1
                class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-normal"
              >
                {{ course.title }}
              </h1>

              <p
                v-if="course.summary"
                class="text-lg md:text-xl opacity-90 mb-6"
              >
                {{ course.summary }}
              </p>

              <!-- Price Display -->
              <div v-if="course.price" class="mb-6">
                <div class="flex items-center gap-3">
                  <span class="text-3xl font-bold">
                    {{
                      formatPrice(course.price.amount, course.price.currency)
                    }}
                  </span>
                  <span
                    v-if="course.price.compare_at"
                    class="text-xl line-through opacity-60"
                  >
                    {{
                      formatPrice(
                        course.price.compare_at,
                        course.price.currency
                      )
                    }}
                  </span>
                  <span v-if="course.price.is_recurring" class="text-lg">
                    / {{ course.price.interval_type }}
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-4">
                <button
                  v-if="!isEnrolled"
                  @click="enrollInCourse"
                  class="px-6 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Enroll Now
                </button>
                <button
                  v-else
                  class="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg cursor-default"
                >
                  <Icon name="mdi:check-circle" class="mr-2" />
                  Enrolled
                </button>

                <NuxtLink
                  v-if="canEditCourse"
                  :to="`/dashboard/courses/${course.id}/edit`"
                  class="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                >
                  <Icon name="mdi:pencil" class="mr-2" />
                  Edit Course
                </NuxtLink>
              </div>
            </div>

            <!-- Course Image -->
            <div class="relative">
              <div class="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <NuxtImg
                  v-if="course.cover_url"
                  :src="course.cover_url"
                  :alt="course.title"
                  class="w-full h-full object-cover"
                />
                <div
                  v-else
                  class="w-full h-full bg-gray-800 flex items-center justify-center"
                >
                  <Icon
                    name="mdi:play-circle-outline"
                    class="text-6xl text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Course Content Tabs -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <!-- Tab Navigation -->
          <div class="border-b border-gray-200 dark:border-gray-700">
            <nav class="flex flex-wrap -mb-px">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'px-6 py-4 text-base font-medium border-b-2 transition-colors  flex items-center',
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

          <!-- Tab Content -->
          <div class="p-6">
            <!-- Curriculum Tab -->
            <div v-if="activeTab === 'curriculum'" class="space-y-6">
              <div v-if="!course.sections?.length" class="text-center py-12">
                <Icon
                  name="mdi:book-open-variant"
                  class="text-5xl text-gray-400 mb-4"
                />
                <p class="text-gray-500 dark:text-gray-400">
                  No curriculum available yet
                </p>
              </div>

              <div
                v-else
                v-for="section in course.sections"
                :key="section.id"
                class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <div class="bg-gray-50 dark:bg-gray-700/50 px-6 py-4">
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    {{ section.title }}
                  </h3>
                </div>

                <div
                  v-if="section.lessons?.length"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <div
                    v-for="lesson in section.lessons"
                    :key="lesson.id"
                    class="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <Icon
                          :name="getLessonIcon(lesson.kind)"
                          :class="['text-2xl', getLessonKindClass(lesson.kind)]"
                        />
                        <div>
                          <div class="flex items-center gap-3">
                            <h4
                              class="font-medium text-gray-900 dark:text-white"
                            >
                              {{ lesson.title }}
                            </h4>
                            <span
                              v-if="lesson.is_free_preview"
                              class="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 text-xs font-semibold rounded"
                            >
                              Free Preview
                            </span>
                          </div>
                          <div class="flex items-center gap-4 mt-1 text-sm">
                            <span
                              :class="[
                                'capitalize font-medium',
                                getLessonKindClass(lesson.kind),
                              ]"
                            >
                              {{ lesson.kind }}
                            </span>
                            <span
                              v-if="lesson.duration_sec"
                              class="text-gray-500 dark:text-gray-400"
                            >
                              {{ formatDuration(lesson.duration_sec) }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <button
                          v-if="isEnrolled || lesson.is_free_preview"
                          class="px-4 py-2 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand/90 transition-colors"
                        >
                          Start
                        </button>
                        <Icon v-else name="mdi:lock" class="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="px-6 py-4 text-gray-500 dark:text-gray-400">
                  No lessons in this section yet
                </div>
              </div>
            </div>

            <!-- Materials Tab -->
            <div v-if="activeTab === 'materials'" class="space-y-4">
              <div v-if="!displayedMaterials.length" class="text-center py-12">
                <Icon
                  name="mdi:folder-open"
                  class="text-5xl text-gray-400 mb-4"
                />
                <p class="text-gray-500 dark:text-gray-400">
                  No materials available
                </p>
              </div>

              <div
                v-else
                v-for="material in displayedMaterials"
                :key="material.id"
                class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
              >
                <div class="flex items-center gap-3">
                  <Icon
                    :name="getMaterialIcon(material.file_type)"
                    class="text-3xl text-gray-500"
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
                    <div
                      class="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400"
                    >
                      <span v-if="material.file_type">{{
                        material.file_type.charAt(0).toUpperCase() +
                        material.file_type.slice(1)
                      }}</span>
                      <span v-if="material.file_size_bytes">{{
                        formatFileSize(material.file_size_bytes)
                      }}</span>
                      <span
                        class="capitalize font-bold"
                        :class="getAccessLevelClass(material.access_level)"
                        >{{ material.access_level }}</span
                      >
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button
                    v-if="canAccessMaterial(material)"
                    @click="downloadMaterial(material)"
                    class="px-4 py-2 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand/90 transition-colors flex items-center"
                  >
                    <Icon name="mdi:download" class="mr-1" />
                    Download
                  </button>
                  <Icon v-else name="mdi:lock" class="text-2xl text-gray-400" />
                </div>
              </div>
            </div>

            <!-- About Tab -->
            <div
              v-if="activeTab === 'about'"
              class="prose dark:prose-invert max-w-none"
            >
              <div
                v-if="course.summary"
                class="text-gray-700 dark:text-gray-300"
              >
                <h3 class="text-xl font-semibold mb-4">Course Overview</h3>
                <p>{{ course.summary }}</p>
              </div>

              <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                  <Icon name="mdi:school" class="text-3xl text-brand mb-3" />
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                    Level
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400 capitalize">
                    {{ course.level || "All Levels" }}
                  </p>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                  <Icon
                    name="mdi:clock-outline"
                    class="text-3xl text-brand mb-3"
                  />
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                    Duration
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ getTotalDuration() }}
                  </p>
                </div>

                <div class="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                  <Icon
                    name="mdi:book-multiple"
                    class="text-3xl text-brand mb-3"
                  />
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                    Lessons
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ getTotalLessons() }} Lessons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useCourseStore } from "~/stores/course.stores";
import { useAuthStore } from "~/stores/auth.stores";
import type { CourseMaterial } from "~/types/course";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const courseStore = useCourseStore();
const authStore = useAuthStore();

const activeTab = ref("curriculum");
const isEnrolled = ref(false);

const tabs = [
  { id: "curriculum", label: "Curriculum", icon: "mdi:book-open-variant" },
  { id: "materials", label: "Materials", icon: "mdi:folder" },
  { id: "about", label: "About", icon: "mdi:information" },
];

const course = computed(() => courseStore.currentCourse);

const canEditCourse = computed(() => {
  const userRoles = authStore.roles;
  return userRoles.includes("admin") || userRoles.includes("teacher");
});

const displayedMaterials = computed(() => {
  // Always show materials from the store, regardless of enrollment status
  // The backend should handle access control
  return courseStore.courseMaterials || [];
});

const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case "beginner":
      return "bg-green-500/20 text-green-300";
    case "intermediate":
      return "bg-yellow-500/20 text-yellow-300";
    case "advanced":
      return "bg-red-500/20 text-red-300";
    default:
      return "bg-gray-500/20 text-gray-300";
  }
};

const getLessonIcon = (kind: string) => {
  switch (kind) {
    case "video":
      return "mdi:play-circle";
    case "pdf":
      return "mdi:file-pdf-box";
    case "text":
      return "mdi:text-box";
    case "external":
      return "mdi:link";
    default:
      return "mdi:file";
  }
};

const getLessonKindClass = (kind: string) => {
  switch (kind) {
    case "video":
      return "text-red-600 dark:text-red-400";
    case "pdf":
      return "text-blue-600 dark:text-blue-400";
    case "text":
      return "text-green-600 dark:text-green-400";
    case "external":
      return "text-purple-600 dark:text-purple-400";
    default:
      return "text-gray-500 dark:text-gray-400";
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

const getAccessLevelClass = (level?: string) => {
  switch (level) {
    case "public":
      return "text-green-600 dark:text-green-400";
    case "enrolled":
      return "text-blue-600 dark:text-blue-400";
    case "premium":
      return "text-purple-600 dark:text-purple-400";
    default:
      return "";
  }
};

const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

const formatFileSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
};

const formatPrice = (amount: number, currency?: string) => {
  const curr = currency || "USD";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: curr,
  }).format(amount);
};

const canAccessMaterial = (material: CourseMaterial) => {
  if (material.access_level === "public") return true;
  if (material.access_level === "enrolled" && isEnrolled.value) return true;
  if (canEditCourse.value) return true;
  return false;
};

const downloadMaterial = async (material: CourseMaterial) => {
  // Download functionality temporarily disabled
  console.log("Download requested for material:", material.title);
  alert("Download functionality is currently under development.");
};

const getTotalDuration = () => {
  if (!course.value?.sections) return "0 minutes";

  let totalSeconds = 0;
  course.value.sections.forEach((section) => {
    section.lessons?.forEach((lesson) => {
      if (lesson.duration_sec) {
        totalSeconds += lesson.duration_sec;
      }
    });
  });

  return formatDuration(totalSeconds);
};

const getTotalLessons = () => {
  if (!course.value?.sections) return 0;

  let total = 0;
  course.value.sections.forEach((section) => {
    total += section.lessons?.length || 0;
  });

  return total;
};

const router = useRouter();

const enrollInCourse = () => {
  if (!authStore.isAuthenticated) {
    router.push("/login");
    return;
  }

  // TODO: Implement enrollment logic
  console.log("Enrolling in course:", course.value?.id);
};

onMounted(async () => {
  const slug = route.params.slug as string;

  // Check if user is authenticated
  if (!authStore.isAuthenticated) {
    router.push("/login");
    return;
  }

  await courseStore.fetchCourseBySlug(slug, true);

  if (course.value) {
    await courseStore.fetchCourseMaterials(course.value.id);
  }
});
</script>
