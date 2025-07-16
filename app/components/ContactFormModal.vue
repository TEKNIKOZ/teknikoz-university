<template>
  <div
    v-if="contactStore.isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <!-- Modal Header -->
      <div
        class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700"
      >
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{
            contactStore.hasSubmitted
              ? "Thank You!"
              : "Get Started with Teknikoz University"
          }}
        </h2>
        <button
          @click="contactStore.closeModal()"
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <Icon name="heroicons:x-mark-20-solid" class="w-6 h-6" />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6">
        <!-- Success State -->
        <div v-if="contactStore.hasSubmitted" class="text-center">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Icon
              name="heroicons:check-circle"
              class="w-8 h-8 text-green-600"
            />
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Thank you for your interest in Teknikoz University! We'll get back
            to you soon.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              @click="contactStore.downloadBrochure()"
              class="bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand/80 transition-colors inline-flex items-center gap-2"
            >
              <Icon name="heroicons:arrow-down-tray" class="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>

        <!-- Form State -->
        <div v-else>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Fill out the form below to get started with your learning journey
            and download our course brochure.
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name *
              </label>
              <input
                id="name"
                v-model="contactStore.formData.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your full name"
              />
              <p
                v-if="contactStore.errors.name"
                class="text-red-500 text-sm mt-1"
              >
                {{ contactStore.errors.name }}
              </p>
            </div>

            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                v-model="contactStore.formData.email"
                type="email"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email address"
              />
              <p
                v-if="contactStore.errors.email"
                class="text-red-500 text-sm mt-1"
              >
                {{ contactStore.errors.email }}
              </p>
            </div>

            <!-- Phone Field -->
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Phone Number *
              </label>
              <input
                id="phone"
                v-model="contactStore.formData.phone"
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your phone number"
              />
              <p
                v-if="contactStore.errors.phone"
                class="text-red-500 text-sm mt-1"
              >
                {{ contactStore.errors.phone }}
              </p>
            </div>

            <!-- Course Interest Field -->
            <div>
              <label
                for="courseInterest"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Course Interest *
              </label>
              <select
                id="courseInterest"
                v-model="contactStore.formData.courseInterest"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a course</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="devops">DevOps</option>
                <option value="ai-ml">AI/Machine Learning</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="other">Other</option>
              </select>
              <p
                v-if="contactStore.errors.courseInterest"
                class="text-red-500 text-sm mt-1"
              >
                {{ contactStore.errors.courseInterest }}
              </p>
            </div>

            <!-- Message Field -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                v-model="contactStore.formData.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Tell us about your goals and what you'd like to learn..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex gap-4">
              <button
                type="submit"
                :disabled="contactStore.isSubmitting"
                class="flex-1 bg-brand text-white px-6 py-2.5 rounded-lg hover:bg-brand/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                <Icon
                  v-if="contactStore.isSubmitting"
                  name="heroicons:arrow-path"
                  class="w-5 h-5 animate-spin"
                />
                <span>{{
                  contactStore.isSubmitting ? "Submitting..." : "Submit"
                }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from "@/stores/contact";
const contactStore = useContactStore();

onMounted(async () => {
  await contactStore.checkPreviousSubmission();
});

const handleSubmit = async () => {
  const success = await contactStore.submitForm();
  if (success) {
    contactStore.hasSubmitted = true;
  }
};

// Close modal on escape key
onMounted(async () => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && contactStore.isModalOpen) {
      contactStore.closeModal();
    }
  };
  document.addEventListener("keydown", handleEscape);

  onUnmounted(async () => {
    await contactStore.checkPreviousSubmission();
    document.removeEventListener("keydown", handleEscape);
  });
});
</script>
