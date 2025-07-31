<template>
  <header
    :class="[
      'sticky top-0 z-50 sm:px-0 px-4 transition-all duration-300',
      isScrolled
        ? 'bg-white backdrop-blur-sm shadow-sm border-b border-gray-200/40'
        : 'bg-white',
    ]"
  >
    <div class="container mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/">
          <div class="flex items-center">
            <img
              src="/assets/images/header-logo.svg"
              alt="Teknikoz University Logo"
              class="h-8 md:h-12 w-auto"
            />
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            to="/courses"
            class="text-gray-700 hover:text-brand transition-colors duration-200 font-medium"
          >
            Courses
          </NuxtLink>
          <NuxtLink
            to="/mentors"
            class="text-gray-700 hover:text-brand transition-colors duration-200 font-medium"
          >
            Mentors
          </NuxtLink>
          <NuxtLink
            to="/testimonials"
            class="text-gray-700 hover:text-brand transition-colors duration-200 font-medium"
          >
            Testimonials
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 hover:text-brand transition-colors duration-200 font-medium"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- Auth & CTA Buttons & Mobile Menu Button -->
        <div class="flex items-center space-x-2 md:space-x-4">
          <!-- Authentication buttons (desktop) -->
          <div
            v-if="!authStore.isAuthenticated"
            class="hidden md:flex items-center space-x-3"
          >
            <NuxtLink
              to="/login"
              class="text-gray-700 hover:text-brand transition-colors duration-200 font-medium"
            >
              Sign In
            </NuxtLink>
            <NuxtLink
              to="/signup"
              class="bg-brand/10 text-brand px-4 py-2 rounded-lg hover:bg-brand/20 transition-colors duration-200 font-medium text-sm border border-brand/20"
            >
              Sign Up
            </NuxtLink>
          </div>

          <!-- User menu (desktop) -->
          <div v-else class="hidden md:flex items-center space-x-3 relative">
            <div class="relative">
              <!-- User dropdown trigger -->
              <button
                @click="toggleUserDropdown"
                class="flex items-center space-x-2 text-gray-700 hover:text-brand transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Icon name="mdi:account-circle" class="w-5 h-5" />
                <span>{{ authStore.fullname }}</span>
                <Icon 
                  name="mdi:chevron-down" 
                  :class="['w-4 h-4 transition-transform duration-200', isUserDropdownOpen ? 'rotate-180' : '']"
                />
              </button>

              <!-- Dropdown menu -->
              <div
                v-show="isUserDropdownOpen"
                class="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                tabindex="-1"
              >
                <NuxtLink
                  to="/profile"
                  class="block px-4 py-2 rounded-t-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  role="menuitem"
                  tabindex="-1"
                  @click="closeUserDropdown"
                >
                  <Icon name="mdi:account" class="inline w-4 h-4 mr-2" />
                  Profile
                </NuxtLink>
                <NuxtLink
                  to="/contact"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  role="menuitem"
                  tabindex="-1"
                  @click="closeUserDropdown"
                >
                  <Icon name="mdi:email" class="inline w-4 h-4 mr-2" />
                  Contact
                </NuxtLink>
                <NuxtLink
                  to="/brochure"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                  role="menuitem"
                  tabindex="-1"
                  @click="closeUserDropdown"
                >
                  <Icon name="mdi:file-document" class="inline w-4 h-4 mr-2" />
                  Brochure
                </NuxtLink>
                <button
                  @click="handleLogout"
                  class="block w-full text-left px-4 py-2 rounded-b-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-500"
                  role="menuitem"
                  tabindex="-1"
                >
                  <Icon name="mdi:logout" class="inline w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          <button
            @click="contactStore.openContactModal()"
            class="bg-brand text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-sm md:text-base hover:shadow-sm"
          >
            Enroll Now
          </button>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
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
        :class="[
          'lg:hidden py-4',
          isScrolled
            ? 'border-t border-gray-200/50'
            : 'border-t border-white/20',
        ]"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink
            to="/courses"
            class="text-gray-700 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Courses
          </NuxtLink>
          <NuxtLink
            to="/mentors"
            class="text-gray-700 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Mentors
          </NuxtLink>
          <NuxtLink
            to="/testimonials"
            class="text-gray-700 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Testimonials
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 hover:text-brand transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>

          <!-- Mobile Authentication -->
          <div class="border-t border-gray-200/50 pt-4 mt-4">
            <div
              v-if="!authStore.isAuthenticated"
              class="flex flex-col space-y-3"
            >
              <NuxtLink
                to="/login"
                class="text-gray-700 hover:text-brand transition-colors duration-200 py-2 font-medium"
                @click="closeMobileMenu"
              >
                Sign In
              </NuxtLink>
              <NuxtLink
                to="/signup"
                class="bg-brand/10 text-brand px-4 py-2 rounded-lg hover:bg-brand/20 transition-colors duration-200 font-medium text-center border border-brand/20"
                @click="closeMobileMenu"
              >
                Sign Up
              </NuxtLink>
            </div>
            <div v-else class="flex flex-col space-y-3">
              <span class="text-gray-700 font-medium py-2">{{
                authStore.fullname
              }}</span>
              <button
                @click="handleLogout"
                class="text-red-600 hover:text-red-700 transition-colors duration-200 font-medium py-2 text-left"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useContactStore } from "@/stores/contact.stores";
import { useAuthStore } from "@/stores/auth.stores";

const contactStore = useContactStore();
const authStore = useAuthStore();
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const isUserDropdownOpen = ref(false);

// Scroll detection and click outside
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('.relative')) {
      isUserDropdownOpen.value = false;
    }
  };

  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClickOutside);
  });
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};

const closeUserDropdown = () => {
  isUserDropdownOpen.value = false;
};

const handleLogout = async () => {
  const result = await authStore.logout();
  if (result.success) {
    await navigateTo("/");
  }
  closeMobileMenu();
  closeUserDropdown();
};
</script>
