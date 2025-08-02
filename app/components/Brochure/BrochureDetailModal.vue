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
        class="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-900">
            Brochure Request Details
          </h2>
          <button
            @click="$emit('close')"
            class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <Icon name="mdi:close" class="w-6 h-6" />
          </button>
        </div>

        <!-- Content -->
        <div v-if="brochure" class="space-y-6">
          <!-- Status Badge -->
          <div class="flex items-center space-x-3">
            <span
              :class="[
                'px-3 py-1 text-sm font-medium rounded-full',
                brochure.email_sent
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800',
              ]"
            >
              {{ brochure.email_sent ? "Email Delivered" : "Pending Delivery" }}
            </span>
            <span class="text-sm text-gray-500"> ID: {{ brochure.id }} </span>
          </div>

          <!-- Brochure Information -->
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              Brochure Information
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Brochure Name</label
                >
                <div class="flex items-center space-x-2">
                  <Icon
                    name="mdi:file-document"
                    class="w-5 h-5 text-gray-400"
                  />
                  <span class="text-gray-900">{{
                    brochure.brochure_name
                  }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Course Type</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:school" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">{{
                    formatCourseType(brochure.course_type)
                  }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Contact ID</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:account" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900 font-mono text-sm">{{
                    brochure.contact_id
                  }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Email Status</label
                >
                <div class="flex items-center space-x-2">
                  <Icon
                    :name="
                      brochure.email_sent
                        ? 'mdi:email-check'
                        : 'mdi:email-clock'
                    "
                    :class="[
                      'w-5 h-5',
                      brochure.email_sent
                        ? 'text-green-500'
                        : 'text-yellow-500',
                    ]"
                  />
                  <span class="text-gray-900">
                    {{ brochure.email_sent ? "Sent" : "Not Sent" }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Email Delivery Details -->
          <div v-if="brochure.email_sent_at" class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              Email Delivery Details
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Delivered At</label
                >
                <div class="flex items-center space-x-2">
                  <Icon
                    name="mdi:calendar-check"
                    class="w-5 h-5 text-gray-400"
                  />
                  <span class="text-gray-900">
                    {{ formatFullDate(brochure.email_sent_at) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- System Information -->
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              System Information
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Created At</label
                >
                <div class="flex items-center space-x-2">
                  <Icon
                    name="mdi:calendar-plus"
                    class="w-5 h-5 text-gray-400"
                  />
                  <span class="text-gray-900">
                    {{ formatFullDate(brochure.created_at) }}
                  </span>
                </div>
              </div>

              <div v-if="brochure.updated_at !== brochure.created_at">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Last Updated</label
                >
                <div class="flex items-center space-x-2">
                  <Icon
                    name="mdi:calendar-edit"
                    class="w-5 h-5 text-gray-400"
                  />
                  <span class="text-gray-900">
                    {{ formatFullDate(brochure.updated_at) }}
                  </span>
                </div>
              </div>

              <div v-if="brochure.created_by">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Created By</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:account-plus" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">{{ brochure.created_by }}</span>
                </div>
              </div>

              <div v-if="brochure.updated_by">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Updated By</label
                >
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:account-edit" class="w-5 h-5 text-gray-400" />
                  <span class="text-gray-900">{{ brochure.updated_by }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              v-if="!brochure.email_sent"
              @click="$emit('resend', brochure.id)"
              :disabled="isResending"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                :name="isResending ? 'mdi:loading' : 'mdi:email-send'"
                :class="['w-4 h-4 mr-2', isResending && 'animate-spin']"
              />
              {{ isResending ? "Sending..." : "Send Email" }}
            </button>

            <button
              v-else
              @click="$emit('resend', brochure.id)"
              :disabled="isResending"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                :name="isResending ? 'mdi:loading' : 'mdi:email-sync'"
                :class="['w-4 h-4 mr-2', isResending && 'animate-spin']"
              />
              {{ isResending ? "Resending..." : "Resend Email" }}
            </button>

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
          <p class="text-gray-600">Loading brochure details...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BrochureRequest } from "@/repository/brochure.repository";

interface Props {
  brochure: BrochureRequest | null;
  isResending?: boolean;
}

defineProps<Props>();

defineEmits<{
  close: [];
  resend: [id: number];
}>();

// Course type mapping
const courseTypeMap: Record<string, string> = {
  engineering: "Engineering",
  medical: "Medical",
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

const formatCourseType = (courseType: string): string => {
  return courseTypeMap[courseType] || courseType;
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
