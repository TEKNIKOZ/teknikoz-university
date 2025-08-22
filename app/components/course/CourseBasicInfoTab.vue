<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
      Basic Information
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-6">
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
            v-model="formData.title"
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
          v-model="formData.summary"
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
              v-model="formData.level"
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
              v-model="formData.status"
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
              v-model="formData.visibility"
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
          v-model="formData.cover_url"
          type="url"
          placeholder="https://example.com/image.jpg"
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
        />
      </div>

      <!-- Form Actions -->
      <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
        <div class="flex items-center justify-end gap-4">
          <NuxtLink
            to="/dashboard/courses"
            class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </NuxtLink>
          <button
            type="submit"
            :disabled="isLoading"
            class="px-6 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">Save Changes</span>
            <span v-else class="flex items-center">
              <Icon name="mdi:loading" class="animate-spin mr-2" />
              Saving...
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

interface CourseData {
  title: string
  summary: string
  level: string
  status: string
  visibility: string
  cover_url: string
}

interface Course {
  slug?: string
  title?: string
  summary?: string
  level?: string
  status?: string
  visibility?: string
  cover_url?: string
}

interface Props {
  course: Course | null
  isLoading?: boolean
}

interface Emits {
  (e: 'submit', data: CourseData): void
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false
})

const emit = defineEmits<Emits>()

const formData = reactive<CourseData>({
  title: '',
  summary: '',
  level: '',
  status: 'draft',
  visibility: 'public',
  cover_url: ''
})

// Watch for course prop changes and populate form
watch(() => props.course, (newCourse) => {
  if (newCourse) {
    formData.title = newCourse.title || ''
    formData.summary = newCourse.summary || ''
    formData.level = newCourse.level || ''
    formData.status = newCourse.status || 'draft'
    formData.visibility = newCourse.visibility || 'public'
    formData.cover_url = newCourse.cover_url || ''
  }
}, { immediate: true })

const handleSubmit = () => {
  emit('submit', { ...formData })
}
</script>