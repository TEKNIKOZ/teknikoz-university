<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          Brochure Management
        </h1>
        <p class="text-gray-600">
          Manage and track all brochure requests and email deliveries
        </p>
      </div>

      <!-- Check if user is authenticated and has admin access -->
      <div
        v-if="!authStore.isAuthenticated"
        class="bg-white rounded-lg shadow-sm p-8 text-center"
      >
        <Icon name="mdi:lock" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Authentication Required
        </h2>
        <p class="text-gray-600 mb-6">
          Please sign in to access brochure management
        </p>
        <NuxtLink
          to="/login"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand/90"
        >
          Sign In
        </NuxtLink>
      </div>

      <!-- Main Content -->
      <div v-else class="space-y-6">
        <!-- Stats Cards -->
        <div
          v-if="brochureStore.deliveryStats"
          class="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <Icon
                name="mdi:file-document-multiple"
                class="w-8 h-8 text-blue-500"
              />
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Total Requests</p>
                <p class="text-2xl font-semibold text-gray-900">
                  {{ brochureStore.deliveryStats.total }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <Icon name="mdi:email-check" class="w-8 h-8 text-green-500" />
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Emails Sent</p>
                <p class="text-2xl font-semibold text-gray-900">
                  {{ brochureStore.deliveryStats.sent }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <Icon name="heroicons:clock" class="w-8 h-8 text-yellow-500" />
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Pending</p>
                <p class="text-2xl font-semibold text-gray-900">
                  {{ brochureStore.deliveryStats.pending }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center">
              <Icon
                name="heroicons:chart-bar"
                class="w-8 h-8 text-purple-500"
              />
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Success Rate</p>
                <p class="text-2xl font-semibold text-gray-900">
                  {{ brochureStore.deliveryStats.success_rate }}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Filters and Search -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Course Type Filter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Course Type</label
              >
              <select
                v-model="brochureStore.filters.course_type"
                @change="
                  brochureStore.setCourseTypeFilter(
                    brochureStore.filters.course_type
                  )
                "
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              >
                <option :value="undefined">All Types</option>
                <option value="plm-windchill">PLM Windchill</option>
                <option value="siemens-teamcenter">Siemens Teamcenter</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="devops">DevOps</option>
                <option value="ai-ml">AI/ML</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Results per page -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Per Page</label
              >
              <select
                v-model="brochureStore.filters.limit"
                @change="brochureStore.setLimit(brochureStore.filters.limit)"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              >
                <option :value="10">10</option>
                <option :value="20">20</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>

            <!-- Contact Email Search -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Search by Contact Email</label
              >
              <div class="flex">
                <input
                  v-model="contactEmailSearch"
                  type="email"
                  placeholder="Enter contact email..."
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                  @keyup.enter="handleContactSearch"
                />
                <button
                  @click="handleContactSearch"
                  :disabled="isSearching"
                  class="px-4 py-2 bg-brand text-white rounded-r-md hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon
                    :name="isSearching ? 'mdi:loading' : 'mdi:magnify'"
                    :class="['w-5 h-5', isSearching ? 'animate-spin' : '']"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-4 flex justify-between items-center">
            <div class="flex space-x-4">
              <button
                @click="brochureStore.resetFilters"
                class="text-sm text-gray-600 hover:text-brand"
              >
                Reset Filters
              </button>
              <button
                @click="loadPendingDeliveries"
                class="text-sm text-gray-600 hover:text-brand"
              >
                View Pending Deliveries
              </button>
            </div>
            <div class="text-sm text-gray-600">
              Total: {{ brochureStore.pagination.total }} requests
            </div>
          </div>
        </div>

        <!-- Contact Search Results -->
        <div v-if="showContactResults" class="bg-white rounded-lg shadow-sm">
          <div
            class="p-4 border-b border-gray-200 flex justify-between items-center"
          >
            <h3 class="text-lg font-medium text-gray-900">
              Contact Search Results ({{
                brochureStore.contactBrochures.length
              }})
            </h3>
            <button
              @click="clearContactSearch"
              class="text-sm text-gray-600 hover:text-brand"
            >
              Clear Search
            </button>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              v-for="brochure in brochureStore.contactBrochures"
              :key="brochure.id"
              class="p-4 cursor-pointer"
              @click="viewBrochure(brochure.id)"
            >
              <BrochureCard :brochure="brochure" />
            </div>
          </div>
        </div>

        <!-- Pending Deliveries -->
        <div v-if="showPendingDeliveries" class="bg-white rounded-lg shadow-sm">
          <div
            class="p-4 border-b border-gray-200 flex justify-between items-center"
          >
            <h3 class="text-lg font-medium text-gray-900">
              Pending Email Deliveries ({{
                brochureStore.pendingDeliveries.length
              }})
            </h3>
            <button
              @click="showPendingDeliveries = false"
              class="text-sm text-gray-600 hover:text-brand"
            >
              Hide Pending
            </button>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              v-for="brochure in brochureStore.pendingDeliveries"
              :key="brochure.id"
              class="p-4 hover:bg-gray-50 cursor-pointer"
              @click="viewBrochure(brochure.id)"
            >
              <BrochureCard :brochure="brochure" />
            </div>
          </div>
        </div>

        <!-- Brochure Requests List -->
        <div
          v-if="!showContactResults && !showPendingDeliveries"
          class="bg-white rounded-lg shadow-sm"
        >
          <!-- Loading State -->
          <div v-if="isLoading" class="p-8 text-center">
            <Icon
              name="mdi:loading"
              class="w-8 h-8 text-brand animate-spin mx-auto mb-4"
            />
            <p class="text-gray-600">Loading brochure requests...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="p-8 text-center">
            <Icon
              name="mdi:alert-circle"
              class="w-8 h-8 text-red-500 mx-auto mb-4"
            />
            <p class="text-red-600 mb-4">{{ error }}</p>
            <button
              @click="fetchBrochureData()"
              class="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90"
            >
              Retry
            </button>
          </div>

          <!-- Brochure Requests List -->
          <div v-else-if="brochureStore.brochureRequests.length > 0">
            <div class="divide-y divide-gray-200">
              <div
                v-for="brochure in brochureStore.brochureRequests"
                :key="brochure.id"
                class="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                @click="viewBrochure(brochure.id)"
              >
                <BrochureCard :brochure="brochure" />
              </div>
            </div>

            <!-- Pagination -->
            <div class="p-4 border-t border-gray-200">
              <Pagination
                :current-page="brochureStore.currentPage"
                :total-items="brochureStore.pagination.total"
                :per-page="brochureStore.filters.limit"
                @page-change="brochureStore.goToPage"
              />
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="p-8 text-center">
            <Icon
              name="mdi:file-document-outline"
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
            />
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              No brochure requests found
            </h3>
            <p class="text-gray-600 mb-4">
              No requests match your current filters
            </p>
            <button
              @click="brochureStore.resetFilters"
              class="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <!-- Brochure Detail Modal -->
        <BrochureDetailModal
          v-if="showBrochureDetail"
          :brochure="brochureStore.selectedBrochure"
          :is-resending="isResending"
          @close="closeBrochureDetail"
          @resend="handleResendBrochure"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBrochureManagementStore } from "@/stores/brochure.stores";
import { useAuthStore } from "@/stores/auth.stores";

const brochureStore = useBrochureManagementStore();
const authStore = useAuthStore();

// Local state
const contactEmailSearch = ref("");
const showBrochureDetail = ref(false);
const showPendingDeliveries = ref(false);
const isResending = ref(false);
const isLoading = ref(false);
const error = ref<string | null>(null);
const isSearching = ref(false);
const searchError = ref<string | null>(null);

// Computed
const showContactResults = computed(
  () => brochureStore.contactBrochures.length > 0 || searchError.value
);

// Methods
const handleContactSearch = async () => {
  if (contactEmailSearch.value.trim()) {
    isSearching.value = true;
    searchError.value = null;
    const result = await brochureStore.searchBrochuresByEmail(
      contactEmailSearch.value.trim()
    );
    if (!result.success) {
      searchError.value = result.error || "Failed to search brochure requests";
    }
    isSearching.value = false;
  }
};

const clearContactSearch = () => {
  contactEmailSearch.value = "";
  searchError.value = null;
  brochureStore.clearContactSearch();
};

const loadPendingDeliveries = async () => {
  isLoading.value = true;
  error.value = null;
  const result = await brochureStore.fetchPendingDeliveries();
  if (result.success) {
    showPendingDeliveries.value = true;
  } else {
    error.value = result.error || "Failed to fetch pending deliveries";
  }
  isLoading.value = false;
};

const viewBrochure = async (id: number) => {
  const result = await brochureStore.fetchBrochureById(id);
  if (result.success) {
    showBrochureDetail.value = true;
  }
};

const closeBrochureDetail = () => {
  showBrochureDetail.value = false;
  brochureStore.clearSelectedBrochure();
};

const handleResendBrochure = async (id: number) => {
  isResending.value = true;
  try {
    const result = await brochureStore.resendBrochure(id);
    if (result.success) {
      // Refresh the brochure requests and current brochure details
      await fetchBrochureData();
      await brochureStore.fetchBrochureById(id);
    }
  } finally {
    isResending.value = false;
  }
};

// Data fetching function
const fetchBrochureData = async () => {
  isLoading.value = true;
  error.value = null;

  const [brochuresResult, statsResult] = await Promise.all([
    brochureStore.fetchBrochureRequests(),
    brochureStore.fetchDeliveryStats(),
  ]);

  if (!brochuresResult.success) {
    error.value = brochuresResult.error || "Failed to fetch brochure requests";
  }

  if (!statsResult.success) {
    console.error("Failed to fetch delivery stats:", statsResult.error);
  }

  isLoading.value = false;
};

// Initialize data
onMounted(async () => {
  if (authStore.isAuthenticated) {
    await fetchBrochureData();
  }
});

// SEO
useHead({
  title: "Brochure Management - Teknikoz University",
  meta: [
    {
      name: "description",
      content:
        "Manage and track all brochure requests and email deliveries for Teknikoz University",
    },
  ],
});
</script>
