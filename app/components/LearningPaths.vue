<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why <span class="text-brand">TEKNIKOZ</span> University Stands Out
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          We don't just teach concepts - we prepare you for real-world success
        </p>
      </div>

      <!-- Learning Paths Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Freshers -->
        <div class="bg-white rounded-2xl border-2 border-blue-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mr-4">
              <Icon name="mdi:school" class="text-white text-2xl" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-brand mb-1">Freshers</h3>
              <p class="text-gray-600 text-sm">
                Kickstart your career with in-demand PLM and AI skills
              </p>
            </div>
          </div>
          
          <!-- Features list -->
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Zero to hero training
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Industry-ready projects
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Career guidance
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Placement support
            </li>
          </ul>

          <button class="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full">
            Learn More
          </button>
        </div>

        <!-- Professionals -->
        <div class="bg-white rounded-2xl border-2 border-blue-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mr-4">
              <Icon name="mdi:trending-up" class="text-white text-2xl" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-brand mb-1">Professionals</h3>
              <p class="text-gray-600 text-sm">
                Upskill to lead digital transformation in engineering
              </p>
            </div>
          </div>
          
          <!-- Features list -->
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Advanced skill development
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Leadership preparation
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Industry connections
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Career advancement
            </li>
          </ul>

          <button class="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full">
            Learn More
          </button>
        </div>

        <!-- Enterprises -->
        <div class="bg-white rounded-2xl border-2 border-blue-200 p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mr-4">
              <Icon name="mdi:office-building" class="text-white text-2xl" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-brand mb-1">Enterprises</h3>
              <p class="text-gray-600 text-sm">
                Train your team for Industry 4.0 success
              </p>
            </div>
          </div>
          
          <!-- Features list -->
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Team training programs
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Customized curriculum
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              On-site training
            </li>
            <li class="flex items-center text-gray-700">
              <span class="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Corporate discounts
            </li>
          </ul>

          <button class="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full">
            Learn More
          </button>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button class="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300">
          Find Your Path
        </button>
      </div>
    </div>
  </section>
</template>