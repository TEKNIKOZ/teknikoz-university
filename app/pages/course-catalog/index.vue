<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-brand to-brand text-white py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
        <p class="text-lg md:text-xl opacity-90">Discover a wide range of courses to advance your skills</p>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Level Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Level
            </label>
            <select 
              v-model="filters.level" 
              @change="handleFilterChange"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <!-- Status Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Status
            </label>
            <select 
              v-model="filters.status" 
              @change="handleFilterChange"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="all">All</option>
            </select>
          </div>

          <!-- Visibility Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Visibility
            </label>
            <select 
              v-model="filters.visibility" 
              @change="handleFilterChange"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="all">All</option>
            </select>
          </div>

          <!-- Search -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <input 
              v-model="searchQuery" 
              @input="handleSearch"
              type="text" 
              placeholder="Search courses..."
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Courses Grid -->
    <div class="max-w-7xl mx-auto px-4 pb-12">
      <!-- Loading State -->
      <div v-if="courseStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
          <div class="h-48 bg-gray-300 dark:bg-gray-700"></div>
          <div class="p-6">
            <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="courseStore.error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
        <Icon name="mdi:alert-circle" class="text-4xl text-red-500 mb-3" />
        <p class="text-red-700 dark:text-red-400">{{ courseStore.error }}</p>
        <button 
          @click="loadCourses" 
          class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="!filteredCourses.length" class="text-center py-12">
        <Icon name="mdi:school-outline" class="text-6xl text-gray-400 mb-4" />
        <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No Courses Found</h3>
        <p class="text-gray-500 dark:text-gray-400">Try adjusting your filters or search query</p>
      </div>

      <!-- Courses List -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="course in paginatedCourses" 
          :key="course.id"
          :to="`/course-catalog/${course.slug}`"
          class="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <!-- Course Image -->
          <div class="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <NuxtImg 
              v-if="course.cover_url" 
              :src="course.cover_url" 
              :alt="course.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <Icon name="mdi:image" class="text-4xl text-gray-400" />
            </div>
            
            <!-- Level Badge -->
            <div v-if="course.level" class="absolute top-3 right-3">
              <span 
                :class="getLevelBadgeClass(course.level)"
                class="px-3 py-1 text-xs font-semibold rounded-full"
              >
                {{ course.level }}
              </span>
            </div>
          </div>

          <!-- Course Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand dark:group-hover:text-brand transition-colors">
              {{ course.title }}
            </h3>
            
            <p v-if="course.summary" class="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
              {{ course.summary }}
            </p>

            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-4">
                <!-- Status -->
                <span v-if="course.status === 'draft'" class="text-yellow-600 dark:text-yellow-400">
                  <Icon name="mdi:pencil" class="mr-1" />
                  Draft
                </span>
                
                <!-- Visibility -->
                <span v-if="course.visibility === 'private'" class="text-gray-500">
                  <Icon name="mdi:lock" class="mr-1" />
                  Private
                </span>
              </div>

              <span class="text-brand dark:text-brand font-medium">
                View Course →
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-8 flex justify-center">
        <nav class="flex gap-2">
          <button 
            @click="currentPage = currentPage - 1"
            :disabled="currentPage === 1"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <button 
            v-for="page in displayedPages" 
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-4 py-2 rounded-lg transition-colors',
              currentPage === page 
                ? 'bg-brand text-white' 
                : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
            ]"
          >
            {{ page }}
          </button>

          <button 
            @click="currentPage = currentPage + 1"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useCourseStore } from '~/stores/course.stores';
import type { CourseFilters } from '~/types/course';

const courseStore = useCourseStore();

const filters = ref<CourseFilters>({
  status: 'published',
  visibility: 'public',
  level: 'all',
  limit: 12,
  offset: 0
});

const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 12;

const loadCourses = async () => {
  await courseStore.fetchCourses(filters.value);
};

const handleFilterChange = () => {
  currentPage.value = 1;
  filters.value.offset = 0;
  loadCourses();
};

let searchTimeout: NodeJS.Timeout;
const handleSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentPage.value = 1;
  }, 300);
};

const filteredCourses = computed(() => {
  let courses = courseStore.courses;
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    courses = courses.filter(course => 
      course.title.toLowerCase().includes(query) ||
      course.summary?.toLowerCase().includes(query)
    );
  }
  
  return courses;
});

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredCourses.value.slice(start, end);
});

const totalPages = computed(() => 
  Math.ceil(filteredCourses.value.length / itemsPerPage)
);

const displayedPages = computed(() => {
  const pages: number[] = [];
  const maxPages = 5;
  const halfMax = Math.floor(maxPages / 2);
  
  let start = Math.max(1, currentPage.value - halfMax);
  let end = Math.min(totalPages.value, start + maxPages - 1);
  
  if (end - start < maxPages - 1) {
    start = Math.max(1, end - maxPages + 1);
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case 'beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

watch(currentPage, (newPage) => {
  filters.value.offset = (newPage - 1) * itemsPerPage;
});

onMounted(() => {
  loadCourses();
});
</script>