<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-4xl mx-auto px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Refund Policy
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
            TEKNIKOZ aims for complete customer satisfaction. Please read our
            refund policy carefully.
          </p>

          <!-- Section 1 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              1. Eligibility for Refunds
            </h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                Refunds are only applicable within 7 days of purchase for
                self-paced courses.
              </li>
            </ul>

            <p class="text-gray-700 font-semibold mb-2">No refunds for:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>Downloaded content.</li>
              <li>Live sessions after attendance.</li>
              <li>Certification courses once assessments begin.</li>
            </ul>
          </div>

          <!-- Section 2 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              2. How to Request a Refund
            </h2>
            <p class="text-gray-700 mb-3 leading-relaxed">
              Email
              <a
                href="mailto:billing@teknikoz.com"
                class="text-brand hover:underline"
                >billing@teknikoz.com</a
              >
              with:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>Your full name</li>
              <li>Registered email</li>
              <li>Course name</li>
              <li>Reason for refund</li>
            </ul>
          </div>

          <!-- Section 3 -->
          <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              3. Processing Time
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Eligible refunds will be processed within 7–10 business days to
              the original payment method.
            </p>
          </div>

          <!-- Section 4 -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              4. Discretionary Refunds
            </h2>
            <p class="text-gray-700 leading-relaxed">
              TEKNIKOZ reserves the right to grant refunds outside the policy on
              a case-by-case basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Refund Policy - TEKNIKOZ E-Learning",
  meta: [
    {
      name: "description",
      content:
        "TEKNIKOZ E-Learning Refund Policy - Learn about our refund terms and conditions for courses.",
    },
  ],
});
</script>
