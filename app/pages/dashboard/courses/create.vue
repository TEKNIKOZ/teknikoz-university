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
              <p
                class="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
              >
                Fill in the details below to create a new course
              </p>
            </div>
            <NuxtLink
              to="/dashboard/courses"
              class="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors group"
            >
              <Icon
                name="mdi:arrow-left"
                class="mr-2 group-hover:-translate-x-0.5 transition-all"
              />
              Back to Courses
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Basic Information Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Course Information
          </h2>

          <div class="space-y-6">
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
                  URL Slug <span class="text-red-500">*</span>
                </label>
                <div class="flex items-center gap-2">
                  <input
                    id="slug"
                    v-model="formData.slug"
                    type="text"
                    required
                    maxlength="100"
                    placeholder="introduction-to-plm-windchill"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
                    @input="validateSlug"
                  />
                  <button
                    type="button"
                    @click="generateSlug"
                    :disabled="!formData.title.trim()"
                    class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200 dark:disabled:hover:bg-gray-700"
                  >
                    Generate
                  </button>
                </div>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Lowercase letters, numbers, and hyphens only
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

            <!-- Cover Image Upload Row -->
            <div>
              <label
                for="cover_image"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Cover Image
              </label>
              <div
                class="w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-brand dark:hover:border-brand transition-colors"
                @click="($refs.fileInput as HTMLInputElement)?.click()"
                @dragover.prevent
                @drop.prevent="handleFileDrop"
              >
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleFileSelect"
                />
                <div v-if="!selectedFile" class="text-center">
                  <Icon
                    name="mdi:cloud-upload"
                    class="text-3xl text-gray-400 mb-2"
                  />
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Click to upload or drag and drop
                  </p>
                  <p class="text-xs text-gray-400 dark:text-gray-500">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
                <div v-else class="text-center">
                  <Icon
                    name="mdi:check-circle"
                    class="text-3xl text-green-500 mb-2"
                  />
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    {{ selectedFile.name }}
                  </p>
                  <button
                    type="button"
                    @click.stop="removeFile"
                    class="mt-2 text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <!-- Pricing Information Row -->
            <div>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  Pricing Information
                </h3>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="hasPricing"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div
                    class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand/30 dark:peer-focus:ring-brand/80 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand"
                  ></div>
                  <span
                    class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Add Pricing
                  </span>
                </label>
              </div>

              <div v-if="hasPricing" class="space-y-4">
                <!-- Currency, Price, and Compare At Price Row -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <!-- Currency -->
                  <div>
                    <label
                      for="currency"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Currency
                    </label>
                    <div class="relative">
                      <select
                        id="currency"
                        v-model="priceData.currency"
                        class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
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
                      class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white transition-colors"
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
                      class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <!-- Recurring Payment Options Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                  <!-- Recurring Checkbox -->
                  <div class="flex items-center h-10">
                    <label class="flex items-center cursor-pointer">
                      <input
                        v-model="priceData.is_recurring"
                        type="checkbox"
                        class="w-4 h-4 text-brand bg-gray-100 border-gray-300 rounded focus:ring-brand dark:focus:ring-brand dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                    <div class="relative">
                      <select
                        id="interval_type"
                        v-model="priceData.interval_type"
                        class="w-full h-10 px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:text-white appearance-none cursor-pointer transition-colors"
                      >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
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
              </div>

              <div
                v-else
                class="text-center py-8 text-gray-500 dark:text-gray-400"
              >
                <Icon name="mdi:cash-off" class="text-4xl mb-2" />
                <p>No pricing configured for this course</p>
              </div>
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
                  :disabled="!canCreate"
                  class="px-6 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Create Course</span>
                  <span v-else class="flex items-center">
                    <Icon name="mdi:loading" class="animate-spin mr-2" />
                    Creating...
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCourseStore } from "@/stores/course.stores";
import { useAuthStore } from "@/stores/auth.stores";
import type { CourseFormData, PriceFormData } from "@/types/course";

const router = useRouter();
const courseStore = useCourseStore();
const authStore = useAuthStore();

const isSubmitting = ref(false);
const hasPricing = ref(false);
const selectedFile = ref<File | null>(null);

const formData = reactive<CourseFormData>({
  title: "",
  slug: "",
  summary: "",
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

const isFormValid = computed(() => {
  return formData.title.trim().length > 0 && formData.slug.trim().length > 0;
});

// Computed property to determine if create button should be enabled
const canCreate = computed(() => {
  return isFormValid.value && !isSubmitting.value;
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

const validateSlug = () => {
  formData.slug = formData.slug.replace(/[^a-z0-9-]/g, "");
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    selectedFile.value = file;
  }
};

const handleFileDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files;
  if (files && files[0]) {
    const file = files[0];

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    selectedFile.value = file;
  }
};

const removeFile = () => {
  selectedFile.value = null;
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
      const courseId = courseResult.data.id;

      // Upload cover image if selected
      if (selectedFile.value) {
        try {
          await courseStore.uploadCourseCover(courseId, selectedFile.value);
        } catch (error) {
          console.error("Error uploading cover image:", error);
          // Don't fail the whole process if cover upload fails
        }
      }

      // If pricing is enabled, set the price
      if (hasPricing.value && priceData.amount > 0) {
        await courseStore.setCoursePrice(courseId, priceData);
      }

      // Navigate to the course edit page
      await router.push(`/dashboard/courses/${courseId}/edit`);
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
