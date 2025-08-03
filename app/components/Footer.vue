<template>
  <footer class="relative bg-gray-900 text-white">
    <div
      class="container max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:pt-16 sm:pb-12 relative"
    >
      <!-- Main Footer Content -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-gray-300"
      >
        <!-- TEKNIKOZ University Column -->
        <div class="text-left">
          <div class="flex items-center mb-4 sm:mb-6">
            <img
              src="/assets/images/footer-logo.svg"
              alt="TEKNIKOZ University"
              class="h-10 w-auto mr-3"
            />
          </div>
          <p class="text-white text-sm leading-relaxed mb-6">
            Empowering professionals with industry-leading PLM and AI skills
            through hands-on, mentor-led courses.
          </p>
          <!-- Social Media Icons -->
          <div class="flex justify-start gap-4">
            <a
              href="#"
              class="text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Icon name="mdi:facebook" class="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              class="text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Icon name="mdi:twitter" class="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              class="text-white hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" class="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              class="text-white hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" class="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              class="text-white hover:text-red-500 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Icon name="mdi:youtube" class="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div class="text-left">
          <h3 class="relative text-white font-bold text-lg mb-4 sm:mb-6 pl-5">
            <span
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-brand rounded-full"
            ></span>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="#"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                About Us
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/courses"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Courses
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/mentors"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Mentors
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/testimonials"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Testimonials
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/contact"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Contact
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
            Legal
          </h3>
          <ul class="space-y-3">
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/legal/privacy"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Privacy Policy
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/legal/terms"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Terms of Service
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/legal/cookies"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Cookie Policy
              </a>
            </li>
            <li
              class="flex items-center transition-transform hover:translate-x-1 duration-300"
            >
              <Icon
                name="mdi:chevron-right"
                class="w-4 h-4 mr-2 text-brand/70"
              />
              <a
                href="/legal/refund"
                class="hover:text-white transition-colors text-sm sm:text-base"
              >
                Refund Policy
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
            Get In Touch
          </h3>
          <div class="space-y-4">
            <!-- Address -->
            <div class="flex items-start">
              <Icon
                name="mdi:map-marker"
                class="w-5 h-5 text-white hover:text-gray-400 mr-3 mt-1 flex-shrink-0"
              />
              <p class="hover:text-white text-sm leading-relaxed text-pretty">
                2499 Palm Ridge Rd, Sanibel Florida 33957 USA
              </p>
            </div>
            <!-- Phone -->
            <div class="flex items-center">
              <Icon
                name="mdi:phone"
                class="w-5 h-5 text-white mr-3 flex-shrink-0"
              />
              <a
                href="tel:+11234567890"
                class="hover:text-white text-sm transition-colors"
              >
                (123) 456-7890
              </a>
            </div>
            <!-- Email -->
            <div class="flex items-center">
              <Icon
                name="mdi:email"
                class="w-5 h-5 text-white mr-3 flex-shrink-0"
              />
              <a
                href="mailto:info@teknikoz.com"
                class="hover:text-white text-sm transition-colors"
              >
                info@teknikoz.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
        <div
          class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div class="text-center order-1 sm:order-2">
            <p class="text-gray-400 text-sm">
              &copy; {{ new Date().getFullYear() }}
              TEKNIKOZ University. All Rights Reserved.
            </p>
          </div>
          <div
            class="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 order-3"
          >
            <a
              href="/legal/terms"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline underline-offset-4"
            >
              Terms of Service
            </a>
            <a
              href="/legal/privacy"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
