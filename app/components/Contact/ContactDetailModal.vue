<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div
      class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- Background overlay -->
      <div
        class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        @click="$emit('close')"
      ></div>

      <!-- Modal panel -->
      <div
        class="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Contact Details</h2>
          <button
            @click="$emit('close')"
            class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <Icon name="mdi:close" class="w-6 h-6" />
          </button>
        </div>

        <!-- Content -->
        <div v-if="contact" class="space-y-6">
          <!-- Contact Type Badge -->
          <div class="flex items-center space-x-3">
            <span
              :class="[
                'px-3 py-1 text-sm font-medium rounded-full',
                contact.form_type === 'contact'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800',
              ]"
            >
              {{
                contact.form_type === "contact"
                  ? "Contact Form Submission"
                  : "Brochure Request"
              }}
            </span>
            <span class="text-sm text-gray-500"> ID: {{ contact.id }} </span>
          </div>

          <!-- Personal Information -->
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              Personal Information
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Full Name</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:account" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">{{ contact.name }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Email Address</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:email" class="w-5 h-5 text-gray-400" />
                  <a
                    :href="`mailto:${contact.email}`"
                    class="text-brand hover:text-brand/80 underline"
                  >
                    {{ contact.email }}
                  </a>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Phone Number</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:phone" class="w-5 h-5 text-gray-400" />
                  <a
                    :href="`tel:${contact.phone}`"
                    class="text-brand hover:text-brand/80 underline"
                  >
                    {{ formatPhone(contact.phone) }}
                  </a>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Course Interest</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:school" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">{{
                    formatCourseInterest(contact.course_interest)
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Message -->
          <div v-if="contact.message" class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Message</h3>
            <div class="flex items-start space-x-3">
              <Icon
                name="mdi:message-text"
                class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
              />
              <p class="text-gray-700 whitespace-pre-wrap">
                {{ contact.message }}
              </p>
            </div>
          </div>

          <!-- Timestamps -->
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              Submission Details
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Submitted At</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:calendar" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">
                    {{ formatFullDate(contact.created_at) }}
                  </span>
                </div>
              </div>

              <div v-if="contact.updated_at !== contact.created_at">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Last Updated</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:update" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">
                    {{ formatFullDate(contact.updated_at) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <a
              :href="`mailto:${contact.email}?subject=Re: ${
                contact.form_type === 'contact'
                  ? 'Your inquiry'
                  : 'Brochure request'
              } - Teknikoz University`"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Icon name="mdi:email" class="w-4 h-4 mr-2" />
              Reply via Email
            </a>

            <a
              :href="`tel:${contact.phone}`"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Icon name="mdi:phone" class="w-4 h-4 mr-2" />
              Call
            </a>

            <button
              @click="$emit('close')"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand/90"
            >
              Close
            </button>
          </div>
        </div>

        <!-- Loading state -->
        <div v-else class="text-center py-8">
          <Icon
            name="mdi:loading"
            class="w-8 h-8 text-brand animate-spin mx-auto mb-4"
          />
          <p class="text-gray-600">Loading contact details...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from "@/repository/contact.repository";

interface Props {
  contact: Contact | null;
}

defineProps<Props>();

defineEmits<{
  close: [];
}>();

// Course interest mapping
const courseMap: Record<string, string> = {
  "plm-windchill": "PLM Windchill",
  "siemens-teamcenter": "Siemens Teamcenter",
  "cloud-solutions": "Cloud Solutions",
  "web-development": "Web Development",
  "data-science": "Data Science",
  "mobile-development": "Mobile Development",
  devops: "DevOps",
  "ai-ml": "AI/ML",
  cybersecurity: "Cybersecurity",
  "cloud-computing": "Cloud Computing",
  other: "Other",
};

const formatPhone = (phone: string): string => {
  if (phone.length === 10) {
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  return phone;
};

const formatCourseInterest = (courseInterest: string): string => {
  return courseMap[courseInterest] || courseInterest;
};

const formatFullDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
</script>
