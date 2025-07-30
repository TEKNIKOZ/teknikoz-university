<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p class="text-gray-600">Manage your account information and preferences</p>
        </div>

        <!-- Profile Content -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div v-if="authStore.isAuthenticated" class="space-y-6">
            <!-- User Info -->
            <div class="border-b border-gray-200 pb-6">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Account Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <p class="text-gray-900">{{ authStore.fullname || 'Not provided' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p class="text-gray-900">{{ authStore.email || 'Not provided' }}</p>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <NuxtLink
                  to="/contact"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-brand hover:bg-brand/5 transition-colors"
                >
                  <Icon name="mdi:email" class="w-6 h-6 text-brand mr-3" />
                  <div>
                    <h3 class="font-medium text-gray-900">Contact Us</h3>
                    <p class="text-sm text-gray-600">Get in touch with our team</p>
                  </div>
                </NuxtLink>
                
                <NuxtLink
                  to="/brochure"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-brand hover:bg-brand/5 transition-colors"
                >
                  <Icon name="mdi:file-document" class="w-6 h-6 text-brand mr-3" />
                  <div>
                    <h3 class="font-medium text-gray-900">Brochure</h3>
                    <p class="text-sm text-gray-600">View our course materials</p>
                  </div>
                </NuxtLink>
                
                <button
                  @click="handleLogout"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-colors text-left"
                >
                  <Icon name="mdi:logout" class="w-6 h-6 text-red-500 mr-3" />
                  <div>
                    <h3 class="font-medium text-gray-900">Sign Out</h3>
                    <p class="text-sm text-gray-600">Log out of your account</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Not authenticated -->
          <div v-else class="text-center py-8">
            <Icon name="mdi:account-circle" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 class="text-xl font-semibold text-gray-900 mb-2">Sign In Required</h2>
            <p class="text-gray-600 mb-6">Please sign in to view your profile</p>
            <div class="space-x-4">
              <NuxtLink
                to="/login"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand/90"
              >
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/signup"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Sign Up
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.stores";

const authStore = useAuthStore();

const handleLogout = async () => {
  const result = await authStore.logout();
  if (result.success) {
    await navigateTo("/");
  }
};

// SEO
useHead({
  title: 'Profile - Teknikoz University',
  meta: [
    { name: 'description', content: 'Manage your Teknikoz University account information and preferences.' }
  ]
});
</script>