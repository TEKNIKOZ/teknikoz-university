<template>
  <header
    :class="[
      'sticky top-0 z-50 sm:px-0 px-4 transition-all duration-300',
      isScrolled
        ? 'bg-white backdrop-blur-sm shadow-sm border-b border-gray-200/40'
        : 'bg-white shadow-sm',
    ]"
  >
    <div class="container mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink :to="HEADER_CONTENT.logo.homeUrl">
          <div class="flex items-center">
            <img
              src="/assets/images/header-logo.svg"
              alt="Teknikoz E-Learning Logo"
              class="h-10 md:h-12 w-auto"
            />
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="link in HEADER_NAV_LINKS"
            :key="link.id"
            :to="link.url"
            class="text-gray-700 hover:text-brand transition-colors duration-200 font-medium"
          >
            {{ link.title }}
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
              {{ HEADER_CONTENT.buttons.signIn }}
            </NuxtLink>
            <!-- <NuxtLink
              to="/signup"
              class="bg-brand/10 text-brand px-4 py-2 rounded-lg hover:bg-brand/20 transition-colors duration-200 font-medium text-sm border border-brand/20"
            >
              {{ HEADER_CONTENT.buttons.signUp }}
            </NuxtLink> -->
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
                  :class="[
                    'w-4 h-4 transition-transform duration-200',
                    isUserDropdownOpen ? 'rotate-180' : '',
                  ]"
                />
              </button>

              <!-- Dropdown menu -->
              <div
                v-show="isUserDropdownOpen"
                class="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                tabindex="-1"
              >
                <template
                  v-for="(link, index) in HEADER_USER_DROPDOWN_LINKS"
                  :key="link.id"
                >
                  <NuxtLink
                    v-if="link.type === 'link'"
                    :to="link.url"
                    :class="[
                      'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
                      index === 0 ? 'rounded-t-md' : '',
                    ]"
                    role="menuitem"
                    tabindex="-1"
                    @click="closeUserDropdown"
                  >
                    <Icon :name="link.icon" class="inline w-4 h-4 mr-2" />
                    {{ link.title }}
                  </NuxtLink>
                  <button
                    v-else
                    @click="handleLogout"
                    class="block w-full text-left px-4 py-2 rounded-b-md text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <Icon :name="link.icon" class="inline w-4 h-4 mr-2" />
                    {{ link.title }}
                  </button>
                </template>
              </div>
            </div>
          </div>

          <button
            @click="contactStore.openContactModal()"
            class="bg-brand text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium text-sm md:text-base hover:shadow-sm"
          >
            {{ HEADER_CONTENT.buttons.enrollNow }}
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
      <nav v-if="isMobileMenuOpen" class="lg:hidden my-4">
        <div>
          <!-- NAVIGATE Section -->
          <div class="mb-6">
            <h3
              class="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              {{ HEADER_CONTENT.mobileMenu.sections.navigate }}
            </h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="link in HEADER_MOBILE_NAV_LINKS"
                :key="link.id"
                :to="link.url"
                class="flex items-center text-gray-700 hover:text-brand hover:bg-white transition-all duration-200 px-3 py-3 rounded-lg group"
                @click="closeMobileMenu"
              >
                <Icon
                  :name="link.icon"
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand"
                />
                <span class="font-medium">{{ link.title }}</span>
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 ml-auto text-gray-400"
                />
              </NuxtLink>
            </div>
          </div>

          <!-- Authentication Section -->
          <div v-if="!authStore.isAuthenticated">
            <h3
              class="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              {{ HEADER_CONTENT.mobileMenu.sections.account }}
            </h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="link in HEADER_MOBILE_AUTH_LINKS"
                :key="link.id"
                :to="link.url"
                class="flex items-center text-gray-700 hover:text-brand hover:bg-white transition-all duration-200 px-3 py-3 rounded-lg group"
                @click="closeMobileMenu"
              >
                <Icon
                  :name="link.icon"
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand"
                />
                <span class="font-medium">{{ link.title }}</span>
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 ml-auto text-gray-400"
                />
              </NuxtLink>
            </div>
          </div>

          <!-- User Account Section -->
          <div v-else>
            <h3
              class="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              {{ HEADER_CONTENT.mobileMenu.sections.account }}
            </h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="link in HEADER_MOBILE_USER_LINKS"
                :key="link.id"
                :to="link.url"
                class="flex items-center text-gray-700 hover:text-brand hover:bg-white transition-all duration-200 px-3 py-3 rounded-lg group"
                @click="closeMobileMenu"
              >
                <Icon
                  :name="link.icon"
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand"
                />
                <span class="font-medium">{{ link.title }}</span>
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 ml-auto text-gray-400"
                />
              </NuxtLink>
              <button
                @click="handleLogout"
                class="w-full flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200 px-3 py-3 rounded-lg group mt-4"
              >
                <Icon
                  :name="HEADER_CONTENT.mobileMenu.logout.icon"
                  class="w-5 h-5 mr-3"
                />
                <span class="font-medium">{{
                  HEADER_CONTENT.mobileMenu.logout.title
                }}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.stores";
import { useContactStore } from "@/stores/contact.stores";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import {
  HEADER_CONTENT,
  HEADER_NAV_LINKS,
  HEADER_USER_DROPDOWN_LINKS,
  HEADER_MOBILE_NAV_LINKS,
  HEADER_MOBILE_AUTH_LINKS,
  HEADER_MOBILE_USER_LINKS,
} from "@/constants";

const router = useRouter();
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
    if (!target.closest(".relative")) {
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
    await router.push("/");
  }
  closeMobileMenu();
  closeUserDropdown();
};
</script>
