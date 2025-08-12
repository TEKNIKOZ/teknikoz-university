<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-brand to-blue-600 text-white py-8 sm:py-12 md:py-16 lg:py-32 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          :src="heroData.backgroundImage"
          :alt="heroData.backgroundAlt"
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
            class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-90 px-2"
          >
            {{ heroData.subtitle }}
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
            v-for="highlight in programHighlights"
            :key="highlight.id"
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-brand to-blue-600 flex items-center justify-center mb-3 sm:mb-4 shadow-lg ring-1 ring-white/50 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon :name="highlight.icon" class="text-white text-2xl sm:text-3xl" />
            </div>
            <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
              {{ highlight.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ highlight.description }}
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
          <div
            v-for="service in careerServices"
            :key="service.id"
            class="text-center group px-2 bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg ring-1 ring-white/50 transition-transform duration-300 group-hover:scale-105"
            >
              <Icon
                :name="service.icon"
                class="text-white text-2xl sm:text-3xl"
              />
            </div>
            <h3
              class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2"
            >
              {{ service.title }}
            </h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600">
              {{ service.description }}
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
            v-for="project in industryProjects"
            :key="project.id"
            class="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl ring-1 ring-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105',
                getColorClasses(project.color),
              ]"
            >
              <Icon :name="project.icon" class="text-white text-2xl sm:text-3xl" />
            </div>
            <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                :class="[
                  'px-2 py-1 rounded-full text-xs font-medium',
                  getTagClasses(tag.color),
                ]"
              >
                {{ tag.name }}
              </span>
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
          <div
            v-for="testimonial in studentTestimonials"
            :key="testimonial.id"
            class="bg-gray-50/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-brand rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
              >
                <span class="text-white font-bold text-base sm:text-lg">{{ testimonial.initial }}</span>
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="text-sm sm:text-base font-bold text-gray-900 truncate">
                  {{ testimonial.name }}
                </h4>
                <p class="text-gray-600 text-xs sm:text-sm truncate">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-700 italic">
              "{{ testimonial.testimonial }}"
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
          {{ ctaData.title }}
        </h2>
        <p
          class="text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-90 mb-6 sm:mb-8"
        >
          {{ ctaData.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            v-for="button in ctaData.buttons"
            :key="button.text"
            :class="[
              'px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 group',
              button.type === 'primary'
                ? 'bg-white text-brand hover:bg-gray-100 focus-visible:ring-brand'
                : 'border-2 border-white text-white hover:bg-white hover:text-brand focus-visible:ring-white',
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
    "Freshers Learning Path - Kickstart Your PLM & AI Career | Teknikoz E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Start your career in PLM and AI with our comprehensive fresher program. Zero to hero training, industry projects, and placement support.",
    },
  ],
});

// Page Data Constants
const heroData = {
  title: "Kickstart Your Career with PLM & AI Skills",
  subtitle: "From Classroom to Career: Your Fast-Track to PLM + AI Jobs",
  backgroundImage: "/assets/images/fresher-learning-path.jpeg",
  backgroundAlt: "Freshers Learning Path",
};

const programHighlights = [
  {
    id: "training-path",
    icon: "mdi:school-outline",
    title: "Zero to Hero Training Path",
    description: "PLM Foundation → AI Basics → Real Projects",
  },
  {
    id: "certifications",
    icon: "mdi:certificate-outline",
    title: "Certification Programs",
    description: "Creo, Windchill, Python, ML models",
  },
  {
    id: "interactive-learning",
    icon: "mdi:gamepad-variant-outline",
    title: "Interactive Learning",
    description: "Mini-hackathons, quizzes & assignments",
  },
  {
    id: "live-sessions",
    icon: "mdi:account-group-outline",
    title: "Live Sessions",
    description: "Live sessions with industry experts",
  },
];

const careerServices = [
  {
    id: "resume-building",
    icon: "mdi:file-document-edit-outline",
    title: "Resume Building",
    description: "Professional resume crafting and optimization",
  },
  {
    id: "mock-interviews",
    icon: "mdi:account-tie",
    title: "Mock Interviews",
    description: "Practice interviews with industry professionals",
  },
  {
    id: "placement-cell",
    icon: "mdi:briefcase-check-outline",
    title: "Placement Cell",
    description: "Direct placement support and referrals",
  },
  {
    id: "internship-tieups",
    icon: "mdi:handshake-outline",
    title: "Internship Tie-ups",
    description: "Guaranteed internship opportunities",
  },
];

const industryProjects = [
  {
    id: "ev-battery-plm",
    icon: "mdi:battery-outline",
    title: "EV Battery PLM BOM",
    description: "Design and manage electric vehicle battery bill of materials using PLM systems",
    color: "green",
    tags: [
      { name: "Windchill", color: "blue" },
      { name: "CAD", color: "green" },
    ],
  },
  {
    id: "ai-maintenance",
    icon: "mdi:alert-circle-outline",
    title: "AI-Driven Maintenance Alerts",
    description: "Build predictive maintenance systems using machine learning algorithms",
    color: "orange",
    tags: [
      { name: "Python", color: "purple" },
      { name: "ML", color: "red" },
    ],
  },
  {
    id: "graph-ml",
    icon: "mdi:graph-outline",
    title: "GraphML from CAD",
    description: "Convert CAD data into graph structures for advanced data analysis",
    color: "indigo",
    tags: [
      { name: "GraphML", color: "yellow" },
      { name: "Analytics", color: "blue" },
    ],
  },
];

const studentTestimonials = [
  {
    id: "aisha-patel",
    name: "Aisha Patel",
    role: "Mechanical Engineering Graduate",
    initial: "A",
    testimonial: "I got placed at a top PLM consulting firm within 90 days! The hands-on projects and career support made all the difference.",
  },
  {
    id: "rahul-kumar",
    name: "Rahul Kumar",
    role: "Computer Science Graduate",
    initial: "R",
    testimonial: "The AI and PLM integration course opened doors I never imagined. Now I'm working on cutting-edge projects in automotive!",
  },
  {
    id: "sneha-sharma",
    name: "Sneha Sharma",
    role: "Electronics Engineering Graduate",
    initial: "S",
    testimonial: "From zero programming knowledge to building ML models - this program transformed my career trajectory completely!",
  },
];

const ctaData = {
  title: "Ready to Start Your Journey?",
  subtitle: "Join thousands of successful graduates who started their careers with us",
  buttons: [
    {
      text: "Enroll Now",
      type: "primary",
      icon: "mdi:arrow-right",
    },
    {
      text: "Download Brochure",
      type: "secondary",
      icon: "mdi:arrow-right",
    },
  ],
};

// Helper function to get color classes
const getColorClasses = (color) => {
  const colorMap = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    indigo: "bg-indigo-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };
  return colorMap[color] || "bg-gray-500";
};

const getTagClasses = (color) => {
  const tagColorMap = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    orange: "bg-orange-100 text-orange-800",
  };
  return tagColorMap[color] || "bg-gray-100 text-gray-800";
};
</script>
