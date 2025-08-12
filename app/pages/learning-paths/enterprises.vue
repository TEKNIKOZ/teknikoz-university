<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-8 sm:py-12 md:py-16 lg:py-32 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/enterp-learning-path.jpeg"
          alt="Enterprises Learning Path"
          class="w-full h-full object-cover object-top opacity-20"
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

    <!-- Key Offerings -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Corporate Training Solutions
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive training programs tailored to your organization's
            needs
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div
            v-for="offering in keyOfferings"
            :key="offering.id"
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105',
                getColorClasses(offering.color),
              ]"
            >
              <Icon
                :name="offering.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
            >
              {{ offering.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              {{ offering.description }}
            </p>
            <ul class="space-y-2 text-gray-600 text-sm sm:text-base">
              <li
                v-for="feature in offering.features"
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

    <!-- Client Success Examples -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Client Success Stories
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Real results from organizations that invested in workforce
            transformation
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div
            v-for="story in clientSuccessStories"
            :key="story.id"
            :class="[
              'bg-gradient-to-br rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1',
              story.gradientFrom,
              story.gradientTo,
              story.borderColor,
            ]"
          >
            <div class="flex items-center mb-4">
              <div
                :class="[
                  'w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg ring-1 ring-black/5 flex-shrink-0',
                  getIconColorClasses(story.color),
                ]"
              >
                <Icon
                  :name="story.icon"
                  class="text-white text-lg sm:text-xl"
                />
              </div>
              <div class="min-w-0 flex-1">
                <h3
                  class="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate"
                >
                  {{ story.title }}
                </h3>
                <p class="text-gray-600 text-xs sm:text-sm truncate">
                  {{ story.subtitle }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
              <div
                v-for="metric in story.metrics"
                :key="metric.label"
                class="text-center"
              >
                <div :class="['text-lg sm:text-2xl font-bold', metric.color]">
                  {{ metric.value }}
                </div>
                <div class="text-xs text-gray-600">{{ metric.label }}</div>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-700 italic">
              "{{ story.testimonial }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools & Integration Support -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Enterprise Learning Platform
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Advanced tools and integrations for seamless corporate training
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            v-for="feature in platformFeatures"
            :key="feature.id"
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105',
                getColorClasses(feature.color),
              ]"
            >
              <Icon
                :name="feature.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
            >
              {{ feature.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              {{ feature.description }}
            </p>
            <ul class="text-xs sm:text-sm text-gray-500 space-y-1">
              <li v-for="item in feature.features" :key="item">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why TEKNIKOZ -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Why Choose TEKNIKOZ E-Learning?
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by global enterprises for workforce transformation
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            v-for="reason in whyChooseUs"
            :key="reason.id"
            class="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-14 h-14 sm:w-16 sm:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon
                :name="reason.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2"
            >
              {{ reason.title }}
            </h3>
            <p class="text-gray-600 text-xs sm:text-sm max-w-xs mx-auto">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Packages -->
    <section class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Corporate Packages & Discounts
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Flexible pricing options designed for organizations of all sizes
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div
            v-for="pkg in corporatePackages"
            :key="pkg.id"
            :class="[
              'bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg relative',
              pkg.popular ? 'border-2 border-brand' : '',
            ]"
          >
            <div
              v-if="pkg.popular"
              class="absolute -top-3 left-1/2 transform -translate-x-1/2"
            >
              <span
                class="bg-brand text-white px-4 py-1 rounded-full text-xs font-medium"
              >
                POPULAR
              </span>
            </div>
            <div class="text-center mb-6">
              <h3
                class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
              >
                {{ pkg.title }}
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm">
                {{ pkg.subtitle }}
              </p>
              <div class="mt-4">
                <span class="text-2xl sm:text-3xl font-bold text-brand">{{
                  pkg.discount
                }}</span>
                <p class="text-gray-500 text-sm">{{ pkg.teamSize }}</p>
              </div>
            </div>
            <ul class="space-y-2 text-gray-600 text-xs sm:text-sm">
              <li
                v-for="feature in pkg.features"
                :key="feature"
                class="flex items-center"
              >
                <Icon
                  name="mdi:check"
                  class="text-green-500 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4"
                />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-indigo-900 to-purple-900"
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
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            v-for="button in ctaData.buttons"
            :key="button.text"
            :class="[
              'px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-full font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 group',
              button.type === 'primary'
                ? 'bg-white text-indigo-900 hover:bg-gray-100 focus-visible:ring-white'
                : 'border-2 border-white text-white hover:bg-white hover:text-indigo-900 focus-visible:ring-white',
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
    "Enterprise Training Solutions - Workforce Transformation | Teknikoz E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Enterprise PLM and AI training solutions for Industry 4.0. Custom corporate programs, team training, and workforce transformation services.",
    },
  ],
});

// Page Data Constants
const heroData = {
  title: "Empower Your Workforce for Industry 4.0",
  subtitle: "Digital Transformation Starts with Skilled Teams",
  backgroundImage: "/assets/images/enterp-learning-path.jpeg",
  backgroundAlt: "Enterprise Learning Path",
};

const keyOfferings = [
  {
    id: "team-training",
    icon: "mdi:account-group",
    title: "Team Training Programs",
    description: "Scalable training solutions for teams of all sizes",
    color: "blue",
    features: [
      "Virtual and on-site delivery options",
      "Flexible scheduling around business operations",
      "Multi-batch training for large organizations",
      "Hands-on labs with real enterprise systems",
    ],
  },
  {
    id: "custom-curriculum",
    icon: "mdi:book-open-variant",
    title: "Custom Curriculum",
    description: "Tailored content aligned with your business objectives",
    color: "purple",
    features: [
      "PLM, AI, IoT, MES integration modules",
      "Industry-specific use cases and scenarios",
      "Company-specific tool configurations",
      "Role-based learning paths",
    ],
  },
  {
    id: "leadership-enablement",
    icon: "mdi:trending-up",
    title: "Leadership & Change Enablement",
    description: "Prepare leaders to drive digital transformation",
    color: "green",
    features: [
      "Change management methodologies",
      "Digital transformation strategy",
      "Team leadership in tech adoption",
      "ROI measurement and reporting",
    ],
  },
  {
    id: "enterprise-onboarding",
    icon: "mdi:rocket-launch",
    title: "Enterprise Onboarding Support",
    description: "Comprehensive support for technology adoption",
    color: "orange",
    features: [
      "System setup and configuration guidance",
      "Data migration and integration support",
      "Best practices implementation",
      "Go-live support and troubleshooting",
    ],
  },
];

const clientSuccessStories = [
  {
    id: "global-manufacturing",
    icon: "mdi:factory",
    title: "Global Manufacturing Corp",
    subtitle: "500+ Engineers Trained",
    color: "blue",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-50",
    borderColor: "border-indigo-100",
    metrics: [
      { value: "75%", label: "Faster Design Cycles", color: "text-blue-600" },
      { value: "60%", label: "Reduced Errors", color: "text-green-600" },
      { value: "90%", label: "Team Satisfaction", color: "text-purple-600" },
    ],
    testimonial:
      "The comprehensive PLM training transformed our engineering workflows. We saw immediate productivity gains and our teams are now confident with advanced features.",
  },
  {
    id: "autotech-solutions",
    icon: "mdi:car",
    title: "AutoTech Solutions",
    subtitle: "200+ Professionals Upskilled",
    color: "green",
    gradientFrom: "from-green-50",
    gradientTo: "to-emerald-50",
    borderColor: "border-emerald-100",
    metrics: [
      {
        value: "3 Months",
        label: "Time to Productivity",
        color: "text-blue-600",
      },
      { value: "40%", label: "Cost Reduction", color: "text-green-600" },
      { value: "95%", label: "Completion Rate", color: "text-purple-600" },
    ],
    testimonial:
      "The AI/ML integration training helped us implement predictive maintenance across our manufacturing line, resulting in significant cost savings.",
  },
];

const platformFeatures = [
  {
    id: "lms-integration",
    icon: "mdi:school-outline",
    title: "LMS Integration",
    description:
      "Seamless integration with your existing learning management systems",
    color: "indigo",
    features: [
      "SCORM 1.2/2004 compliance",
      "xAPI (Tin Can API) support",
      "Single sign-on (SSO) integration",
      "Custom branding options",
    ],
  },
  {
    id: "progress-dashboards",
    icon: "mdi:chart-line",
    title: "Progress Dashboards",
    description: "Real-time visibility into training progress and outcomes",
    color: "blue",
    features: [
      "Weekly progress reports",
      "Individual and team analytics",
      "Completion tracking",
      "Performance metrics",
    ],
  },
  {
    id: "assessment-tools",
    icon: "mdi:clipboard-check-outline",
    title: "Assessment Tools",
    description: "Comprehensive evaluation and certification system",
    color: "green",
    features: [
      "Pre/post assessments",
      "Skill competency mapping",
      "Automated certification",
      "Custom evaluation criteria",
    ],
  },
];

const whyChooseUs = [
  {
    id: "global-trainer-pool",
    icon: "mdi:earth",
    title: "Global Trainer Pool",
    description:
      "Certified experts from leading engineering companies worldwide",
  },
  {
    id: "compliance-aligned",
    icon: "mdi:shield-check",
    title: "Compliance Aligned",
    description: "MedDev, Automotive, Aerospace industry standards",
  },
  {
    id: "24-7-support",
    icon: "mdi:clock-outline",
    title: "24/7 Support",
    description:
      "Dedicated success manager and round-the-clock technical support",
  },
  {
    id: "proven-results",
    icon: "mdi:trophy-outline",
    title: "Proven Results",
    description: "500+ successful enterprise transformations",
  },
];

const corporatePackages = [
  {
    id: "starter-package",
    title: "Starter Package",
    subtitle: "Perfect for small teams",
    discount: "15% OFF",
    teamSize: "Team of 10+ members",
    popular: false,
    features: [
      "Core PLM/AI curriculum",
      "Virtual training delivery",
      "Basic progress tracking",
      "Email support",
    ],
  },
  {
    id: "growth-package",
    title: "Growth Package",
    subtitle: "Ideal for medium enterprises",
    discount: "25% OFF",
    teamSize: "Team of 50+ members",
    popular: true,
    features: [
      "Custom curriculum design",
      "Hybrid delivery options",
      "Advanced analytics dashboard",
      "Dedicated success manager",
    ],
  },
  {
    id: "enterprise-package",
    title: "Enterprise Package",
    subtitle: "For large organizations",
    discount: "Custom SLA",
    teamSize: "Tailored contracts",
    popular: false,
    features: [
      "Fully customized programs",
      "On-site training options",
      "White-label solutions",
      "24/7 priority support",
    ],
  },
];

const ctaData = {
  title: "Transform Your Workforce Today",
  subtitle:
    "Join 500+ enterprises that have successfully transformed their teams with our training programs",
  buttons: [
    {
      text: "Request Corporate Demo",
      type: "primary",
      icon: "mdi:arrow-right",
    },
    {
      text: "Book a Strategy Call",
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
    orange: "bg-orange-600",
    indigo: "bg-indigo-600",
  };
  return colorMap[color] || "bg-gray-600";
};

const getIconColorClasses = (color) => {
  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
  };
  return colorMap[color] || "bg-gray-600";
};
</script>
