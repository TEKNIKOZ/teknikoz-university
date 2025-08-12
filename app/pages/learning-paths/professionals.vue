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
            {{ heroData.title }}
          </h1>
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-90"
          >
            {{ heroData.subtitle }}
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
            v-for="track in advancedLearningTracks"
            :key="track.id"
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105',
                getColorClasses(track.color),
              ]"
            >
              <Icon
                :name="track.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
            >
              {{ track.title }}
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-600">
              <li
                v-for="feature in track.features"
                :key="feature"
                class="flex items-center"
              >
                <Icon
                  name="mdi:check-circle"
                  class="text-green-500 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                />
                {{ feature }}
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
            v-for="leadership in leadershipPreparation"
            :key="leadership.id"
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 sm:w-16 sm:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon
                :name="leadership.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
            >
              {{ leadership.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ leadership.description }}
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
            v-for="connection in networkingConnections"
            :key="connection.id"
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105',
                getColorClasses(connection.color),
              ]"
            >
              <Icon
                :name="connection.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
            >
              {{ connection.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              {{ connection.description }}
            </p>
            <ul class="text-xs sm:text-sm text-gray-500 space-y-1">
              <li v-for="feature in connection.features" :key="feature">
                • {{ feature }}
              </li>
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
            v-for="tool in careerAcceleratorTools"
            :key="tool.id"
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105',
                getColorClasses(tool.color),
              ]"
            >
              <Icon :name="tool.icon" class="text-white text-2xl sm:text-3xl" />
            </div>
            <h3
              class="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2"
            >
              {{ tool.title }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-600">
              {{ tool.description }}
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
                class="w-16 h-16 sm:w-20 sm:h-20 bg-brand rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-xl sm:text-2xl">{{
                  successStory.initial
                }}</span>
              </div>
            </div>
            <div class="text-center md:text-left flex-1">
              <h3
                class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2"
              >
                {{ successStory.name }}
              </h3>
              <p class="text-brand font-semibold mb-2 text-sm sm:text-base">
                {{ successStory.role }}
              </p>
              <p
                class="text-gray-600 text-sm sm:text-base md:text-lg italic leading-relaxed mb-4"
              >
                "{{ successStory.testimonial }}"
              </p>
              <div class="flex flex-wrap gap-2 justify-center md:justify-start">
                <span
                  v-for="badge in successStory.badges"
                  :key="badge.name"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium',
                    getBadgeClasses(badge.color),
                  ]"
                >
                  {{ badge.name }}
                </span>
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
          {{ ctaData.title }}
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-8"
        >
          {{ ctaData.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center p-4">
          <button
            v-for="button in ctaData.buttons"
            :key="button.text"
            :class="[
              'px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 group',
              button.type === 'primary'
                ? 'bg-brand text-white hover:bg-brand/80 focus-visible:ring-brand'
                : 'border-2 border-white text-white hover:bg-white hover:text-gray-900 focus-visible:ring-white',
            ]"
          >
            <span>{{ button.text }}</span>
            <Icon
              :name="button.icon"
              class="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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

// Page Data Constants
const heroData = {
  title: "Advance Your Career with Future-Ready Skills",
  subtitle: "Lead the Digital Transformation Wave in Engineering",
  backgroundImage: "/assets/images/pro-learning-path.jpeg",
  backgroundAlt: "Professionals Learning Path",
};

const advancedLearningTracks = [
  {
    id: "advanced-plm",
    icon: "mdi:cog-outline",
    title: "Advanced PLM Modules",
    color: "blue",
    features: [
      "MPMLink Configuration",
      "Change Management",
      "ECAD/MCAD Integration",
      "Workflow Automation",
    ],
  },
  {
    id: "ai-ml-engineers",
    icon: "mdi:brain",
    title: "AI/ML for Engineers",
    color: "purple",
    features: [
      "Predictive Analytics",
      "BERT & NLP Models",
      "RAG Implementation",
      "ML Pipeline Design",
    ],
  },
  {
    id: "cross-discipline",
    icon: "mdi:network-outline",
    title: "Cross-Discipline Integration",
    color: "green",
    features: [
      "IoT Integration",
      "MES Connectivity",
      "ERP Synchronization",
      "Digital Twin Implementation",
    ],
  },
];

const leadershipPreparation = [
  {
    id: "agile-leadership",
    icon: "mdi:account-group",
    title: "Agile Leadership",
    description:
      "Master agile methodologies and lead cross-functional teams effectively",
  },
  {
    id: "change-management",
    icon: "mdi:chart-line",
    title: "Change Management",
    description:
      "Navigate and lead organizational change in digital transformation projects",
  },
  {
    id: "strategic-problem-solving",
    icon: "mdi:puzzle-outline",
    title: "Strategic Problem Solving",
    description:
      "Case-based learning for complex engineering and business challenges",
  },
];

const networkingConnections = [
  {
    id: "industry-masterclasses",
    icon: "mdi:school",
    title: "Industry Masterclasses",
    description:
      "Monthly sessions with C-level executives and industry thought leaders",
    color: "orange",
    features: [
      "Digital transformation case studies",
      "Future of engineering technology",
      "Leadership insights",
    ],
  },
  {
    id: "community-groups",
    icon: "mdi:account-multiple",
    title: "Community Groups",
    description: "Join exclusive professional communities and alumni networks",
    color: "indigo",
    features: [
      "PLM professionals network",
      "AI/ML engineering group",
      "Regional chapter meetups",
    ],
  },
  {
    id: "mentorship-circles",
    icon: "mdi:handshake",
    title: "Circles",
    description: "Connect with senior industry professionals for guidance",
    color: "green",
    features: [
      "One-on-one guidance sessions",
      "Career strategy planning",
      "Industry insights sharing",
    ],
  },
];

const careerAcceleratorTools = [
  {
    id: "personal-dashboard",
    icon: "mdi:chart-box-outline",
    title: "Personal Dashboard",
    description: "Track your learning progress and achievements",
    color: "blue",
  },
  {
    id: "portfolio-builder",
    icon: "mdi:briefcase-outline",
    title: "Portfolio Builder",
    description: "Showcase your projects and certifications",
    color: "purple",
  },
  {
    id: "digital-badges",
    icon: "mdi:medal-outline",
    title: "Digital Badges",
    description: "Earn and display verified skill badges",
    color: "green",
  },
  {
    id: "linkedin-integration",
    icon: "mdi:linkedin",
    title: "LinkedIn Integration",
    description: "Automatically update your professional profile",
    color: "indigo",
  },
];

const successStory = {
  id: "manoj-singh",
  name: "Manoj Singh",
  role: "Senior Mechanical Engineer → PLM Solution Architect",
  initial: "M",
  testimonial:
    "After completing this program, I moved into a PLM Solution Architect role at a Fortune 500 company. The advanced modules and leadership training prepared me perfectly for this transition. My salary increased by 60%!",
  badges: [
    { name: "Windchill Expert", color: "blue" },
    { name: "AI/ML Certified", color: "green" },
    { name: "Team Lead", color: "purple" },
  ],
};

const ctaData = {
  title: "Ready to Advance Your Career?",
  subtitle: "Join the next generation of engineering leaders",
  buttons: [
    {
      text: "View Track Details",
      type: "primary",
      icon: "mdi:arrow-right",
    },
    {
      text: "Download Sample Certificate",
      type: "secondary",
      icon: "mdi:arrow-right",
    },
  ],
};

// Helper functions for styling
const getColorClasses = (color) => {
  const colorMap = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    green: "bg-green-600",
    orange: "bg-orange-500",
    indigo: "bg-indigo-500",
  };
  return colorMap[color] || "bg-gray-600";
};

const getBadgeClasses = (color) => {
  const badgeColorMap = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
  };
  return badgeColorMap[color] || "bg-gray-100 text-gray-800";
};
</script>
