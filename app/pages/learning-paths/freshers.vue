<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-brand to-blue-600 text-white py-8 sm:py-12 md:py-16 lg:py-32 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/fresher-learning-path.jpeg"
          alt="Freshers Learning Path"
          class="w-full h-full object-cover object-center opacity-20"
          loading="eager"
        />
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
          >
            Kickstart Your Career with PLM & AI Skills
          </h1>
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-90 px-2"
          >
            From Classroom to Career: Your Fast-Track to PLM + AI Jobs
          </p>
        </div>
      </div>
    </section>

    <!-- Program Highlights -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Program Highlights
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2"
          >
            Our comprehensive training program is designed to take you from zero
            to hero
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4"
            >
              <Icon name="mdi:school-outline" class="text-white text-2xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Zero to Hero Training Path
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              PLM Foundation → AI Basics → Real Projects
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4"
            >
              <Icon
                name="mdi:certificate-outline"
                class="text-white text-2xl"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Certification Programs
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Creo, Windchill, Python, ML models
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4"
            >
              <Icon
                name="mdi:gamepad-variant-outline"
                class="text-white text-2xl"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Interactive Learning
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Mini-hackathons, quizzes & assignments
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4"
            >
              <Icon
                name="mdi:account-group-outline"
                class="text-white text-2xl"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Live Sessions
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Live sessions with industry experts
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Services -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Career Services
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2"
          >
            We don't just teach you skills, we help you land your dream job
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div class="text-center px-2">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
            >
              <Icon
                name="mdi:file-document-edit-outline"
                class="text-white text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
            >
              Resume Building
            </h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600">
              Professional resume crafting and optimization
            </p>
          </div>

          <div class="text-center px-2">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
            >
              <Icon name="mdi:account-tie" class="text-white text-3xl" />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
            >
              Mock Interviews
            </h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600">
              Practice interviews with industry professionals
            </p>
          </div>

          <div class="text-center px-2">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
            >
              <Icon
                name="mdi:briefcase-check-outline"
                class="text-white text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
            >
              Placement Cell
            </h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600">
              Direct placement support and referrals
            </p>
          </div>

          <div class="text-center px-2">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
            >
              <Icon name="mdi:handshake-outline" class="text-white text-3xl" />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
            >
              Internship Tie-ups
            </h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600">
              Guaranteed internship opportunities
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry-Ready Projects -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Industry-Ready Projects
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2"
          >
            Build real-world projects that showcase your skills to employers
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg"
          >
            <div
              class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4"
            >
              <Icon name="mdi:battery-outline" class="text-white text-2xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              EV Battery PLM BOM
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Design and manage electric vehicle battery bill of materials using
              PLM systems
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                >Windchill</span
              >
              <span
                class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                >CAD</span
              >
            </div>
          </div>

          <div
            class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg"
          >
            <div
              class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4"
            >
              <Icon
                name="mdi:alert-circle-outline"
                class="text-white text-2xl"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              AI-Driven Maintenance Alerts
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Build predictive maintenance systems using machine learning
              algorithms
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                >Python</span
              >
              <span
                class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium"
                >ML</span
              >
            </div>
          </div>

          <div
            class="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg"
          >
            <div
              class="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4"
            >
              <Icon name="mdi:graph-outline" class="text-white text-2xl" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              GraphML from CAD
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Convert CAD data into graph structures for advanced data analysis
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                >GraphML</span
              >
              <span
                class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                >Analytics</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Testimonials -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Student Success Stories
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2"
          >
            Hear from our successful graduates who landed amazing jobs
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div class="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mr-4"
              >
                <span class="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h4 class="text-sm sm:text-base font-bold text-gray-900">
                  Aisha Patel
                </h4>
                <p class="text-gray-600 text-xs sm:text-sm">
                  Mechanical Engineering Graduate
                </p>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-700 italic">
              "I got placed at a top PLM consulting firm within 90 days! The
              hands-on projects and career support made all the difference."
            </p>
          </div>

          <div class="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mr-4"
              >
                <span class="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h4 class="text-sm sm:text-base font-bold text-gray-900">
                  Rahul Kumar
                </h4>
                <p class="text-gray-600 text-xs sm:text-sm">
                  Computer Science Graduate
                </p>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-700 italic">
              "The AI and PLM integration course opened doors I never imagined.
              Now I'm working on cutting-edge projects in automotive!"
            </p>
          </div>

          <div class="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mr-4"
              >
                <span class="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h4 class="text-sm sm:text-base font-bold text-gray-900">
                  Sneha Sharma
                </h4>
                <p class="text-gray-600 text-xs sm:text-sm">
                  Electronics Engineering Graduate
                </p>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-700 italic">
              "From zero programming knowledge to building ML models - this
              program transformed my career trajectory completely!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-brand to-blue-600"
    >
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
        >
          Ready to Start Your Journey?
        </h2>
        <p
          class="text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-90 mb-6 sm:mb-8"
        >
          Join thousands of successful graduates who started their careers with
          us
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-white text-brand px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Enroll Now
          </button>
          <button
            class="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-brand transition-colors duration-300"
          >
            Download Brochure
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
    "Freshers Learning Path - Kickstart Your PLM & AI Career | Teknikoz E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Start your career in PLM and AI with our comprehensive fresher program. Zero to hero training, industry projects, and placement support.",
    },
  ],
});
</script>
