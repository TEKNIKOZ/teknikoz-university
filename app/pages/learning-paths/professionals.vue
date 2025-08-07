<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-8 sm:py-12 md:py-16 lg:py-32 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/pro-learning-path.jpeg"
          alt="Professionals Learning Path"
          class="w-full h-full object-cover object-center opacity-20"
          loading="eager"
        />
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
          >
            Advance Your Career with Future-Ready Skills
          </h1>
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-90"
          >
            Lead the Digital Transformation Wave in Engineering
          </p>
        </div>
      </div>
    </section>

    <!-- Advanced Learning Tracks -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Advanced Learning Tracks
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Specialized modules designed for experienced professionals
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:cog-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Advanced PLM Modules
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                MPMLink Configuration
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                Change Management
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                ECAD/MCAD Integration
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                Workflow Automation
              </li>
            </ul>
          </div>

          <div
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:brain" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              AI/ML for Engineers
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                Predictive Analytics
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                BERT & NLP Models
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                RAG Implementation
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                ML Pipeline Design
              </li>
            </ul>
          </div>

          <div
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:network-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Cross-Discipline Integration
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                IoT Integration
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                MES Connectivity
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                ERP Synchronization
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                Digital Twin Implementation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Preparation -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Leadership Preparation
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Develop the leadership skills needed for digital transformation
            initiatives
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:account-group" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Agile Leadership
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Master agile methodologies and lead cross-functional teams
              effectively
            </p>
          </div>

          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:chart-line" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Change Management
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Navigate and lead organizational change in digital transformation
              projects
            </p>
          </div>

          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:puzzle-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Strategic Problem Solving
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Case-based learning for complex engineering and business
              challenges
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Networking & Industry Connections -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Networking & Industry Connections
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Build valuable connections with industry leaders and peers
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:school" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Industry Masterclasses
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">
              Monthly sessions with C-level executives and industry thought
              leaders
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Digital transformation case studies</li>
              <li>• Future of engineering technology</li>
              <li>• Leadership insights</li>
            </ul>
          </div>

          <div
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:account-multiple" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Community Groups
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">
              Join exclusive professional communities and alumni networks
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• PLM professionals network</li>
              <li>• AI/ML engineering group</li>
              <li>• Regional chapter meetups</li>
            </ul>
          </div>

          <div
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:handshake" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Circles
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">
              Connect with senior industry professionals for guidance
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• One-on-one guidance sessions</li>
              <li>• Career strategy planning</li>
              <li>• Industry insights sharing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Accelerator Tools -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Career Accelerator Tools
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Advanced tools to showcase your expertise and accelerate career
            growth
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:chart-box-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Personal Dashboard
            </h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Track your learning progress and achievements
            </p>
          </div>

          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:briefcase-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Portfolio Builder
            </h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Showcase your projects and certifications
            </p>
          </div>

          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:medal-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Digital Badges
            </h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Earn and display verified skill badges
            </p>
          </div>

          <div
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon name="mdi:linkedin" class="text-white text-3xl" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              LinkedIn Integration
            </h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Automatically update your professional profile
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Professional Success Stories
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            See how professionals have advanced their careers with our programs
          </p>
        </div>

        <div
          class="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl ring-1 ring-black/5 border border-gray-100 max-w-4xl mx-auto transition-all duration-300 hover:shadow-2xl"
        >
          <div
            class="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8"
          >
            <div class="flex-shrink-0">
              <div
                class="w-20 h-20 bg-brand rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-2xl">M</span>
              </div>
            </div>
            <div class="text-center md:text-left">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Manoj Singh
              </h3>
              <p class="text-brand font-semibold mb-2 text-sm sm:text-base">
                Senior Mechanical Engineer → PLM Solution Architect
              </p>
              <p
                class="text-gray-600 text-sm sm:text-base md:text-lg italic leading-relaxed"
              >
                "After completing this program, I moved into a PLM Solution
                Architect role at a Fortune 500 company. The advanced modules
                and leadership training prepared me perfectly for this
                transition. My salary increased by 60%!"
              </p>
              <div
                class="mt-4 flex flex-wrap gap-2 justify-center md:justify-start"
              >
                <span
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >Windchill Expert</span
                >
                <span
                  class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >AI/ML Certified</span
                >
                <span
                  class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >Team Lead</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-700"
    >
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
        >
          Ready to Advance Your Career?
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-8"
        >
          Join the next generation of engineering leaders
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center bg-white/5 backdrop-blur-sm rounded-2xl ring-1 ring-white/10 shadow-xl p-4"
        >
          <button
            class="bg-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-brand/80 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 group"
          >
            <span>View Track Details</span>
            <Icon
              name="mdi:arrow-right"
              class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
          <button
            class="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 group"
          >
            <span>Download Sample Certificate</span>
            <Icon
              name="mdi:arrow-right"
              class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title:
    "Professionals Learning Path - Advance Your Engineering Career | Teknikoz E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Advanced PLM and AI training for engineering professionals. Leadership preparation, industry connections, and career acceleration tools.",
    },
  ],
});
</script>
