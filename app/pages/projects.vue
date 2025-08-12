<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Real Projects Portfolio
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-center text-white/90 max-w-3xl mx-auto"
        >
          Industry-aligned projects that showcase your skills and build your
          portfolio
        </p>
      </div>
    </section>

    <!-- Project Navigation -->
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
              v-if="category.id !== 'all'"
              :class="[
                'w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mr-2',
                getCategoryBgColor(category.id),
              ]"
            >
              <Icon :name="category.icon" class="text-white text-xs" />
            </div>
            <Icon
              v-else
              :name="category.icon"
              class="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            />
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12 sm:py-16">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Technology Projects Section -->
        <div v-if="activeCategory !== 'all'" class="mb-12">
          <!-- PLM Windchill Section -->
          <div
            v-if="activeCategory === 'PLM Windchill'"
            id="windchill"
            class="scroll-mt-20"
          ></div>

          <!-- Siemens Teamcenter Section -->
          <div
            v-if="activeCategory === 'Siemens Teamcenter'"
            id="teamcenter"
            class="scroll-mt-20"
          ></div>

          <!-- Cloud Solutions Section -->
          <div
            v-if="activeCategory === 'Cloud Solutions'"
            id="cloud"
            class="scroll-mt-20"
          ></div>

          <!-- AI/ML Section -->
          <div
            v-if="activeCategory === 'AI/ML'"
            id="aiml"
            class="scroll-mt-20"
          ></div>

          <h2
            :id="activeCategory.toLowerCase().replace(/[\s/]/g, '')"
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center scroll-mt-20"
          >
            {{ getCategoryDisplayName(activeCategory) }} Projects
          </h2>

          <!-- All Projects in Single Grid -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <!-- Featured Projects -->
            <div
              v-for="project in getVisibleProjects(activeCategory)"
              :key="'featured-' + project.title"
              class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4"
              :class="getCategoryBorderColor(activeCategory)"
            >
              <div class="p-4 sm:p-6">
                <!-- Project Header -->
                <div class="flex items-start mb-3">
                  <div
                    :class="[
                      'w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mr-3 flex-shrink-0',
                      getCategoryBgColor(activeCategory),
                    ]"
                  >
                    <Icon
                      :name="getCategoryIcon(activeCategory)"
                      class="text-white text-lg sm:text-xl"
                    />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {{ project.title }}
                    </h3>
                    <p
                      class="text-sm sm:text-base text-gray-600 leading-relaxed mb-3"
                    >
                      {{ project.description }}
                    </p>
                  </div>
                </div>

                <!-- Technologies Used (Featured Only) -->
                <div v-if="project.tools" class="mb-3">
                  <h4 class="text-xs font-semibold text-gray-700 mb-1">
                    Tools:
                  </h4>
                  <p
                    :class="[
                      'text-xs font-medium',
                      getCategoryTextColor(activeCategory),
                    ]"
                  >
                    {{ project.tools }}
                  </p>
                </div>

                <!-- CTA Button -->
                <button
                  :class="[
                    'w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 inline-flex items-center justify-center gap-2 group',
                    getCategoryButtonStyle(activeCategory),
                  ]"
                >
                  <span>Start This Project</span>
                  <Icon
                    name="mdi:arrow-right"
                    class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>

            <!-- Additional Projects -->
            <div
              v-for="project in getMoreProjects(activeCategory)"
              :key="'more-' + project.title"
              class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="p-4 sm:p-6">
                <div class="flex items-start mb-3">
                  <div
                    :class="[
                      'w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0',
                      getCategoryBgColor(activeCategory),
                    ]"
                  >
                    <Icon
                      :name="getCategoryIcon(activeCategory)"
                      class="text-white text-sm sm:text-base"
                    />
                  </div>
                  <div class="flex-1">
                    <h4
                      class="font-bold text-gray-900 mb-2 text-base sm:text-lg"
                    >
                      {{ project.title }}
                    </h4>
                    <p
                      class="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed"
                    >
                      {{ project.description }}
                    </p>
                  </div>
                </div>
                <button
                  :class="[
                    'w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 border inline-flex items-center justify-center gap-2 group',
                    getCategoryOutlineButtonStyle(activeCategory),
                  ]"
                >
                  <span>Learn More</span>
                  <Icon
                    name="mdi:arrow-right"
                    class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- All Projects by Technology -->
        <div v-if="activeCategory === 'all'">
          <div
            v-for="category in categories.filter((c) => c.id !== 'all')"
            :key="category.id"
            class="mb-16"
          >
            <!-- Technology Header -->
            <div class="mb-8">
              <h2
                :id="category.id.toLowerCase().replace(/[\s/]/g, '')"
                class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center scroll-mt-20"
              >
                <div
                  :class="['rounded-full flex items-center justify-center']"
                ></div>
                {{ getCategoryDisplayName(category.id) }} Projects
              </h2>
              <p
                class="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl"
              >
                {{ getCategoryDescription(category.id) }}
              </p>
              <p class="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                {{ getProjectCount(category.id) }} Projects Available
              </p>
            </div>

            <!-- Projects Grid for this Technology -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              <!-- Featured Projects -->
              <div
                v-for="project in getVisibleProjects(category.id)"
                :key="'featured-' + project.title"
                class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4"
                :class="getCategoryBorderColor(category.id)"
              >
                <div class="p-4 sm:p-6">
                  <!-- Project Header -->
                  <div class="flex items-start mb-3">
                    <div
                      :class="[
                        'w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mr-3 flex-shrink-0',
                        getCategoryBgColor(category.id),
                      ]"
                    >
                      <Icon
                        :name="category.icon"
                        class="text-white text-lg sm:text-xl"
                      />
                    </div>
                    <div class="flex-1">
                      <h3
                        class="text-base sm:text-lg font-bold text-gray-900 mb-2"
                      >
                        {{ project.title }}
                      </h3>
                      <p
                        class="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3"
                      >
                        {{ project.description }}
                      </p>
                    </div>
                  </div>

                  <!-- Technologies Used (Featured Only) -->
                  <div v-if="project.tools" class="mb-3">
                    <h4 class="text-xs font-semibold text-gray-700 mb-1">
                      Tools:
                    </h4>
                    <p
                      :class="[
                        'text-xs font-medium',
                        getCategoryTextColor(category.id),
                      ]"
                    >
                      {{ project.tools }}
                    </p>
                  </div>

                  <!-- CTA Button -->
                  <button
                    :class="[
                      'w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 inline-flex items-center justify-center gap-2 group',
                      getCategoryButtonStyle(category.id),
                    ]"
                  >
                    <span>Start This Project</span>
                    <Icon
                      name="mdi:arrow-right"
                      class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>

              <!-- Additional Projects -->
              <div
                v-for="project in getMoreProjects(category.id)"
                :key="'more-' + project.title"
                class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="p-4 sm:p-6">
                  <div class="flex items-start mb-3">
                    <div
                      :class="[
                        'w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0',
                        getCategoryBgColor(category.id),
                      ]"
                    >
                      <Icon
                        :name="category.icon"
                        class="text-white text-sm sm:text-base"
                      />
                    </div>
                    <div class="flex-1">
                      <h4
                        class="font-bold text-gray-900 mb-2 text-sm sm:text-base"
                      >
                        {{ project.title }}
                      </h4>
                      <p
                        class="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed"
                      >
                        {{ project.description }}
                      </p>
                    </div>
                  </div>
                  <button
                    :class="[
                      'w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 border inline-flex items-center justify-center gap-2 group',
                      getCategoryOutlineButtonStyle(category.id),
                    ]"
                  >
                    <span>Learn More</span>
                    <Icon
                      name="mdi:arrow-right"
                      class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

useHead({
  title: "Real Projects - TEKNIKOZ E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Explore our comprehensive project portfolio across PLM Windchill, Siemens Teamcenter, Cloud Solutions, and AI/ML technologies",
    },
  ],
});

// Handle URL parameters for direct navigation
const route = useRoute();
const activeCategory = ref(route.query.category || "all");
// Remove showMore reactive since we're showing all projects

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
  { id: "all", name: "All Projects", icon: "mdi:view-grid" },
  { id: "PLM Windchill", name: "PLM Windchill", icon: "mdi:cog" },
  { id: "Siemens Teamcenter", name: "Teamcenter", icon: "mdi:cube" },
  { id: "Cloud Solutions", name: "Cloud Solutions", icon: "mdi:cloud" },
  { id: "AI/ML", name: "AI/ML", icon: "mdi:robot" },
];

// Project data structure
const projectData = {
  "PLM Windchill": {
    visible: [
      {
        title: "Windchill BOM Configuration",
        description:
          "Build a multi-level BOM system with view-based BOMs and configurable parts.",
        tools: "Windchill PDMLink, BOM tools, CR/CN, Promotion Requests",
      },
      {
        title: "Change Management Automation",
        description:
          "Create automated workflows for Change Request → Change Notice using routing rules, role assignments & validation.",
        tools: "Windchill Workflow, Process Templates, CR/CN Management",
      },
    ],
    more: [
      {
        title: "ECAD-MCAD Integration Project",
        description:
          "Integrate Altium/Creo data with Windchill using XPLM and verify BOM sync.",
      },
      {
        title: "Supplier BOM Collaboration",
        description:
          "Create a secure ProjectLink workspace for supplier BOM upload, redlining, and comparison.",
      },
      {
        title: "Variant BOM for Electric Vehicles",
        description:
          "Implement Option Sets, Variant Specs, and configurable BOM for EV product lines.",
      },
      {
        title: "PLM-ERP Interface (SAP Integration)",
        description:
          "Use Windchill ESI to simulate part and BOM publishing to SAP mock system.",
      },
      {
        title: "Product Classification Implementation",
        description:
          "Create classification hierarchies with search attributes using Windchill Classification module.",
      },
      {
        title: "CAPA Documentation Flow in Medical Device PLM",
        description:
          "Implement complaint intake, investigation doc linking, change control, and audit trail.",
      },
      {
        title: "MPMLink Manufacturing Process Plan",
        description:
          "Map MBOM to Process Plan and Resource Management in MPMLink for a small assembly.",
      },
      {
        title: "CAD Data Management Strategy",
        description:
          "Manage revisions, iterations, and release of Creo and SolidWorks files using Windchill Workgroup Manager.",
      },
    ],
  },
  "Siemens Teamcenter": {
    visible: [
      {
        title: "Teamcenter MRO Configuration",
        description:
          "Configure BOM structure for MRO with alternates, substitutes, and lifecycle links.",
        tools: "Teamcenter BOM Management, MRO BOMs, Lifecycle Management",
      },
      {
        title: "Workflow Automation for Engineering Changes",
        description:
          "Design and deploy multi-level approval workflows using Teamcenter Process Designer.",
        tools:
          "Teamcenter Process Designer, Workflow Templates, Business Rules",
      },
    ],
    more: [
      {
        title: "BMIDE Customization",
        description:
          "Extend data model, define new item types, property mappings, and create LOVs.",
      },
      {
        title: "Product Configurator Use Case",
        description:
          "Implement a variant configuration use case using effectivity and feature filters.",
      },
      {
        title: "Active Workspace UI Customization",
        description:
          "Customize tiles, commands, and add a custom info panel in Active Workspace.",
      },
      {
        title: "JT2Go Visualization Integration",
        description:
          "Enable lightweight JT visualization in Teamcenter and configure viewer access.",
      },
      {
        title: "Teamcenter-SAP Integration Simulation",
        description:
          "Simulate part and BOM transfer using BOP Interface mapping.",
      },
      {
        title: "Classification Structure for Automotive Parts",
        description:
          "Build a hierarchical classification with properties, images, and usage references.",
      },
      {
        title: "Engineering Document Vault Setup",
        description:
          "Configure metadata-driven document types, templates, and secure vaulting.",
      },
      {
        title: "Teamcenter Data Migration (Legacy to Unified)",
        description:
          "Plan and execute mock migration using import tools (TcIC or Excel Import).",
      },
    ],
  },
  "Cloud Solutions": {
    visible: [
      {
        title: "Cloud PLM Architecture",
        description:
          "Design and deploy scalable PLM infra (Windchill/Teamcenter) using EC2, S3, RDS, Load Balancer.",
        tools: "AWS EC2, S3, RDS, VPC, Load Balancing, Auto-scaling",
      },
      {
        title: "CI/CD Pipeline for PLM Customization",
        description:
          "Create a DevOps pipeline (GitHub Actions/Azure DevOps) for BMIDE/Windchill code deployment.",
        tools: "GitHub Actions, Azure DevOps, Docker, Jenkins, Git",
      },
    ],
    more: [
      {
        title: "Terraform Infrastructure for Windchill",
        description:
          "Script AWS infra (EC2, VPC, RDS) using Terraform modules.",
      },
      {
        title: "Secure PLM Deployment with VPN & IAM",
        description:
          "Setup S2S VPN, IAM roles, and bucket policies for a secure PLM architecture.",
      },
      {
        title: "Azure Kubernetes for PLM Microservices",
        description:
          "Deploy a containerized PLM microservice (e.g., Document Service) using AKS.",
      },
      {
        title: "S3-based Backup & Restore Plan",
        description:
          "Automate daily backups of Windchill file vaults and DB to encrypted S3 buckets.",
      },
      {
        title: "Cloud Monitoring with Grafana + Prometheus",
        description:
          "Monitor CPU, Memory, Uptime of PLM infrastructure with alerts on Teams.",
      },
      {
        title: "Hybrid On-Prem & Cloud PLM Sync",
        description:
          "Simulate a hybrid architecture with file vault sync between on-prem server and S3.",
      },
      {
        title: "Disaster Recovery Drill for PLM",
        description:
          "Simulate infra loss and restore from backup with test validation plan.",
      },
      {
        title: "Cost Optimization & Auto-scaling of PLM",
        description:
          "Enable auto-scale, schedule stop/start, and analyze billing with AWS Cost Explorer.",
      },
    ],
  },
  "AI/ML": {
    visible: [
      {
        title: "AI-Powered Predictive Maintenance",
        description:
          "Build ML models to predict machine failure based on sensor data.",
        tools: "Python, Scikit-learn, Time-series Analysis, IoT Sensors",
      },
      {
        title: "ChatGPT Assistant for Engineering Docs",
        description:
          "Use OpenAI API to create an assistant that summarizes and answers queries from BOM/spec sheets.",
        tools: "OpenAI API, LangChain, Python, NLP, Document Processing",
      },
    ],
    more: [
      {
        title: "BERT-Based Text Classifier for Change Requests",
        description:
          "Train a BERT model to classify CRs as Minor, Major, or Critical.",
      },
      {
        title: "Anomaly Detection in PLM Logs",
        description:
          "Use Isolation Forest to flag abnormal user/system activity in PLM audit logs.",
      },
      {
        title: "Vision AI: Defect Detection in Parts",
        description:
          "Build a CNN model to detect defects from part images (automotive quality use case).",
      },
      {
        title: "AI for Document Auto-Filling",
        description:
          "Train a model to auto-fill metadata in spec sheets using OCR + NLP.",
      },
      {
        title: "AI Model Deployment with FastAPI",
        description:
          "Create a microservice to host ML model for BOM recommendation.",
      },
      {
        title: "Vector DB Search over Technical PDFs",
        description:
          "Use FAISS + LangChain to allow smart semantic search over PLM manuals.",
      },
      {
        title: "Chatbot for Supplier Onboarding",
        description:
          "Create a chatbot that guides suppliers through PLM onboarding.",
      },
      {
        title: "AI-based Root Cause Analysis",
        description:
          "Build a model that correlates failure logs with design attributes to suggest probable root causes.",
      },
    ],
  },
};

// Helper functions
const getActiveCategoryStyle = (categoryId) => {
  const styles = {
    all: "bg-brand text-white",
    "PLM Windchill": "bg-purple-100 text-purple-700",
    "Siemens Teamcenter": "bg-green-100 text-green-700",
    "Cloud Solutions": "bg-orange-100 text-orange-700",
    "AI/ML": "bg-blue-100 text-blue-700",
  };
  return styles[categoryId] || "bg-brand text-white";
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

const getCategoryTextColor = (categoryId) => {
  const colors = {
    "PLM Windchill": "text-purple-600",
    "Siemens Teamcenter": "text-green-600",
    "Cloud Solutions": "text-orange-600",
    "AI/ML": "text-blue-600",
  };
  return colors[categoryId] || "text-gray-600";
};

const getCategoryButtonStyle = (categoryId) => {
  const styles = {
    "PLM Windchill": "bg-purple-500 hover:bg-purple-600 text-white",
    "Siemens Teamcenter": "bg-green-500 hover:bg-green-600 text-white",
    "Cloud Solutions": "bg-orange-500 hover:bg-orange-600 text-white",
    "AI/ML": "bg-blue-500 hover:bg-blue-600 text-white",
  };
  return styles[categoryId] || "bg-gray-500 hover:bg-gray-600 text-white";
};

const getCategoryOutlineButtonStyle = (categoryId) => {
  const styles = {
    "PLM Windchill": "border-purple-500 text-purple-600 hover:bg-purple-50",
    "Siemens Teamcenter": "border-green-500 text-green-600 hover:bg-green-50",
    "Cloud Solutions": "border-orange-500 text-orange-600 hover:bg-orange-50",
    "AI/ML": "border-blue-500 text-blue-600 hover:bg-blue-50",
  };
  return styles[categoryId] || "border-gray-500 text-gray-600 hover:bg-gray-50";
};

const getCategoryBorderColor = (categoryId) => {
  const colors = {
    "PLM Windchill": "border-l-purple-500",
    "Siemens Teamcenter": "border-l-green-500",
    "Cloud Solutions": "border-l-orange-500",
    "AI/ML": "border-l-blue-500",
  };
  return colors[categoryId] || "border-l-gray-500";
};

const getCategoryIcon = (categoryId) => {
  const icons = {
    "PLM Windchill": "mdi:cog",
    "Siemens Teamcenter": "mdi:cube",
    "Cloud Solutions": "mdi:cloud",
    "AI/ML": "mdi:robot",
  };
  return icons[categoryId] || "mdi:star";
};

const getCategoryDisplayName = (categoryId) => {
  const names = {
    "PLM Windchill": "PLM Windchill",
    "Siemens Teamcenter": "Siemens Teamcenter",
    "Cloud Solutions": "Cloud Solutions",
    "AI/ML": "AI/ML",
  };
  return names[categoryId] || categoryId;
};

const getCategoryDescription = (categoryId) => {
  const descriptions = {
    "PLM Windchill":
      "Configuration Management, BOM, Change Processes, and ECAD/MCAD integration projects",
    "Siemens Teamcenter":
      "BOM Management, MRO, Workflow automation, and deployment strategy projects",
    "Cloud Solutions":
      "AWS/Azure PLM hosting, DevOps pipelines, and infrastructure automation projects",
    "AI/ML":
      "Applied intelligence for Industry 4.0, automation, and engineering workflow optimization",
  };
  return descriptions[categoryId] || "";
};

const getVisibleProjects = (categoryId) => {
  return projectData[categoryId]?.visible || [];
};

const getMoreProjects = (categoryId) => {
  return projectData[categoryId]?.more || [];
};

const hasMoreProjects = (categoryId) => {
  return projectData[categoryId]?.more?.length > 0;
};

const getProjectCount = (categoryId) => {
  const visible = projectData[categoryId]?.visible?.length || 0;
  const more = projectData[categoryId]?.more?.length || 0;
  return visible + more;
};
</script>
