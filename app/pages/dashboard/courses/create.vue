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
                Create New Course
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Fill in the details below to create a new course
              </p>
            </div>
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

    <!-- Form Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Basic Information Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Information
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Title -->
            <div class="md:col-span-2">
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
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <!-- Slug -->
            <div class="md:col-span-2">
              <label
                for="slug"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                URL Slug <span class="text-red-500">*</span>
              </label>
              <div class="flex items-center gap-2">
                <input
                  id="slug"
                  v-model="formData.slug"
                  type="text"
                  required
                  maxlength="100"
                  pattern="[a-z0-9-]+"
                  placeholder="introduction-to-plm-windchill"
                  class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="button"
                  @click="generateSlug"
                  class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Generate
                </button>
              </div>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Lowercase letters, numbers, and hyphens only
              </p>
            </div>

            <!-- Summary -->
            <div class="md:col-span-2">
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
                placeholder="Brief description of what students will learn..."
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            <!-- Level -->
            <div>
              <label
                for="level"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Difficulty Level
              </label>
              <select
                id="level"
                v-model="formData.level"
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
              <label
                for="status"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Status
              </label>
              <select
                id="status"
                v-model="formData.status"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <!-- Visibility -->
            <div>
              <label
                for="visibility"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Visibility
              </label>
              <select
                id="visibility"
                v-model="formData.visibility"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
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
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        <!-- Pricing Information Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Pricing Information
            </h2>
            <label class="flex items-center cursor-pointer">
              <input
                v-model="hasPricing"
                type="checkbox"
                class="sr-only peer"
              />
              <div
                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Add Pricing
              </span>
            </label>
          </div>

          <div v-if="hasPricing" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Currency -->
            <div>
              <label
                for="currency"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Currency
              </label>
              <select
                id="currency"
                v-model="priceData.currency"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
              </select>
            </div>

            <!-- Amount -->
            <div>
              <label
                for="amount"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Price
              </label>
              <input
                id="amount"
                v-model.number="priceData.amount"
                type="number"
                min="0"
                step="0.01"
                placeholder="99.99"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <!-- Compare At Price -->
            <div>
              <label
                for="compare_at"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Compare At Price (Original)
              </label>
              <input
                id="compare_at"
                v-model.number="priceData.compare_at"
                type="number"
                min="0"
                step="0.01"
                placeholder="149.99"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <!-- Recurring -->
            <div>
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="priceData.is_recurring"
                  type="checkbox"
                  class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Recurring Payment
                </span>
              </label>
            </div>

            <!-- Interval Type -->
            <div v-if="priceData.is_recurring">
              <label
                for="interval_type"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Billing Interval
              </label>
              <select
                id="interval_type"
                v-model="priceData.interval_type"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>

          <div v-else class="text-center py-8 text-gray-500 dark:text-gray-400">
            <Icon name="mdi:cash-off" class="text-4xl mb-2" />
            <p>No pricing configured for this course</p>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-end gap-4">
          <NuxtLink
            to="/dashboard/courses"
            class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </NuxtLink>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Create Course</span>
            <span v-else class="flex items-center">
              <Icon name="mdi:loading" class="animate-spin mr-2" />
              Creating...
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCourseStore } from "~/stores/course.stores";
import { useAuthStore } from "~/stores/auth.stores";
import type { CourseFormData, PriceFormData } from "~/types/course";

const router = useRouter();
const courseStore = useCourseStore();
const authStore = useAuthStore();

const isSubmitting = ref(false);
const hasPricing = ref(false);

const formData = reactive<CourseFormData>({
  title: "",
  slug: "",
  summary: "",
  cover_url: "",
  level: "beginner",
  status: "draft",
  visibility: "public",
});

const priceData = reactive<PriceFormData>({
  currency: "USD",
  amount: 0,
  compare_at: undefined,
  is_recurring: false,
  interval_type: "monthly",
  is_active: true,
});

const generateSlug = () => {
  if (formData.title) {
    formData.slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .substring(0, 100);
  }
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  // Validate required fields
  if (!formData.title || !formData.slug) {
    alert("Please fill in all required fields");
    return;
  }

  isSubmitting.value = true;

  try {
    // Create the course
    const courseResult = await courseStore.createCourse(formData);

    if (courseResult.success && courseResult.data) {
      // If pricing is enabled, set the price
      if (hasPricing.value && priceData.amount > 0) {
        await courseStore.setCoursePrice(courseResult.data.id, priceData);
      }

      // Navigate to the course edit page
      await router.push(`/dashboard/courses/${courseResult.data.id}/edit`);
    } else {
      alert(
        "Failed to create course: " + (courseResult.error || "Unknown error")
      );
    }
  } catch (error) {
    console.error("Error creating course:", error);
    alert("An error occurred while creating the course");
  } finally {
    isSubmitting.value = false;
  }
};

// Check permissions on mount
onMounted(() => {
  const userRoles = authStore.roles;
  if (!userRoles.includes("admin") && !userRoles.includes("teacher")) {
    router.push("/dashboard");
  }
});
</script>
