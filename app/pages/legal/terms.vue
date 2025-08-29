<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-4xl mx-auto px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Terms of Service
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
            By accessing or using the TEKNIKOZ smart-learning portal, you agree
            to be bound by the following terms:
          </p>

          <!-- Section 1 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              1. Account Registration
            </h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>You must be 18 years or older to register.</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
            </ul>
          </div>

          <!-- Section 2 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              2. Use of Services
            </h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>Courses are licensed to you, not sold.</li>
              <li>
                Content may not be copied, redistributed, or shared without
                permission.
              </li>
              <li>
                You agree not to use the platform for illegal or unauthorized
                purposes.
              </li>
            </ul>
          </div>

          <!-- Section 3 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              3. Intellectual Property
            </h2>
            <p class="text-gray-700 leading-relaxed">
              All content on TEKNIKOZ is the intellectual property of TEKNIKOZ
              or its licensors.
            </p>
          </div>

          <!-- Section 4 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              4. Modifications
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We reserve the right to modify or discontinue the platform at any
              time without notice.
            </p>
          </div>

          <!-- Section 5 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              5. Limitation of Liability
            </h2>
            <p class="text-gray-700 leading-relaxed">
              TEKNIKOZ is not liable for any indirect or consequential damages
              arising from your use of the platform.
            </p>
          </div>

          <!-- Section 6 -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              6. Termination
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We may suspend or terminate your account for violations of these
              terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Terms of Service - TEKNIKOZ Smart Learning",
  meta: [
    {
      name: "description",
      content:
        "TEKNIKOZ Smart Learning Terms of Service - Read our terms and conditions for using our smart-learning platform.",
    },
  ],
});
</script>
