<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-4xl mx-auto px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Cookie Policy
        </h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 sm:py-16">
      <div class="container max-w-4xl mx-auto px-4 sm:px-6">
        <div class="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
          <p class="text-gray-600 mb-6">
            <strong>Effective Date:</strong> 01/08/2025
          </p>

          <p class="text-gray-700 mb-8 leading-relaxed">
            This Cookie Policy explains how TEKNIKOZ uses cookies and similar
            technologies.
          </p>

          <!-- Section 1 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              1. What Are Cookies?
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device to improve user
              experience.
            </p>
          </div>

          <!-- Section 2 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              2. Types of Cookies We Use
            </h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  Essential Cookies:
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Enable core functionality like login and access control.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  Performance Cookies:
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Help us understand how users interact with our platform.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  Functional Cookies:
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Remember your preferences and settings.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  Analytics Cookies:
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Track usage patterns to enhance learning features.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              3. How to Control Cookies
            </h2>
            <p class="text-gray-700 leading-relaxed">
              You can manage cookies through your browser settings or opt-out
              through the cookie banner.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Cookie Policy - TEKNIKOZ Smart Learning",
  meta: [
    {
      name: "description",
      content:
        "TEKNIKOZ Smart Learning Cookie Policy - Learn about how we use cookies and similar technologies on our platform.",
    },
  ],
});
</script>
