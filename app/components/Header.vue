<template>
  <header
    class="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="container mx-auto max-w-7xl px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Teknikoz University Logo"
            class="h-8 md:h-12 w-auto"
          />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            to="/courses"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 font-medium"
          >
            Courses
          </NuxtLink>
          <NuxtLink
            to="/mentors"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 font-medium"
          >
            Mentors
          </NuxtLink>
          <NuxtLink
            to="/testimonials"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 font-medium"
          >
            Testimonials
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 font-medium"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- CTA Button & Mobile Menu Button -->
        <div class="flex items-center space-x-2 md:space-x-4">
          <NuxtLink
            to="/enroll"
            class="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-sm md:text-base"
          >
            Enroll Now
          </NuxtLink>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon
              :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
              class="w-6 h-6 flex items-center justify-center"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav
        v-if="isMobileMenuOpen"
        class="lg:hidden py-4 border-t dark:border-gray-700"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink
            to="/courses"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Courses
          </NuxtLink>
          <NuxtLink
            to="/mentors"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Mentors
          </NuxtLink>
          <NuxtLink
            to="/testimonials"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Testimonials
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
