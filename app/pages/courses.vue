<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
          Transform Your Career
        </h1>
        <p
          class="text-base sm:text-lg text-center text-white/90 max-w-3xl mx-auto"
        >
          Industry-aligned courses designed to make you job-ready from day one
        </p>
      </div>
    </section>

    <!-- Course Navigation -->
    <section class="py-8 border-b bg-white">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300',
              activeCategory === category.id
                ? getActiveCategoryStyle(category.id)
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
          >
            <div
              :class="[
                'w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mr-2',
                getCategoryBgColor(category.id),
              ]"
            >
              <Icon :name="category.icon" class="text-white text-xs" />
            </div>
            <span
              :class="category.id === 'PLM Windchill' ? 'hidden sm:inline' : ''"
            >
              {{ category.id === "PLM Windchill" ? "PLM " : "" }} </span
            >{{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- PLM Windchill Course -->
    <section
      v-if="activeCategory === 'PLM Windchill'"
      id="windchill"
      class="py-12 sm:py-16"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="mb-12">
          <div class="flex items-center mb-4">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4"
            >
              <Icon name="mdi:cog" class="text-white text-lg sm:text-2xl" />
            </div>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              PLM Windchill Mastery Track
            </h2>
          </div>
          <p class="text-base sm:text-lg text-gray-700 font-medium mb-2">
            From Basics to Enterprise Architect
          </p>
          <p class="text-sm sm:text-base text-gray-600 max-w-4xl">
            🎯 <strong>Objective:</strong> End-to-end mastery of Windchill PLM
            for Configuration Management, BOM, Change Processes, and ECAD/MCAD
            integration – aligned with global deployment scenarios.
          </p>
        </div>

        <!-- Course Levels -->
        <div class="space-y-6">
          <!-- Level 1 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-purple-700 mb-4">
              🧩 Level 1: Foundations
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Windchill Architecture & Modules Overview (PDMLink, MPMLink,
                  ProjectLink)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Introduction to Objects: WTPart, Document, CAD Document</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Lifecycle & Versioning Concepts</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Access Control & Team Roles</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 2 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-purple-700 mb-4">
              ⚙️ Level 2: Intermediate Concepts
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Configuration Management (Lifecycles, Soft Types, Object
                  Initialization Rules)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >BOM Management: EBOM, MBOM, Occurrence Usage, Views</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Change Management (CR/CN/Promotion Requests)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Workflow Basics: Process Template Creation</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 3 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-purple-700 mb-4">
              🚀 Level 3: Advanced Practitioner Topics
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >ECAD/MCAD Integration (Creo, SolidWorks, Altium with
                  XPLM)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >MPMLink for Manufacturing Process Planning</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Document & CAD Structure Synchronization</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Part Classification & Variant Management</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 4 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-purple-700 mb-4">
              🧠 Level 4: Customization & Extension
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Info*Engine & Windchill REST APIs</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Business Rules: OIR, ACL, Data Validation, Listener
                  Events</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Report Builder & Custom UI Widgets (Action/Commands)</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 5 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-purple-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-purple-700 mb-4">
              🛠 Level 5: Enterprise Implementation & Strategy
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Data Migration & Legacy Import (Excel Loader, Windchill
                  Loader)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >ERP Integration (SAP, Oracle using Windchill ESI)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >PLM-ALM Integration Strategy</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >CM2 & Regulatory Compliance (Medical/Automotive Use
                  Case)</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Siemens Teamcenter Course -->
    <section
      v-if="activeCategory === 'Siemens Teamcenter'"
      id="teamcenter"
      class="py-12 sm:py-16 bg-gray-100"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="mb-12">
          <div class="flex items-center mb-4">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4"
            >
              <Icon name="mdi:cube" class="text-white text-lg sm:text-2xl" />
            </div>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Siemens Teamcenter Masterclass
            </h2>
          </div>
          <p class="text-base sm:text-lg text-gray-700 font-medium mb-2">
            Deploying Digital Threads
          </p>
          <p class="text-sm sm:text-base text-gray-600 max-w-4xl">
            🎯 <strong>Objective:</strong> Train engineers, consultants, and
            architects on BOM, MRO, workflow automation, and deployment
            strategies across industries.
          </p>
        </div>

        <!-- Course Levels -->
        <div class="space-y-6">
          <!-- Level 1 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-green-700 mb-4">
              🧩 Level 1: Foundations
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Teamcenter Basics & Architecture</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Introduction to Item, Dataset, Revision & Workspace</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Lifecycle Management & Release Flow</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Basic Searches, Revisions, and Change Objects</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 2 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-green-700 mb-4">
              ⚙️ Level 2: Intermediate BOM & Workflow Configuration
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >BOM View, Contexts, Occurrences, Alternate BOM</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Classification, Properties, and Attribute Inheritance</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Workflow Designer: Handlers, Rules, Review/Approval
                  Flow</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Access Management & Role Permissions</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 3 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-green-700 mb-4">
              🚀 Level 3: Advanced Use Cases
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Variant Configuration using Product Configurator</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Change Management with Impact Analysis</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >MRO BOMs for Aerospace & Defense</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Visualization (JT2Go, Teamcenter Visualization)</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 4 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-green-700 mb-4">
              🧠 Level 4: Customization & BMIDE
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >BMIDE Deep Dive: Data Model, Extensions, LOVs,
                  Stylesheets</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Custom Business Rules and Handlers</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Teamcenter Reporting & Analytics Configuration</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Active Workspace Custom UI & Integration</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 5 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-green-700 mb-4">
              🛠 Level 5: Implementation Strategy & Scaling
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Multi-site Teamcenter Deployment</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Teamcenter-ERP Integration (SAP, Infor)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Teamcenter Data Migration & Cleanup</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Digital Thread Strategy for Connected Engineering</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Cloud Solutions Course -->
    <section
      v-if="activeCategory === 'Cloud Solutions'"
      id="cloud"
      class="py-12 sm:py-16"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="mb-12">
          <div class="flex items-center mb-4">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4"
            >
              <Icon name="mdi:cloud" class="text-white text-lg sm:text-2xl" />
            </div>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Cloud Solutions for PLM & Engineering
            </h2>
          </div>
          <p class="text-base sm:text-lg text-gray-700 font-medium mb-2">
            AWS / Azure DevOps
          </p>
          <p class="text-sm sm:text-base text-gray-600 max-w-4xl">
            🎯 <strong>Objective:</strong> Cloud-first design for PLM hosting,
            DevOps pipelines, and infrastructure automation for
            Windchill/Teamcenter.
          </p>
        </div>

        <!-- Course Levels -->
        <div class="space-y-6">
          <!-- Level 1 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-orange-700 mb-4">
              🧩 Level 1: Cloud Infrastructure Basics
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >AWS & Azure Overview for Engineering Systems</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Compute, Storage, Networking Essentials</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >IAM & Security Models</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Basic CLI & Console Management</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 2 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-orange-700 mb-4">
              ⚙️ Level 2: Intermediate Cloud DevOps
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >IaaS vs PaaS vs SaaS: Which PLM Model?</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >CI/CD for PLM Deployments</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Dockerization of PLM Microservices</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Terraform Scripts for Infrastructure as Code</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 3 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-orange-700 mb-4">
              🚀 Level 3: Advanced Cloud Integration
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >High Availability for PLM Systems (Load Balancing, Auto
                  Scaling)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Backup, Disaster Recovery & DR Drills</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Azure DevOps Pipelines for Teamcenter Custom Code</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >AWS CodePipeline for Windchill Deployments</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 4 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-orange-700 mb-4">
              🧠 Level 4: Custom Cloud Architectures
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Hybrid Cloud (On-prem + AWS/Azure) PLM Models</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Securing Windchill or Teamcenter over VPN/VPC</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Monitoring using Prometheus, Grafana</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 5 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-orange-700 mb-4">
              🛠 Level 5: Real-World Implementation Scenarios
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >PLM Cloud Migration Strategy (Checklist + Tools)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >ROI of Cloud vs On-Prem PLM</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Industry Templates: Automotive, Aero, Medical Devices</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >DevOps SRE Best Practices in PLM Support</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- AI/ML Course -->
    <section
      v-if="activeCategory === 'AI/ML'"
      id="aiml"
      class="py-12 sm:py-16 bg-gray-100"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="mb-12">
          <div class="flex items-center mb-4">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4"
            >
              <Icon name="mdi:robot" class="text-white text-lg sm:text-2xl" />
            </div>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              AI/ML for Engineers
            </h2>
          </div>
          <p class="text-base sm:text-lg text-gray-700 font-medium mb-2">
            Applied Intelligence for Industry 4.0
          </p>
          <p class="text-sm sm:text-base text-gray-600 max-w-4xl">
            🎯 <strong>Objective:</strong> Upskill engineering & PLM
            professionals with practical AI/ML to automate, optimize, and
            innovate engineering workflows.
          </p>
        </div>

        <!-- Course Levels -->
        <div class="space-y-6">
          <!-- Level 1 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-blue-700 mb-4">
              🧩 Level 1: AI/ML Basics for Engineers
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Python Essentials for AI/ML</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Numpy, Pandas, Scikit-learn Basics</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Supervised vs Unsupervised Models</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Data Preparation & Visualization</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 2 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-blue-700 mb-4">
              ⚙️ Level 2: NLP & ChatGPT Integration
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Basics of LLMs and ChatGPT APIs</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Embeddings for Engineering Document Search</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Building Technical Support Chatbots using LangChain</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Prompt Engineering for Engineering Workflows</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 3 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-blue-700 mb-4">
              🚀 Level 3: Applied Models for Industry 4.0
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Predictive Maintenance (Sensor Time-Series Models)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Defect Detection from Image Datasets</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Text Classification using BERT (Change Requests, DMRs)</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >AI for BOM/Doc Automation</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 4 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-blue-700 mb-4">
              🧠 Level 4: Advanced Architectures
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Model Deployment using FastAPI & Streamlit</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Vector Databases for PLM Document Search</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Custom GPTs for Engineering Helpdesks</span
                >
              </li>
            </ul>
          </div>

          <!-- Level 5 -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500"
          >
            <h3 class="text-lg sm:text-xl font-bold text-blue-700 mb-4">
              🛠 Level 5: Enterprise Strategy & Innovation
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Generative AI in PLM & CAD</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >AI Governance & Explainability</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >Industry Use Cases: EV, Aerospace, Medical, Machinery</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  name="mdi:chevron-right"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                />
                <span class="text-sm sm:text-base text-gray-700"
                  >AI-Powered PLM Decision Cockpit Dashboards</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 bg-brand text-white">
      <div class="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Transform Your Career?
        </h2>
        <p class="text-base sm:text-lg mb-8 text-white/90">
          Join thousands of professionals who have accelerated their careers
          with TEKNIKOZ
        </p>
        <button
          @click="navigateTo('/contact')"
          class="bg-white text-brand px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Enroll Now →
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

useHead({
  title: "Courses - TEKNIKOZ E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Explore comprehensive courses in PLM Windchill, Siemens Teamcenter, Cloud Solutions, and AI/ML at TEKNIKOZ E-Learning",
    },
  ],
});

// Handle URL parameters for direct navigation
const route = useRoute();
const activeCategory = ref(route.query.category || "PLM Windchill");

// Watch for route changes to update active category
watch(
  () => route.query.category,
  (newCategory) => {
    if (newCategory) {
      activeCategory.value = newCategory;
    }
  }
);

const categories = [
  { id: "PLM Windchill", name: "Windchill", icon: "mdi:cog" },
  { id: "Siemens Teamcenter", name: "Teamcenter", icon: "mdi:cube" },
  { id: "Cloud Solutions", name: "Solutions", icon: "mdi:cloud" },
  { id: "AI/ML", name: "AI/ML", icon: "mdi:robot" },
];

// Helper functions for styling
const getActiveCategoryStyle = (categoryId) => {
  const styles = {
    "PLM Windchill": "bg-purple-100 text-purple-700",
    "Siemens Teamcenter": "bg-green-100 text-green-700",
    "Cloud Solutions": "bg-orange-100 text-orange-700",
    "AI/ML": "bg-blue-100 text-blue-700",
  };
  return styles[categoryId] || "bg-gray-100 text-gray-700";
};

const getCategoryBgColor = (categoryId) => {
  const colors = {
    "PLM Windchill": "bg-purple-500",
    "Siemens Teamcenter": "bg-green-500",
    "Cloud Solutions": "bg-orange-500",
    "AI/ML": "bg-blue-500",
  };
  return colors[categoryId] || "bg-gray-500";
};
</script>
