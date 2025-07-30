<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Course Brochure</h1>
          <p class="text-gray-600">Comprehensive information about our courses and programs</p>
        </div>

        <!-- Brochure Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Course Overview -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Programs</h2>
              <div class="space-y-4">
                <div class="border-l-4 border-brand pl-4">
                  <h3 class="text-lg font-medium text-gray-900">Full Stack Development</h3>
                  <p class="text-gray-600 mt-1">Master modern web development with React, Node.js, and cloud technologies.</p>
                </div>
                <div class="border-l-4 border-brand pl-4">
                  <h3 class="text-lg font-medium text-gray-900">Data Science & Analytics</h3>
                  <p class="text-gray-600 mt-1">Learn Python, machine learning, and data visualization techniques.</p>
                </div>
                <div class="border-l-4 border-brand pl-4">
                  <h3 class="text-lg font-medium text-gray-900">DevOps Engineering</h3>
                  <p class="text-gray-600 mt-1">Master CI/CD, containerization, and cloud infrastructure management.</p>
                </div>
              </div>
            </div>

            <!-- Key Features -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-start space-x-3">
                  <Icon name="mdi:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Expert Mentors</h3>
                    <p class="text-sm text-gray-600">Learn from industry professionals with years of experience</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="mdi:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Hands-on Projects</h3>
                    <p class="text-sm text-gray-600">Build real-world applications and portfolio projects</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="mdi:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Career Support</h3>
                    <p class="text-sm text-gray-600">Job placement assistance and interview preparation</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="mdi:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Lifetime Access</h3>
                    <p class="text-sm text-gray-600">Access to course materials and community forever</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Course Structure -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Course Structure</h2>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span class="font-medium text-gray-900">Duration</span>
                  <span class="text-gray-600">6-12 months</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span class="font-medium text-gray-900">Format</span>
                  <span class="text-gray-600">Online & Self-paced</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span class="font-medium text-gray-900">Support</span>
                  <span class="text-gray-600">24/7 Community & Mentors</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span class="font-medium text-gray-900">Certificate</span>
                  <span class="text-gray-600">Industry-recognized completion certificate</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Download Brochure -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Get Detailed Brochure</h3>
              <p class="text-gray-600 mb-4">Download our comprehensive brochure with detailed curriculum and pricing information.</p>
              <button
                @click="handleDownloadBrochure"
                class="w-full bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand/90 transition-colors font-medium"
              >
                <Icon name="mdi:download" class="inline w-5 h-5 mr-2" />
                Download PDF
              </button>
            </div>

            <!-- Contact Info -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Need More Info?</h3>
              <p class="text-gray-600 mb-4">Have questions about our programs? Get in touch with our admissions team.</p>
              <NuxtLink
                to="/contact"
                class="w-full inline-block text-center bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <Icon name="mdi:email" class="inline w-5 h-5 mr-2" />
                Contact Us
              </NuxtLink>
            </div>

            <!-- Testimonial -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Student Success</h3>
              <blockquote class="text-gray-600 italic mb-3">
                "The program exceeded my expectations. The mentors were incredibly supportive and the projects were challenging and relevant to real-world scenarios."
              </blockquote>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
                  <Icon name="mdi:account" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p class="font-medium text-gray-900">Sarah Johnson</p>
                  <p class="text-sm text-gray-600">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleDownloadBrochure = () => {
  // This would typically trigger a PDF download
  // For now, we'll show an alert
  alert('Brochure download would be implemented here. This would typically generate and download a PDF file.');
};

// SEO
useHead({
  title: 'Course Brochure - Teknikoz University',
  meta: [
    { name: 'description', content: 'Download our comprehensive course brochure with detailed information about our programs, curriculum, and pricing.' }
  ]
});
</script>