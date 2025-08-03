<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-brand to-brand/80 text-white py-16 sm:py-20"
    >
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          Success Stories
        </h1>
        <p
          class="text-lg sm:text-xl text-center text-white/90 max-w-3xl mx-auto"
        >
          Real transformations from professionals who elevated their careers
          with TEKNIKOZ
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-8 border-b bg-white sticky top-0 z-10 shadow-sm">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300',
              activeCategory === category.id
                ? 'bg-brand text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
          >
            <Icon
              :name="category.icon"
              class="w-4 h-4 sm:w-5 sm:h-5 inline mr-2"
            />
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="py-12 sm:py-16">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <TransitionGroup
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-5"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div
            v-for="testimonial in filteredTestimonials"
            :key="testimonial.name"
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="p-6 sm:p-8">
              <!-- Category Badge -->
              <div class="mb-4">
                <span
                  :class="[
                    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
                    getCategoryStyle(testimonial.category),
                  ]"
                >
                  <Icon
                    :name="getCategoryIcon(testimonial.category)"
                    class="w-3 h-3 mr-1"
                  />
                  {{ testimonial.category }}
                </span>
              </div>

              <!-- Quote -->
              <div class="relative mb-6">
                <Icon
                  name="mdi:format-quote-open"
                  class="absolute -top-2 -left-2 text-4xl text-brand/20"
                />
                <p
                  class="text-gray-700 italic leading-relaxed text-sm sm:text-base pl-6"
                >
                  {{ testimonial.quote }}
                </p>
              </div>

              <!-- Profile -->
              <div class="flex items-center border-t pt-4">
                <div
                  class="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
                >
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-bold text-gray-900 truncate">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-sm text-gray-600 truncate">
                    {{ testimonial.role }}
                  </p>
                  <div class="flex text-yellow-400 text-xs mt-1">
                    <Icon v-for="star in 5" :key="star" name="mdi:star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Show More Button -->
        <div v-if="hasMore" class="text-center mt-12">
          <button
            @click="showAll = !showAll"
            class="inline-flex items-center px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors duration-300"
          >
            <span>{{ showAll ? "Show Less" : "Show More" }}</span>
            <Icon
              :name="showAll ? 'mdi:chevron-up' : 'mdi:chevron-down'"
              class="w-5 h-5 ml-2"
            />
          </button>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-12 sm:py-16 bg-gray-900 text-white">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-brand mb-2">
              5000+
            </div>
            <p class="text-gray-400">Success Stories</p>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-brand mb-2">
              95%
            </div>
            <p class="text-gray-400">Career Growth</p>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-brand mb-2">
              4.9/5
            </div>
            <p class="text-gray-400">Average Rating</p>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-brand mb-2">
              50+
            </div>
            <p class="text-gray-400">Top Companies</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import boyTestimonial from "@/assets/images/boy-testimonial.png";
import girlTestimonial from "@/assets/images/girl-testimonial.png";

useHead({
  title: "Success Stories - TEKNIKOZ University",
  meta: [
    {
      name: "description",
      content:
        "Read success stories from TEKNIKOZ University students who transformed their careers through our courses",
    },
  ],
});

const activeCategory = ref("all");
const showAll = ref(false);

const categories = [
  { id: "all", name: "All Reviews", icon: "mdi:star" },
  { id: "PLM Windchill", name: "PLM Windchill", icon: "mdi:cog" },
  { id: "Siemens Teamcenter", name: "Teamcenter", icon: "mdi:cube" },
  { id: "Cloud Solutions", name: "Cloud Solutions", icon: "mdi:cloud" },
  { id: "AI/ML", name: "AI/ML", icon: "mdi:robot" },
];

const allTestimonials = [
  // PLM Windchill Testimonials
  {
    name: "Arjun M.",
    role: "PLM Analyst at Tata Motors",
    image: boyTestimonial,
    category: "PLM Windchill",
    quote:
      "The Windchill course gave me end-to-end clarity on configuration, ECAD/MCAD integration, and BOM workflows. I implemented a live CR/CN workflow at my workplace.",
  },
  {
    name: "Shruti R.",
    role: "Consultant at Capgemini",
    image: girlTestimonial,
    category: "PLM Windchill",
    quote:
      "Thanks to TEKNIKOZ, I cracked a Lead Windchill Consultant role. The hands-on ECAD integration project was a game-changer.",
  },
  {
    name: "Debasis N.",
    role: "Sr. Manufacturing Engineer, GE Healthcare",
    image: boyTestimonial,
    category: "PLM Windchill",
    quote:
      "This is not theory. Real-world projects like Supplier BOM and MPMLink helped me drive a digital transformation at our plant.",
  },
  {
    name: "Himanshi K.",
    role: "Engineering Change Leader at TVS",
    image: girlTestimonial,
    category: "PLM Windchill",
    quote:
      "The classification structure building exercise was exactly what I needed to enhance part reuse in Windchill.",
  },
  {
    name: "Vivek P.",
    role: "PLM Architect, Infosys",
    image: boyTestimonial,
    category: "PLM Windchill",
    quote:
      "No other training helped me simulate Windchill-SAP publishing and BOM validation like this course.",
  },
  {
    name: "Rakesh D.",
    role: "Engineering IT, Bosch",
    image: boyTestimonial,
    category: "PLM Windchill",
    quote:
      "I didn't just learn – I deployed a secure Windchill ProjectLink space for suppliers after this course.",
  },
  {
    name: "Asha V.",
    role: "EV Platform Architect, Ola Electric",
    image: girlTestimonial,
    category: "PLM Windchill",
    quote:
      "My confidence in variant BOM and option set configuration came directly from TEKNIKOZ projects.",
  },
  {
    name: "Saurav G.",
    role: "Windchill Support Lead, Tech Mahindra",
    image: boyTestimonial,
    category: "PLM Windchill",
    quote:
      "I finally understood the difference between Promotion Request and Change Notice thanks to the detailed workflow labs.",
  },
  {
    name: "Neha J.",
    role: "Systems Analyst, HCL Technologies",
    image: girlTestimonial,
    category: "PLM Windchill",
    quote:
      "With these hands-on modules, I went from Windchill beginner to leading our ECAD-MCAD data sync project.",
  },
  {
    name: "Ravi T.",
    role: "PLM Strategist, Aditya Birla Group",
    image: boyTestimonial,
    category: "PLM Windchill",
    quote:
      "It's the only course that connected Windchill fundamentals to implementation practices at scale.",
  },
  // Siemens Teamcenter Testimonials
  {
    name: "Deepali S.",
    role: "Engineering Systems Manager, Airbus",
    image: girlTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "From Advanced BOM to MRO configuration, this was the most practical Teamcenter course I've taken.",
  },
  {
    name: "Gokul M.",
    role: "Teamcenter Admin, Mahindra & Mahindra",
    image: boyTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "BMIDE customization never made sense until I did this course. I now manage data model changes independently.",
  },
  {
    name: "Sandeep K.",
    role: "PLM Support, ABB India",
    image: boyTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "Thanks to the Active Workspace labs, I could deploy and configure a clean UI for our plant users.",
  },
  {
    name: "Varsha P.",
    role: "PLM Engineer, Siemens Digital Industries",
    image: girlTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "The variant configuration project helped me secure a role in Teamcenter Global Services.",
  },
  {
    name: "Riyaz M.",
    role: "IT Lead – PLM, L&T Technology Services",
    image: boyTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "Creating a customized Engineering Change workflow helped automate our complete approval system.",
  },
  {
    name: "Sudhir R.",
    role: "Product Data Manager, Ashok Leyland",
    image: boyTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "Excellent simulations of classification, SAP integration, and migration helped us reduce consulting dependency.",
  },
  {
    name: "Meenal J.",
    role: "PLM Analyst, ZF",
    image: girlTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "Perfect content balance for both functional and technical roles – I now handle both Active Workspace and BMIDE.",
  },
  {
    name: "Ranjan D.",
    role: "Lead PLM Systems, DRDO",
    image: boyTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "I used this training to transition from CAD admin to PLM Systems Lead. The MRO case studies were top-notch.",
  },
  {
    name: "Rashmi S.",
    role: "Teamcenter Consultant, Cognizant",
    image: girlTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "No fluff – only implementation-ready concepts. Especially loved the classification project.",
  },
  {
    name: "Ajay C.",
    role: "Migration Specialist, Wipro",
    image: boyTestimonial,
    category: "Siemens Teamcenter",
    quote:
      "By the end of the course, I independently ran a legacy migration into Teamcenter Unified.",
  },
  // Cloud Solutions Testimonials
  {
    name: "Mohammed I.",
    role: "DevOps Engineer at Siemens Energy",
    image: boyTestimonial,
    category: "Cloud Solutions",
    quote:
      "I never imagined setting up Windchill on AWS would be this straightforward. Terraform modules made it click.",
  },
  {
    name: "Ritika G.",
    role: "Cloud Infra Lead, Infosys",
    image: girlTestimonial,
    category: "Cloud Solutions",
    quote:
      "The Cloud PLM Architecture project helped me design a secure AWS-VPC setup for PLM rollout.",
  },
  {
    name: "Manoj P.",
    role: "DevOps Architect, Mindtree",
    image: boyTestimonial,
    category: "Cloud Solutions",
    quote:
      "The CI/CD project helped our team implement an automated Windchill code deployment pipeline.",
  },
  {
    name: "Parth R.",
    role: "PLM Cloud Engineer, Bosch",
    image: boyTestimonial,
    category: "Cloud Solutions",
    quote:
      "TEKNIKOZ taught me everything from IAM policies to load balancing in PLM systems.",
  },
  {
    name: "Kavya S.",
    role: "Azure Architect, Wipro",
    image: girlTestimonial,
    category: "Cloud Solutions",
    quote:
      "Excellent Azure-based case studies. I replicated the entire PLM backup and restore model in my current job.",
  },
  {
    name: "Siddharth M.",
    role: "Site Reliability Engineer, ZF",
    image: boyTestimonial,
    category: "Cloud Solutions",
    quote:
      "Monitoring PLM workloads using Prometheus/Grafana was a masterstroke. I use it every day now.",
  },
  {
    name: "Prachi V.",
    role: "Infra Consultant, TCS",
    image: girlTestimonial,
    category: "Cloud Solutions",
    quote:
      "This course demystified VPN, auto-scaling, and disaster recovery in PLM infrastructure.",
  },
  {
    name: "Aravind T.",
    role: "IT Infra Architect, Bharat Forge",
    image: boyTestimonial,
    category: "Cloud Solutions",
    quote:
      "I used the hybrid cloud sync concept in our transition from on-prem to AWS.",
  },
  {
    name: "Ankush N.",
    role: "DevOps Lead, Hero Motocorp",
    image: boyTestimonial,
    category: "Cloud Solutions",
    quote:
      "Cost optimization tips from this course saved our team nearly ₹6L per month.",
  },
  {
    name: "Trisha S.",
    role: "Infra & Cloud Consultant, LTTS",
    image: girlTestimonial,
    category: "Cloud Solutions",
    quote:
      "Best hands-on for cloud + PLM professionals. Highly aligned with industry expectations.",
  },
  // AI/ML Testimonials
  {
    name: "Ashish V.",
    role: "Data Scientist at Honeywell",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "I used the AI Predictive Maintenance project to build my portfolio and land a role in IIoT product engineering.",
  },
  {
    name: "Renu P.",
    role: "Engineering Analyst, Bosch",
    image: girlTestimonial,
    category: "AI/ML",
    quote:
      "Finally a course that explains Industry 4.0 + ML with hands-on use cases – and no Python overkill!",
  },
  {
    name: "Manas G.",
    role: "Innovation Lead, TCS Engineering",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "With ChatGPT and LangChain labs, I created a smart assistant for PLM data search in my company.",
  },
  {
    name: "Akshaya D.",
    role: "System Reliability Analyst, Dassault Systèmes",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "Thanks to the anomaly detection project, we implemented early alerting on PLM server logs.",
  },
  {
    name: "Karan J.",
    role: "ML Integration Engineer, ABB",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "From OCR metadata tagging to document auto-fill – this course has every useful ML application.",
  },
  {
    name: "Sunita M.",
    role: "Supply Chain Systems Analyst, Tata ELXSI",
    image: girlTestimonial,
    category: "AI/ML",
    quote:
      "The AI-powered Chatbot for supplier onboarding saved our support team hours every week.",
  },
  {
    name: "Raghav T.",
    role: "AI Strategist, GE Aviation",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "This is how applied AI should be taught. I now lead ML implementations for engineering support.",
  },
  {
    name: "Sahil R.",
    role: "Product Engineer, Mahindra Rise",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "The BERT-based classifier helped me automate CR severity triaging – what a time-saver!",
  },
  {
    name: "Tina V.",
    role: "Data Engineer, Infosys",
    image: girlTestimonial,
    category: "AI/ML",
    quote:
      "Deploying models using FastAPI from this course became my first production ML success story.",
  },
  {
    name: "Jayant K.",
    role: "ML Product Owner, L&T Technology",
    image: boyTestimonial,
    category: "AI/ML",
    quote:
      "Perfect for engineers wanting to get into applied AI without drowning in theory.",
  },
];

const filteredTestimonials = computed(() => {
  let filtered =
    activeCategory.value === "all"
      ? [...allTestimonials].sort(() => Math.random() - 0.5)
      : allTestimonials.filter((t) => t.category === activeCategory.value);

  return showAll.value ? filtered : filtered.slice(0, 6);
});

const hasMore = computed(() => {
  const total =
    activeCategory.value === "all"
      ? allTestimonials.length
      : allTestimonials.filter((t) => t.category === activeCategory.value)
          .length;
  return total > 6;
});

const getCategoryStyle = (category) => {
  const styles = {
    "PLM Windchill": "bg-purple-100 text-purple-800",
    "Siemens Teamcenter": "bg-green-100 text-green-800",
    "Cloud Solutions": "bg-orange-100 text-orange-800",
    "AI/ML": "bg-blue-100 text-blue-800",
  };
  return styles[category] || "bg-gray-100 text-gray-800";
};

const getCategoryIcon = (category) => {
  const icons = {
    "PLM Windchill": "mdi:cog",
    "Siemens Teamcenter": "mdi:cube",
    "Cloud Solutions": "mdi:cloud",
    "AI/ML": "mdi:robot",
  };
  return icons[category] || "mdi:star";
};
</script>
