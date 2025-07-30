<template>
  <div
    v-if="contactStore.isBrochureModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
  >
    <div
      class="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-0"
    >
      <!-- Modal Header -->
      <div
        class="flex justify-between items-start p-4 sm:p-6 border-b border-gray-200 gap-3"
      >
        <h2
          class="text-lg sm:text-2xl font-bold text-gray-900 flex-1 leading-tight"
        >
          {{
            contactStore.hasBrochureSubmitted
              ? "Thank You!"
              : "Download Course Brochure"
          }}
        </h2>
        <button
          @click="contactStore.closeBrochureModal()"
          class="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors flex-shrink-0 -mt-1"
        >
          <Icon
            name="heroicons:x-mark-20-solid"
            class="w-5 h-5 sm:w-6 sm:h-6 flex items-center"
          />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-4 sm:p-6">
        <!-- Success State -->
        <div v-if="contactStore.hasBrochureSubmitted" class="text-center">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Icon
              name="heroicons:check-circle"
              class="w-8 h-8 text-green-600"
            />
          </div>
          <p class="text-lg text-gray-700 mb-6">
            Thank you! The course brochure has been sent to your email address.
          </p>
        </div>

        <!-- Form State -->
        <div v-else>
          <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Fill out the form below to receive the course brochure via email
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Name and Email Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Name Field -->
              <div>
                <label
                  for="brochure-name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="brochure-name"
                  v-model="contactStore.brochureFormData.name"
                  type="text"
                  class="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
                <p
                  v-if="contactStore.brochureErrors.name"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ contactStore.brochureErrors.name }}
                </p>
              </div>

              <!-- Email Field -->
              <div>
                <label
                  for="brochure-email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="brochure-email"
                  v-model="contactStore.brochureFormData.email"
                  type="email"
                  class="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your email address"
                />
                <p
                  v-if="contactStore.brochureErrors.email"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ contactStore.brochureErrors.email }}
                </p>
              </div>
            </div>

            <!-- Phone and Course Interest Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Phone Field -->
              <div>
                <label
                  for="brochure-phone"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  id="brochure-phone"
                  v-model="contactStore.brochureFormData.phone"
                  type="tel"
                  maxlength="10"
                  @input="handlePhoneInput"
                  class="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your 10-digit phone number"
                />
                <p
                  v-if="contactStore.brochureErrors.phone"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ contactStore.brochureErrors.phone }}
                </p>
              </div>

              <!-- Course Interest Field -->
              <div>
                <label
                  for="brochure-courseInterest"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Course Interest *
                </label>
                <div class="relative">
                  <select
                    id="brochure-courseInterest"
                    v-model="contactStore.brochureFormData.courseInterest"
                    class="w-full px-3 py-2 pr-8 sm:px-4 sm:py-2 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  >
                    <option value="">Select a course</option>
                    <option value="plm-windchill">PLM Windchill</option>
                    <option value="siemens-teamcenter">
                      Siemens Teamcenter
                    </option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="mobile-development">
                      Mobile Development
                    </option>
                    <option value="devops">DevOps</option>
                    <option value="ai-ml">AI/Machine Learning</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-computing">Cloud Computing</option>
                    <option value="other">Other</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none"
                  >
                    <Icon
                      name="heroicons:chevron-down"
                      class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    />
                  </div>
                </div>
                <p
                  v-if="contactStore.brochureErrors.courseInterest"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ contactStore.brochureErrors.courseInterest }}
                </p>
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label
                for="brochure-message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="brochure-message"
                v-model="contactStore.brochureFormData.message"
                rows="3"
                class="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent text-sm sm:text-base resize-none"
                placeholder="Tell us about your goals and what you'd like to learn..."
              ></textarea>
            </div>

            <!-- Submit Error -->
            <div v-if="contactStore.brochureErrors.submit" class="text-red-500 text-sm mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              {{ contactStore.brochureErrors.submit }}
            </div>

            <!-- Submit Button -->
            <div class="flex gap-3 sm:gap-4">
              <button
                type="submit"
                :disabled="contactStore.isBrochureSubmitting"
                class="flex-1 bg-brand text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-brand/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
              >
                <Icon
                  v-if="contactStore.isBrochureSubmitting"
                  name="heroicons:arrow-path"
                  class="w-5 h-5 animate-spin"
                />
                <span>{{
                  contactStore.isBrochureSubmitting ? "Sending..." : "Send Brochure"
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

// Handle phone input to allow only digits and limit to 10 characters
const handlePhoneInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  // Remove all non-digit characters
  const digitsOnly = target.value.replace(/\D/g, "");
  // Limit to 10 digits
  const limitedDigits = digitsOnly.slice(0, 10);
  // Update the input value and store
  target.value = limitedDigits;
  contactStore.brochureFormData.phone = limitedDigits;
};

const handleSubmit = async () => {
  const success = await contactStore.submitBrochureForm();
  if (success) {
    contactStore.hasBrochureSubmitted = true;
  }
};

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && contactStore.isBrochureModalOpen) {
      contactStore.closeBrochureModal();
    }
  };
  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});
</script>