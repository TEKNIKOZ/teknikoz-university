<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-pretty px-2"
        >
          Master <span class="text-brand">Industry-Leading</span> Skills with
          <span class="text-gray-900">Hands-On Courses</span>
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
          Transform your career with our comprehensive, project-based learning
          approach
        </p>
      </div>

      <!-- Courses Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
      >
        <!-- PLM Windchill -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-purple-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-purple-400"
        >
          <div class="flex flex-col">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 rounded-full flex items-center justify-center mr-4"
              >
                <Icon name="mdi:cog" class="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                  PLM Windchill Mastery Track
                </h3>
              </div>
            </div>

            <p class="text-sm sm:text-base text-gray-700 font-medium mb-4">
              From Basics to Enterprise Architect
            </p>

            <p class="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              End-to-end mastery of Windchill PLM for Configuration Management,
              BOM, Change Processes, and ECAD/MCAD integration – aligned with
              global deployment scenarios.
            </p>

            <!-- Key Topics -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">
                Key Learning Areas:
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-purple-500 mr-2"
                  />
                  Windchill Architecture & Lifecycle Management
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-purple-500 mr-2"
                  />
                  EBOM/MBOM & Change Management (CR/CN)
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-purple-500 mr-2"
                  />
                  ECAD/MCAD Integration (Creo, SolidWorks, Altium)
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-purple-500 mr-2"
                  />
                  Info*Engine, REST APIs & Enterprise Integration
                </div>
              </div>
            </div>

            <button
              @click="handleNavigation('/courses#windchill')"
              class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base"
            >
              Explore Full Curriculum →
            </button>
          </div>
        </div>

        <!-- Siemens Teamcenter -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-green-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-green-400"
        >
          <div class="flex flex-col">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center mr-4"
              >
                <Icon name="mdi:cube" class="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                  Siemens Teamcenter Masterclass
                </h3>
              </div>
            </div>

            <p class="text-sm sm:text-base text-gray-700 font-medium mb-4">
              Deploying Digital Threads
            </p>

            <p class="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Train engineers, consultants, and architects on BOM, MRO, workflow
              automation, and deployment strategies across industries.
            </p>

            <!-- Key Topics -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">
                Key Learning Areas:
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-green-500 mr-2"
                  />
                  Teamcenter Architecture & Data Management
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-green-500 mr-2"
                  />
                  Advanced BOM & Variant Configuration
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-green-500 mr-2"
                  />
                  BMIDE Customization & Active Workspace
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-green-500 mr-2"
                  />
                  Multi-site Deployment & ERP Integration
                </div>
              </div>
            </div>

            <button
              @click="handleNavigation('/courses#teamcenter')"
              class="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base"
            >
              Explore Full Curriculum →
            </button>
          </div>
        </div>

        <!-- Cloud Solutions -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-orange-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-orange-400"
        >
          <div class="flex flex-col">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center mr-4"
              >
                <Icon name="mdi:cloud" class="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                  Cloud Solutions for PLM & Engineering
                </h3>
              </div>
            </div>

            <p class="text-sm sm:text-base text-gray-700 font-medium mb-4">
              AWS / Azure DevOps
            </p>

            <p class="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Cloud-first design for PLM hosting, DevOps pipelines, and
              infrastructure automation for Windchill/Teamcenter.
            </p>

            <!-- Key Topics -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">
                Key Learning Areas:
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-orange-500 mr-2"
                  />
                  AWS & Azure Infrastructure Essentials
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-orange-500 mr-2"
                  />
                  CI/CD Pipelines & Terraform Automation
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-orange-500 mr-2"
                  />
                  High Availability & Disaster Recovery
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-orange-500 mr-2"
                  />
                  Hybrid Cloud PLM Migration Strategies
                </div>
              </div>
            </div>

            <button
              @click="handleNavigation('/courses#cloud')"
              class="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 text-sm sm:text-base"
            >
              Explore Full Curriculum →
            </button>
          </div>
        </div>

        <!-- AI/ML -->
        <div
          class="bg-white rounded-xl sm:rounded-2xl border-2 border-blue-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-400"
        >
          <div class="flex flex-col">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center mr-4"
              >
                <Icon name="mdi:robot" class="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">
                  AI/ML for Engineers
                </h3>
              </div>
            </div>

            <p class="text-sm sm:text-base text-gray-700 font-medium mb-4">
              Applied Intelligence for Industry 4.0
            </p>

            <p class="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Upskill engineering & PLM professionals with practical AI/ML to
              automate, optimize, and innovate engineering workflows.
            </p>

            <!-- Key Topics -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">
                Key Learning Areas:
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-blue-500 mr-2"
                  />
                  Python Essentials & ML Fundamentals
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-blue-500 mr-2"
                  />
                  ChatGPT & LangChain Integration
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-blue-500 mr-2"
                  />
                  Predictive Maintenance & Defect Detection
                </div>
                <div class="flex items-center text-xs sm:text-sm text-gray-600">
                  <Icon
                    name="mdi:check-circle"
                    class="w-4 h-4 text-blue-500 mr-2"
                  />
                  AI-Powered PLM Decision Dashboards
                </div>
              </div>
            </div>

            <button
              @click="handleNavigation('/courses#aiml')"
              class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
            >
              Explore Full Curriculum →
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="bg-brand rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white"
      >
        <div class="flex flex-col sm:flex-row items-center justify-center">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4"
          >
            <Icon
              name="mdi:certificate"
              class="text-gray-900 text-lg sm:text-xl"
            />
          </div>
          <h3 class="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            100% Project-Based Learning with Certification
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigation = (path) => {
  router.push(path);
};
</script>
