<template>
  <footer class="bg-gray-900 text-white pt-24">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 pt-20 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-6">
            <img
              :src="footerLogo"
              alt="TEKNIKOZ University"
              class="h-12 w-auto"
            />
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Empowering professionals with industry-leading PLM and AI skills
            through hands-on, mentor-led courses.
          </p>
          <div class="flex items-center space-x-4">
            <span class="text-gray-400 text-sm">Follow us:</span>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon name="mdi:facebook" class="text-xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon name="mdi:twitter" class="text-xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon name="mdi:instagram" class="text-xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon name="mdi:linkedin" class="text-xl" />
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon name="mdi:youtube" class="text-xl" />
            </a>
          </div>
        </div>

        <!-- For Users -->
        <div>
          <h3 class="text-lg font-semibold mb-6 relative">
            For Users
            <div
              class="absolute bottom-0 left-0 w-12 h-0.5 bg-brand mt-2"
            ></div>
          </h3>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - Browse Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - How it Works
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - Contact Us
              </a>
            </li>
          </ul>
        </div>

        <!-- For Businesses -->
        <div>
          <h3 class="text-lg font-semibold mb-6 relative">
            For Businesses
            <div
              class="absolute bottom-0 left-0 w-12 h-0.5 bg-brand mt-2"
            ></div>
          </h3>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - List Your Business
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - Business Login
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - Advertising
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                - Business Support
              </a>
            </li>
          </ul>
        </div>

        <!-- Get In Touch -->
        <div>
          <h3 class="text-lg font-semibold mb-6 relative">
            Get In Touch
            <div
              class="absolute bottom-0 left-0 w-12 h-0.5 bg-brand mt-2"
            ></div>
          </h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <Icon
                name="mdi:map-marker"
                class="text-brand text-xl mr-3 mt-1 flex-shrink-0"
              />
              <div class="text-gray-300">
                <p>2499 Palm Ridge Rd, Sanibel</p>
                <p>Florida 33957 USA</p>
              </div>
            </div>
            <div class="flex items-center">
              <Icon
                name="mdi:phone"
                class="text-brand text-xl mr-3 flex-shrink-0"
              />
              <a
                href="tel:+11234567890"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                (123) 456-7890
              </a>
            </div>
            <div class="flex items-center">
              <Icon
                name="mdi:email"
                class="text-brand text-xl mr-3 flex-shrink-0"
              />
              <a
                href="mailto:info@teknikoz.com"
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                info@teknikoz.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TEKNIKOZ University. All Rights Reserved.
          </p>
          <div class="flex items-center space-x-6">
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span class="text-gray-600">|</span>
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Import footer logo
import footerLogo from "@/assets/images/footer-logo.png";
</script>
