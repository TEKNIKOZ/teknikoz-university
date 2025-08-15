<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <!-- Simple Header -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">
                Contact Management
              </h1>
              <p class="text-gray-600">
                Manage and view all contact submissions
              </p>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-500">Total Contacts</div>
              <div class="text-2xl font-semibold text-brand">
                {{ contactStore.pagination.total || 0 }}
              </div>
            </div>
          </div>
        </div>

        <!-- Authentication Required -->
        <div
          v-if="!authStore.isAuthenticated"
          class="bg-white rounded-lg shadow-sm p-8 text-center"
        >
          <Icon name="mdi:lock" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 class="text-xl font-semibold text-gray-900 mb-2">
            Authentication Required
          </h2>
          <p class="text-gray-600 mb-6">
            Please sign in to access contact management
          </p>
          <NuxtLink
            to="/login"
            class="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand/90 transition-colors"
          >
            Login
          </NuxtLink>
        </div>

        <!-- Main Content -->
        <div v-else class="space-y-6">
          <!-- Filters and Search -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <!-- Form Type Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Form Type
                </label>
                <select
                  v-model="contactStore.filters.form_type"
                  @change="
                    contactStore.setFormTypeFilter(
                      contactStore.filters.form_type
                    )
                  "
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                >
                  <option :value="undefined">All Types</option>
                  <option value="contact">Contact</option>
                  <option value="brochure">Brochure</option>
                </select>
              </div>

              <!-- Results per page -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Per Page
                </label>
                <select
                  v-model="contactStore.filters.limit"
                  @change="contactStore.setLimit(contactStore.filters.limit)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                >
                  <option :value="10">10</option>
                  <option :value="20">20</option>
                  <option :value="50">50</option>
                  <option :value="100">100</option>
                </select>
              </div>

              <!-- Email Search -->
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Search by Email
                </label>
                <div class="flex">
                  <input
                    v-model="emailSearch"
                    type="email"
                    placeholder="Enter email address..."
                    class="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                    @keyup.enter="handleEmailSearch"
                  />
                  <button
                    @click="handleEmailSearch"
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

            <!-- Reset Filters -->
            <div class="mt-4 flex justify-between items-center">
              <button
                @click="contactStore.resetFilters"
                class="text-sm text-gray-600 hover:text-brand"
              >
                Reset Filters
              </button>
              <div class="text-sm text-gray-600">
                Total: {{ contactStore.pagination.total || 0 }} contacts
              </div>
            </div>
          </div>

          <!-- Email Search Results -->
          <div v-if="showEmailResults" class="bg-white rounded-lg shadow-sm">
            <div
              class="p-4 border-b border-gray-200 flex justify-between items-center"
            >
              <h3 class="text-lg font-medium text-gray-900">
                Email Search Results ({{
                  contactStore.emailSearchResults.length
                }})
              </h3>
              <button
                @click="clearEmailSearch"
                class="text-sm text-gray-600 hover:text-brand"
              >
                Clear Search
              </button>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                v-for="contact in contactStore.emailSearchResults"
                :key="contact.id"
                class="p-4 hover:bg-gray-50 cursor-pointer"
                @click="viewContact(contact.id.toString())"
              >
                <ContactCard :contact="contact" />
              </div>
            </div>
          </div>

          <!-- Contacts List -->
          <div v-if="!showEmailResults" class="bg-white rounded-lg shadow-sm">
            <!-- Loading State -->
            <div v-if="isLoading" class="p-8 text-center">
              <Icon
                name="mdi:loading"
                class="w-8 h-8 text-brand animate-spin mx-auto mb-4"
              />
              <p class="text-gray-600">Loading contacts...</p>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="p-8 text-center">
              <Icon
                name="mdi:alert-circle"
                class="w-8 h-8 text-red-500 mx-auto mb-4"
              />
              <p class="text-red-600 mb-4">{{ error }}</p>
              <button
                @click="fetchContactData()"
                class="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90"
              >
                Retry
              </button>
            </div>

            <!-- Contacts List -->
            <div v-else-if="contactStore.contacts.length > 0">
              <div class="divide-y divide-gray-200">
                <div
                  v-for="contact in contactStore.contacts"
                  :key="contact.id"
                  class="p-4 cursor-pointer transition-colors"
                  @click="viewContact(contact.id.toString())"
                >
                  <ContactCard :contact="contact" />
                </div>
              </div>

              <!-- Pagination -->
              <div class="p-4 border-t border-gray-200">
                <Pagination
                  :current-page="contactStore.currentPage"
                  :total-items="contactStore.pagination.total"
                  :per-page="contactStore.filters.limit"
                  @page-change="contactStore.goToPage"
                />
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="p-8 text-center">
              <Icon
                name="mdi:email-outline"
                class="w-16 h-16 text-gray-400 mx-auto mb-4"
              />
              <h3 class="text-lg font-medium text-gray-900 mb-2">
                No contacts found
              </h3>
              <p class="text-gray-600 mb-4">
                No contacts match your current filters
              </p>
              <button
                @click="contactStore.resetFilters"
                class="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand/90"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <!-- Contact Detail Modal -->
          <ContactDetailModal
            v-if="showContactDetail"
            :contact="contactStore.selectedContact"
            @close="closeContactDetail"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useContactManagementStore } from "@/stores/contact.stores";
import { useAuthStore } from "@/stores/auth.stores";
import { useHead } from "nuxt/app";
const contactStore = useContactManagementStore();
const authStore = useAuthStore();

// Local state
const emailSearch = ref("");
const showContactDetail = ref(false);
const isLoading = ref(false);
const error = ref<string | null>(null);
const isSearching = ref(false);
const searchError = ref<string | null>(null);

// Computed
const showEmailResults = computed(
  () => contactStore.emailSearchResults.length > 0 || searchError.value
);

// Methods
const handleEmailSearch = async () => {
  if (emailSearch.value.trim()) {
    isSearching.value = true;
    searchError.value = null;
    const result = await contactStore.searchContactsByEmail(emailSearch.value);
    if (!result.success) {
      searchError.value = result.error || "Failed to search contacts";
    }
    isSearching.value = false;
  }
};

const clearEmailSearch = () => {
  emailSearch.value = "";
  searchError.value = null;
  contactStore.clearEmailSearch();
};

const viewContact = async (id: string) => {
  const result = await contactStore.fetchContactById(Number(id));
  if (result.success) {
    showContactDetail.value = true;
  }
};

const closeContactDetail = () => {
  showContactDetail.value = false;
  contactStore.clearSelectedContact();
};

// Data fetching function
const fetchContactData = async () => {
  isLoading.value = true;
  error.value = null;

  const result = await contactStore.fetchContacts();

  if (!result.success) {
    error.value = result.error || "Failed to fetch contacts";
  }

  isLoading.value = false;
};

// Initialize data
onMounted(async () => {
  if (authStore.isAuthenticated) {
    await fetchContactData();
  }
});

// SEO
useHead({
  title: "Contact Management - Teknikoz E-Learning",
  meta: [
    {
      name: "description",
      content:
        "Manage and view all contact submissions for Teknikoz E-Learning",
    },
  ],
});
</script>
