<template>
  <div
    v-if="showQuiz"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
    >
      <!-- Header -->
      <div class="p-4 border-b border-gray-200 flex-shrink-0">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Find Your Path</h2>
          </div>
          <button
            @click="closeQuiz"
            class="text-gray-400 hover:text-red-600 transition-colors"
          >
            <Icon name="mdi:close" class="text-xl flex items-center" />
          </button>
        </div>

        <!-- Progress Bar -->
        <div class="mt-4" v-if="currentStep <= 3">
          <div
            class="flex items-center justify-between text-sm text-gray-600 mb-2"
          >
            <span>Step {{ currentStep }} of 3</span>
            <span>{{ progressPercentage }}% Complete</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-brand h-2 rounded-full transition-all duration-300"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Quiz Content -->
      <div class="flex-1 overflow-y-auto p-4 sm:p-6">
        <!-- Step 1: Role -->
        <div v-if="currentStep === 1" class="space-y-4">
          <div class="text-center">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Tell us who you are...
            </h3>
            <p class="text-gray-600">
              This helps us recommend the most suitable learning path
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              v-for="role in roles"
              :key="role.id"
              @click="selectRole(role.id)"
              :class="[
                'p-6 rounded-xl border-2 transition-all duration-300 text-center hover:shadow-lg',
                selectedRole === role.id
                  ? 'border-brand bg-brand/5 shadow-lg'
                  : 'border-gray-200 hover:border-brand/50',
              ]"
            >
              <div
                class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                :class="selectedRole === role.id ? 'bg-brand' : 'bg-gray-100'"
              >
                <Icon
                  :name="role.icon"
                  :class="
                    selectedRole === role.id ? 'text-white' : 'text-gray-600'
                  "
                  class="text-2xl"
                />
              </div>
              <h4 class="font-semibold text-gray-900 mb-1">{{ role.title }}</h4>
              <p class="text-sm text-gray-600">{{ role.description }}</p>
            </button>
          </div>
        </div>

        <!-- Step 2: Goals -->
        <div v-if="currentStep === 2" class="space-y-4">
          <div class="text-center">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              What do you want to achieve?
            </h3>
            <p class="text-gray-600">
              Select your primary goal to get personalized recommendations
            </p>
          </div>

          <div class="space-y-3">
            <button
              v-for="goal in goals"
              :key="goal.id"
              @click="selectGoal(goal.id)"
              :class="[
                'w-full p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-md',
                selectedGoal === goal.id
                  ? 'border-brand bg-brand/5 shadow-md'
                  : 'border-gray-200 hover:border-brand/50',
              ]"
            >
              <div class="flex items-center">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  :class="selectedGoal === goal.id ? 'bg-brand' : 'bg-gray-100'"
                >
                  <Icon
                    name="mdi:check"
                    :class="
                      selectedGoal === goal.id
                        ? 'text-white'
                        : 'text-transparent'
                    "
                    class="text-lg"
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ goal.title }}</h4>
                  <p class="text-sm text-gray-600">{{ goal.description }}</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Step 3: Interests -->
        <div v-if="currentStep === 3" class="space-y-4">
          <div class="text-center">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Choose areas you want to focus on...
            </h3>
            <p class="text-gray-600">
              Select multiple areas that interest you most
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              v-for="interest in interests"
              :key="interest.id"
              @click="toggleInterest(interest.id)"
              :class="[
                'p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-md',
                selectedInterests.includes(interest.id)
                  ? 'border-brand bg-brand/5 shadow-md'
                  : 'border-gray-200 hover:border-brand/50',
              ]"
            >
              <div class="flex items-center">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  :class="
                    selectedInterests.includes(interest.id)
                      ? 'bg-brand'
                      : 'bg-gray-100'
                  "
                >
                  <Icon
                    name="mdi:check"
                    :class="
                      selectedInterests.includes(interest.id)
                        ? 'text-white'
                        : 'text-transparent'
                    "
                    class="text-lg"
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">
                    {{ interest.title }}
                  </h4>
                  <p class="text-sm text-gray-600">
                    {{ interest.description }}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Results -->
        <div v-if="currentStep === 4" class="space-y-4">
          <div class="text-center">
            <p class="text-gray-600">
              Based on your selections, here's the perfect learning journey for
              you
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-brand/10 to-blue-50 rounded-2xl p-4 sm:p-6"
          >
            <div class="text-center mb-4">
              <div
                class="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <Icon :name="recommendation.icon" class="text-white text-xl" />
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-2">
                {{ recommendation.title }}
              </h4>
              <p class="text-gray-600 mb-3">{{ recommendation.subtitle }}</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <div class="text-center">
                <div class="font-bold text-brand text-lg">
                  {{ recommendation.duration }}
                </div>
                <div class="text-xs text-gray-600">Duration</div>
              </div>
              <div class="text-center">
                <div class="font-bold text-brand text-lg">
                  {{ recommendation.mode }}
                </div>
                <div class="text-xs text-gray-600">Mode</div>
              </div>
              <div class="text-center">
                <div class="font-bold text-brand text-lg">
                  {{ recommendation.certification }}
                </div>
                <div class="text-xs text-gray-600">Certification</div>
              </div>
              <div class="text-center">
                <div class="font-bold text-brand text-lg">
                  {{ recommendation.support }}
                </div>
                <div class="text-xs text-gray-600">Support</div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <button
                @click="viewCourse"
                class="flex-1 bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-brand/80 transition-colors duration-300"
              >
                View Course
              </button>
              <button
                @click="restartQuiz"
                class="flex-1 border-2 border-brand text-brand px-6 py-3 rounded-full font-semibold hover:bg-brand hover:text-white transition-colors duration-300"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div
        v-if="currentStep < 4"
        class="p-4 sm:p-6 border-t border-gray-200 flex-shrink-0"
      >
        <div class="flex justify-between">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="px-6 py-2 border-2 border-gray-200 text-gray-600 rounded-full font-semibold hover:border-gray-300 transition-colors duration-300"
          >
            Previous
          </button>
          <div v-else></div>

          <button
            @click="nextStep"
            :disabled="!canProceed"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-colors duration-300',
              canProceed
                ? 'bg-brand text-white hover:bg-brand/80'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed',
            ]"
          >
            {{ currentStep === 3 ? "Get Results" : "Next" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  showQuiz: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "result"]);

const currentStep = ref(1);
const selectedRole = ref("");
const selectedGoal = ref("");
const selectedInterests = ref([]);

// Progress calculation for the quiz steps (only 3 steps, step 4 is results)
const progressPercentage = computed(() => {
  if (currentStep.value > 3) return 100;
  return Math.round(((currentStep.value - 1) / 2) * 100);
});

const roles = [
  {
    id: "fresher",
    title: "Fresher",
    description: "Student or recent graduate",
    icon: "mdi:school",
  },
  {
    id: "professional",
    title: "Professional",
    description: "Working engineer or consultant",
    icon: "mdi:briefcase-check",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Manager or training lead",
    icon: "mdi:office-building",
  },
];

const goals = [
  {
    id: "first-job",
    title: "Land your first job",
    description: "Get hired in PLM or AI field",
  },
  {
    id: "promotion",
    title: "Upskill for a promotion",
    description: "Advance your current career",
  },
  {
    id: "transformation",
    title: "Lead digital transformation",
    description: "Drive organizational change",
  },
  {
    id: "team-training",
    title: "Train your entire team",
    description: "Corporate team development",
  },
];

const interests = [
  {
    id: "plm",
    title: "PLM (Windchill, Creo)",
    description: "Product lifecycle management",
  },
  {
    id: "ai-ml",
    title: "AI/ML (ChatGPT, RAG, Predictive)",
    description: "Artificial intelligence & machine learning",
  },
  {
    id: "integration",
    title: "ERP/MES/IoT",
    description: "Enterprise system integration",
  },
  {
    id: "data",
    title: "Data Integration & Visualization",
    description: "Data analytics and reporting",
  },
  {
    id: "documentation",
    title: "Documentation, IETM, Tech Writing",
    description: "Technical documentation",
  },
];

const canProceed = computed(() => {
  if (currentStep.value === 1) return selectedRole.value !== "";
  if (currentStep.value === 2) return selectedGoal.value !== "";
  if (currentStep.value === 3) return selectedInterests.value.length > 0;
  return false;
});

const recommendation = computed(() => {
  if (selectedRole.value === "fresher") {
    return {
      title: "Freshers Career Track – PLM + AI Bootcamp",
      subtitle: "Perfect for launching your career in PLM and AI",
      duration: "12 weeks",
      mode: "Live + Self-paced",
      certification: "Yes",
      support: "Included",
      icon: "mdi:school",
      path: "/learning-paths/freshers",
    };
  } else if (selectedRole.value === "professional") {
    return {
      title: "Professional Advancement Track",
      subtitle: "Advanced skills for career growth",
      duration: "16 weeks",
      mode: "Flexible",
      certification: "Advanced",
      support: "Premium",
      icon: "mdi:briefcase-check",
      path: "/learning-paths/professionals",
    };
  } else {
    return {
      title: "Enterprise Transformation Program",
      subtitle: "Comprehensive team training solutions",
      duration: "Custom",
      mode: "On-site + Virtual",
      certification: "Enterprise",
      support: "24/7",
      icon: "mdi:office-building",
      path: "/learning-paths/enterprises",
    };
  }
});

const selectRole = (roleId) => {
  selectedRole.value = roleId;
};

const selectGoal = (goalId) => {
  selectedGoal.value = goalId;
};

const toggleInterest = (interestId) => {
  const index = selectedInterests.value.indexOf(interestId);
  if (index > -1) {
    selectedInterests.value.splice(index, 1);
  } else {
    selectedInterests.value.push(interestId);
  }
};

const nextStep = () => {
  if (canProceed.value) {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const closeQuiz = () => {
  emit("close");
  resetQuiz();
};

const viewCourse = () => {
  emit("result", recommendation.value);
  navigateTo(recommendation.value.path);
  closeQuiz();
};

const restartQuiz = () => {
  resetQuiz();
  currentStep.value = 1;
};

const resetQuiz = () => {
  selectedRole.value = "";
  selectedGoal.value = "";
  selectedInterests.value = [];
};
</script>
