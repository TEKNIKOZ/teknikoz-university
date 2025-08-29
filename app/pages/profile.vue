<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-6 lg:py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Profile
          </h1>
          <p class="text-gray-600 text-sm sm:text-base">
            Manage your account information and preferences
          </p>
        </div>

        <div v-if="authStore.isAuthenticated">
          <!-- Email Verification Alert -->
          <div
            v-if="!authStore.isEmailVerified"
            class="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl"
          >
            <div class="flex items-start">
              <Icon
                name="heroicons:exclamation-triangle"
                class="h-4 w-4 text-amber-500 mr-3 flex-shrink-0 mt-0.5"
              />
              <div>
                <h3 class="text-base font-semibold text-amber-800 mb-1">
                  Email Verification Required
                </h3>
                <p class="text-base text-amber-700">
                  Verify your email address to unlock all platform features and
                  ensure account security.
                </p>
              </div>
            </div>
          </div>

          <!-- Profile Content -->
          <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div class="space-y-8">
              <!-- Role Section -->
              <div
                class="flex items-center gap-3 border-b border-gray-100 pb-4"
              >
                <div
                  class="w-9 h-9 bg-brand/10 rounded-full flex items-center justify-center"
                >
                  <Icon
                    name="heroicons:shield-check"
                    class="h-5 w-5 text-brand"
                  />
                </div>
                <div>
                  <span class="text-gray-600 text-sm">Role:</span>
                  <span class="ml-2 text-gray-900 font-semibold">
                    {{
                      authStore.roles && authStore.roles.length
                        ? authStore.roles
                            .map(
                              (role) =>
                                role.charAt(0).toUpperCase() + role.slice(1)
                            )
                            .join(", ")
                        : "No role assigned"
                    }}
                  </span>
                </div>
              </div>

              <!-- Personal Information Section -->
              <div>
                <div class="flex items-start justify-between mb-6">
                  <div>
                    <h2
                      class="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                    >
                      Personal Information
                    </h2>
                    <p class="text-gray-600 text-sm">
                      Your profile details and settings
                    </p>
                  </div>
                  <div class="flex gap-2 ml-4">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand sm:px-4 sm:py-2"
                    >
                      <Icon name="heroicons:key" class="h-4 w-4 sm:mr-2" />
                      <span class="hidden sm:inline">Change Password</span>
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 border border-transparent rounded-lg text-sm font-medium text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand sm:px-4 sm:py-2"
                    >
                      <Icon name="heroicons:pencil" class="h-4 w-4 sm:mr-2" />
                      <span class="hidden sm:inline">Edit Profile</span>
                    </button>
                  </div>
                </div>

                <div class="space-y-0">
                  <!-- Full Name -->
                  <div class="py-4 sm:py-6">
                    <div class="flex flex-col sm:flex-row sm:items-center">
                      <div class="w-full sm:w-32 mb-2 sm:mb-0">
                        <label class="text-sm font-medium text-gray-500"
                          >Full Name</label
                        >
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-900 font-medium text-base">
                          {{ authStore.name || "Not provided" }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Email Address -->
                  <div class="py-4 sm:py-6 border-t border-gray-100">
                    <div class="flex flex-col sm:flex-row sm:items-center">
                      <div class="w-full sm:w-32 mb-2 sm:mb-0">
                        <label class="text-sm font-medium text-gray-500"
                          >Email address</label
                        >
                      </div>
                      <div class="flex-1">
                        <div
                          class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                        >
                          <p
                            class="text-gray-900 font-medium text-base break-all"
                          >
                            {{ authStore.email || "Not provided" }}
                          </p>
                          <span
                            v-if="authStore.isEmailVerified"
                            class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 self-start"
                          >
                            <Icon
                              name="heroicons:check-circle"
                              class="h-3 w-3"
                            />
                            Verified
                          </span>
                          <span
                            v-else
                            class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 self-start"
                          >
                            <Icon name="heroicons:x-circle" class="h-3 w-3" />
                            Not Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Phone Number -->
                  <div class="py-4 sm:py-6 border-t border-gray-100">
                    <div class="flex flex-col sm:flex-row sm:items-center">
                      <div class="w-full sm:w-32 mb-2 sm:mb-0">
                        <label class="text-sm font-medium text-gray-500"
                          >Phone Number</label
                        >
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-900 font-medium text-base">
                          {{ authStore.phone || "Not provided" }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Not Authenticated State -->
        <div
          v-else
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-12 text-center"
        >
          <div class="max-w-md mx-auto">
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
            >
              <Icon
                name="heroicons:user-circle"
                class="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
              />
            </div>
            <h2
              class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
            >
              Login Required
            </h2>
            <p
              class="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base px-2 sm:px-0"
            >
              Please sign in to access your profile and manage your account
              settings.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <NuxtLink
                to="/login"
                class="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand hover:bg-brand/90 transition-colors shadow-sm w-full sm:w-auto"
              >
                <Icon
                  name="heroicons:arrow-right-on-rectangle"
                  class="h-4 w-4 mr-2"
                />
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/signup"
                class="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-sm font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                <Icon name="heroicons:user-plus" class="h-4 w-4 mr-2" />
                Create Account
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import { useAuthStore } from "@/stores/auth.stores";
const authStore = useAuthStore();

// SEO
useHead({
  title: "Profile - Teknikoz Smart Learning",
  meta: [
    {
      name: "description",
      content:
        "Manage your Teknikoz Smart Learning account information and preferences.",
    },
  ],
});
</script>
