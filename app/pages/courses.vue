<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          Transform Your Career
        </h1>
        <p
          class="text-lg sm:text-xl text-center text-white/90 max-w-3xl mx-auto"
        >
          Industry-aligned courses designed to make you job-ready from day one
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
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
                ? getActiveCategoryStyle(category.id) + ' shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
          >
            <div
              :class="[
                'w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0',
                getCategoryBgColor(category.id),
              ]"
            >
              <Icon
                :name="category.icon"
                class="text-white text-xs sm:text-sm"
              />
            </div>
            <span class="truncate">{{ category.name }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Course Content -->
    <section class="py-12 sm:py-16">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div
          v-for="(courseData, categoryKey) in coursesData"
          :key="categoryKey"
          v-show="activeCategory === categoryKey"
          :class="[
            courseData.backgroundClass || '',
            courseData.backgroundClass ? 'rounded-2xl p-6 sm:p-8' : '',
          ]"
        >
          <div class="mb-12">
            <div class="flex items-center mb-4">
              <div
                :class="[
                  'w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0',
                  getColorClasses(courseData.color).bg,
                ]"
              >
                <Icon
                  :name="courseData.icon"
                  class="text-white text-lg sm:text-2xl"
                />
              </div>
              <h2
                class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
              >
                {{ courseData.title }}
              </h2>
            </div>
            <p class="text-base sm:text-lg text-gray-700 font-medium mb-2">
              {{ courseData.subtitle }}
            </p>
            <p class="text-sm sm:text-base text-gray-600 max-w-4xl">
              🎯 <strong>Objective:</strong> {{ courseData.objective }}
            </p>
          </div>

          <!-- Course Levels -->
          <div class="space-y-6">
            <div
              v-for="(level, levelIndex) in courseData.levels"
              :key="levelIndex"
              :class="[
                'bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4',
                getColorClasses(courseData.color).border,
              ]"
            >
              <h3
                :class="[
                  'text-lg sm:text-xl font-bold mb-4',
                  getColorClasses(courseData.color).text,
                ]"
              >
                {{ level.title }}
              </h3>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li
                  v-for="(item, itemIndex) in level.items"
                  :key="itemIndex"
                  class="flex items-start"
                >
                  <Icon
                    name="mdi:chevron-right"
                    :class="[
                      'w-4 h-4 sm:w-5 sm:h-5 mt-0.5 mr-2 sm:mr-3 flex-shrink-0',
                      getColorClasses(courseData.color).icon,
                    ]"
                  />
                  <span class="text-sm sm:text-base text-gray-700">
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>
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
          @click="contactStore.openContactModal()"
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
import { useContactStore } from "@/stores/contact.stores";

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
const contactStore = useContactStore();
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
  { id: "PLM Windchill", name: "PLM Windchill", icon: "mdi:cog" },
  { id: "Siemens Teamcenter", name: "Siemens Teamcenter", icon: "mdi:cube" },
  { id: "Cloud Solutions", name: "Cloud Solutions", icon: "mdi:cloud" },
  { id: "AI/ML", name: "AI/ML", icon: "mdi:robot" },
];

const coursesData = {
  "PLM Windchill": {
    title: "PLM Windchill Mastery Track",
    subtitle: "From Basics to Enterprise Architect",
    objective:
      "End-to-end mastery of Windchill PLM for Configuration Management, BOM, Change Processes, and ECAD/MCAD integration – aligned with global deployment scenarios.",
    icon: "mdi:cog",
    color: "purple",
    levels: [
      {
        title: "🧩 Level 1: Foundations",
        items: [
          "Windchill Architecture & Modules Overview (PDMLink, MPMLink, ProjectLink)",
          "Introduction to Objects: WTPart, Document, CAD Document",
          "Lifecycle & Versioning Concepts",
          "Access Control & Team Roles",
        ],
      },
      {
        title: "⚙️ Level 2: Intermediate Concepts",
        items: [
          "Configuration Management (Lifecycles, Soft Types, Object Initialization Rules)",
          "BOM Management: EBOM, MBOM, Occurrence Usage, Views",
          "Change Management (CR/CN/Promotion Requests)",
          "Workflow Basics: Process Template Creation",
        ],
      },
      {
        title: "🚀 Level 3: Advanced Practitioner Topics",
        items: [
          "ECAD/MCAD Integration (Creo, SolidWorks, Altium with XPLM)",
          "MPMLink for Manufacturing Process Planning",
          "Document & CAD Structure Synchronization",
          "Part Classification & Variant Management",
        ],
      },
      {
        title: "🧠 Level 4: Customization & Extension",
        items: [
          "Info*Engine & Windchill REST APIs",
          "Business Rules: OIR, ACL, Data Validation, Listener Events",
          "Report Builder & Custom UI Widgets (Action/Commands)",
        ],
      },
      {
        title: "🛠 Level 5: Enterprise Implementation & Strategy",
        items: [
          "Data Migration & Legacy Import (Excel Loader, Windchill Loader)",
          "ERP Integration (SAP, Oracle using Windchill ESI)",
          "PLM-ALM Integration Strategy",
          "CM2 & Regulatory Compliance (Medical/Automotive Use Case)",
        ],
      },
    ],
  },
  "Siemens Teamcenter": {
    title: "Siemens Teamcenter Masterclass",
    subtitle: "Deploying Digital Threads",
    objective:
      "Train engineers, consultants, and architects on BOM, MRO, workflow automation, and deployment strategies across industries.",
    icon: "mdi:cube",
    color: "green",
    levels: [
      {
        title: "🧩 Level 1: Foundations",
        items: [
          "Teamcenter Basics & Architecture",
          "Introduction to Item, Dataset, Revision & Workspace",
          "Lifecycle Management & Release Flow",
          "Basic Searches, Revisions, and Change Objects",
        ],
      },
      {
        title: "⚙️ Level 2: Intermediate BOM & Workflow Configuration",
        items: [
          "BOM View, Contexts, Occurrences, Alternate BOM",
          "Classification, Properties, and Attribute Inheritance",
          "Workflow Designer: Handlers, Rules, Review/Approval Flow",
          "Access Management & Role Permissions",
        ],
      },
      {
        title: "🚀 Level 3: Advanced Use Cases",
        items: [
          "Variant Configuration using Product Configurator",
          "Change Management with Impact Analysis",
          "MRO BOMs for Aerospace & Defense",
          "Visualization (JT2Go, Teamcenter Visualization)",
        ],
      },
      {
        title: "🧠 Level 4: Customization & BMIDE",
        items: [
          "BMIDE Deep Dive: Data Model, Extensions, LOVs, Stylesheets",
          "Custom Business Rules and Handlers",
          "Teamcenter Reporting & Analytics Configuration",
          "Active Workspace Custom UI & Integration",
        ],
      },
      {
        title: "🛠 Level 5: Implementation Strategy & Scaling",
        items: [
          "Multi-site Teamcenter Deployment",
          "Teamcenter-ERP Integration (SAP, Infor)",
          "Teamcenter Data Migration & Cleanup",
          "Digital Thread Strategy for Connected Engineering",
        ],
      },
    ],
  },
  "Cloud Solutions": {
    title: "Cloud Solutions for PLM & Engineering",
    subtitle: "AWS / Azure DevOps",
    objective:
      "Cloud-first design for PLM hosting, DevOps pipelines, and infrastructure automation for Windchill/Teamcenter.",
    icon: "mdi:cloud",
    color: "orange",
    levels: [
      {
        title: "🧩 Level 1: Cloud Infrastructure Basics",
        items: [
          "AWS & Azure Overview for Engineering Systems",
          "Compute, Storage, Networking Essentials",
          "IAM & Security Models",
          "Basic CLI & Console Management",
        ],
      },
      {
        title: "⚙️ Level 2: Intermediate Cloud DevOps",
        items: [
          "IaaS vs PaaS vs SaaS: Which PLM Model?",
          "CI/CD for PLM Deployments",
          "Dockerization of PLM Microservices",
          "Terraform Scripts for Infrastructure as Code",
        ],
      },
      {
        title: "🚀 Level 3: Advanced Cloud Integration",
        items: [
          "High Availability for PLM Systems (Load Balancing, Auto Scaling)",
          "Backup, Disaster Recovery & DR Drills",
          "Azure DevOps Pipelines for Teamcenter Custom Code",
          "AWS CodePipeline for Windchill Deployments",
        ],
      },
      {
        title: "🧠 Level 4: Custom Cloud Architectures",
        items: [
          "Hybrid Cloud (On-prem + AWS/Azure) PLM Models",
          "Securing Windchill or Teamcenter over VPN/VPC",
          "Monitoring using Prometheus, Grafana",
        ],
      },
      {
        title: "🛠 Level 5: Real-World Implementation Scenarios",
        items: [
          "PLM Cloud Migration Strategy (Checklist + Tools)",
          "ROI of Cloud vs On-Prem PLM",
          "Industry Templates: Automotive, Aero, Medical Devices",
          "DevOps SRE Best Practices in PLM Support",
        ],
      },
    ],
  },
  "AI/ML": {
    title: "AI/ML for Engineers",
    subtitle: "Applied Intelligence for Industry 4.0",
    objective:
      "Upskill engineering & PLM professionals with practical AI/ML to automate, optimize, and innovate engineering workflows.",
    icon: "mdi:robot",
    color: "blue",
    levels: [
      {
        title: "🧩 Level 1: AI/ML Basics for Engineers",
        items: [
          "Python Essentials for AI/ML",
          "Numpy, Pandas, Scikit-learn Basics",
          "Supervised vs Unsupervised Models",
          "Data Preparation & Visualization",
        ],
      },
      {
        title: "⚙️ Level 2: NLP & ChatGPT Integration",
        items: [
          "Basics of LLMs and ChatGPT APIs",
          "Embeddings for Engineering Document Search",
          "Building Technical Support Chatbots using LangChain",
          "Prompt Engineering for Engineering Workflows",
        ],
      },
      {
        title: "🚀 Level 3: Applied Models for Industry 4.0",
        items: [
          "Predictive Maintenance (Sensor Time-Series Models)",
          "Defect Detection from Image Datasets",
          "Text Classification using BERT (Change Requests, DMRs)",
          "AI for BOM/Doc Automation",
        ],
      },
      {
        title: "🧠 Level 4: Advanced Architectures",
        items: [
          "Model Deployment using FastAPI & Streamlit",
          "Vector Databases for PLM Document Search",
          "Custom GPTs for Engineering Helpdesks",
        ],
      },
      {
        title: "🛠 Level 5: Enterprise Strategy & Innovation",
        items: [
          "Generative AI in PLM & CAD",
          "AI Governance & Explainability",
          "Industry Use Cases: EV, Aerospace, Medical, Machinery",
          "AI-Powered PLM Decision Cockpit Dashboards",
        ],
      },
    ],
  },
};

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

const getColorClasses = (color) => {
  const classes = {
    purple: {
      border: "border-purple-500",
      text: "text-purple-700",
      icon: "text-purple-500",
      bg: "bg-purple-500",
    },
    green: {
      border: "border-green-500",
      text: "text-green-700",
      icon: "text-green-500",
      bg: "bg-green-500",
    },
    orange: {
      border: "border-orange-500",
      text: "text-orange-700",
      icon: "text-orange-500",
      bg: "bg-orange-500",
    },
    blue: {
      border: "border-blue-500",
      text: "text-blue-700",
      icon: "text-blue-500",
      bg: "bg-blue-500",
    },
  };
  return classes[color] || classes.purple;
};
</script>
