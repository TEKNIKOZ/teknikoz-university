<template>
  <footer class="relative bg-gray-900 text-white">
    <div
      class="container max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:pt-16 sm:pb-12 relative"
    >
      <!-- Main Footer Content -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-gray-300"
      >
        <!-- TEKNIKOZ E-Learning Column -->
        <div class="text-left">
          <div class="flex items-center mb-4 sm:mb-6">
            <img
              src="/assets/images/footer-logo.svg"
              alt="TEKNIKOZ E-Learning"
              class="h-12 w-auto mr-3"
            />
          </div>
          <p class="text-white text-sm leading-relaxed mb-6">
            {{ FOOTER_CONTENT.description }}
          </p>
          <!-- Social Media Icons -->
          <div class="flex justify-start gap-4">
            <NuxtLink
              v-for="social in FOOTER_SOCIAL_LINKS"
              :key="social.id"
              :to="social.url"
              target="_blank"
              :class="`text-white ${social.hoverColor} transition-colors duration-300`"
              :aria-label="social.ariaLabel"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </NuxtLink>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div class="text-left">
          <h3 class="relative text-white font-bold text-lg mb-4 sm:mb-6 pl-5">
            <span
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-brand rounded-full"
            ></span>
            {{ FOOTER_CONTENT.sections.quickLinks }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in FOOTER_QUICK_LINKS"
              :key="link.id"
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                :href="link.url"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div class="text-left">
          <h3 class="relative text-white font-bold text-lg mb-4 sm:mb-6 pl-5">
            <span
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-brand rounded-full"
            ></span>
            {{ FOOTER_CONTENT.sections.legal }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in FOOTER_LEGAL_LINKS"
              :key="link.id"
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                :href="link.url"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Get In Touch Column -->
        <div class="text-left">
          <h3 class="relative text-white font-bold text-lg mb-4 sm:mb-6 pl-5">
            <span
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-brand rounded-full"
            ></span>
            {{ FOOTER_CONTENT.sections.contact }}
          </h3>
          <div class="space-y-4">
            <div
              v-for="contact in FOOTER_CONTACT_INFO"
              :key="contact.id"
              :class="
                contact.type === 'address'
                  ? 'flex items-start'
                  : 'flex items-center'
              "
            >
              <Icon
                :name="contact.icon"
                :class="
                  contact.type === 'address'
                    ? 'w-5 h-5 text-white hover:text-gray-400 mr-3 mt-1 flex-shrink-0'
                    : 'w-5 h-5 text-white mr-3 flex-shrink-0'
                "
              />
              <component
                :is="contact.href ? 'a' : 'p'"
                :href="contact.href"
                :class="
                  contact.type === 'address'
                    ? 'hover:text-white text-sm leading-relaxed text-pretty'
                    : 'hover:text-white text-sm transition-colors'
                "
              >
                {{ contact.content }}
              </component>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
        <div
          class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0"
        >
          <div class="text-center order-1 sm:order-2">
            <p class="text-gray-400 text-sm">
              &copy; {{ new Date().getFullYear() }}
              {{ FOOTER_CONTENT.copyright.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  FOOTER_CONTENT,
  FOOTER_SOCIAL_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_CONTACT_INFO,
} from "@/constants";
</script>
