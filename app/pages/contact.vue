<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Contact Management</h1>
        <p class="text-gray-600">Manage and view all contact submissions</p>
      </div>

      <!-- Check if user is authenticated and has admin access -->
      <div v-if="!authStore.isAuthenticated" class="bg-white rounded-lg shadow-sm p-8 text-center">
        <Icon name="mdi:lock" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Authentication Required</h2>
        <p class="text-gray-600 mb-6">Please sign in to access contact management</p>
        <NuxtLink
          to="/login"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand/90"
        >
          Sign In
        </NuxtLink>
      </div>

      <!-- Main Content -->
      <div v-else class="space-y-6">
        <!-- Filters and Search -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Form Type Filter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Form Type</label>
              <select
                v-model="contactStore.filters.form_type"
                @change="contactStore.setFormTypeFilter(contactStore.filters.form_type)"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              >
                <option :value="undefined">All Types</option>
                <option value="contact">Contact</option>
                <option value="brochure">Brochure</option>
              </select>
            </div>

            <!-- Results per page -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Per Page</label>
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
              <label class="block text-sm font-medium text-gray-700 mb-2">Search by Email</label>
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
                  :disabled="contactStore.isSearching"
                  class="px-4 py-2 bg-brand text-white rounded-r-md hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon 
                    :name="contactStore.isSearching ? 'mdi:loading' : 'mdi:magnify'" 
                    :class="['w-5 h-5', contactStore.isSearching ? 'animate-spin' : '']"
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
              Total: {{ contactStore.pagination.total }} contacts
            </div>
          </div>
        </div>

        <!-- Email Search Results -->
        <div v-if="showEmailResults" class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-900">
              Email Search Results ({{ contactStore.emailSearchResults.length }})
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
              @click="viewContact(contact.id)"
            >
              <ContactCard :contact="contact" />
            </div>
          </div>
        </div>

        <!-- Contacts List -->
        <div v-if="!showEmailResults" class="bg-white rounded-lg shadow-sm">
          <!-- Loading State -->
          <div v-if="contactStore.isLoading" class="p-8 text-center">
            <Icon name="mdi:loading" class="w-8 h-8 text-brand animate-spin mx-auto mb-4" />
            <p class="text-gray-600">Loading contacts...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="contactStore.error" class="p-8 text-center">
            <Icon name="mdi:alert-circle" class="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p class="text-red-600 mb-4">{{ contactStore.error }}</p>
            <button
              @click="contactStore.fetchContacts()"
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
                class="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                @click="viewContact(contact.id)"
              >
                <ContactCard :contact="contact" />
              </div>
            </div>

            <!-- Pagination -->
            <div class="p-4 border-t border-gray-200 flex items-center justify-between">
              <div class="text-sm text-gray-600">
                Showing {{ contactStore.filters.offset + 1 }} to 
                {{ Math.min(contactStore.filters.offset + contactStore.filters.limit, contactStore.pagination.total) }}
                of {{ contactStore.pagination.total }} contacts
              </div>
              
              <div class="flex items-center space-x-2">
                <button
                  @click="contactStore.prevPage()"
                  :disabled="!contactStore.hasPrevPage"
                  class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <span class="text-sm text-gray-600">
                  Page {{ contactStore.currentPage }} of {{ contactStore.totalPages }}
                </span>
                
                <button
                  @click="contactStore.nextPage()"
                  :disabled="!contactStore.hasNextPage"
                  class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="p-8 text-center">
            <Icon name="mdi:email-outline" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
            <p class="text-gray-600 mb-4">No contacts match your current filters</p>
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
</template>

<script setup lang="ts">
import { useContactManagementStore } from '@/stores/contact-management'
import { useAuthStore } from '@/stores/auth.stores'

const contactStore = useContactManagementStore()
const authStore = useAuthStore()

// Local state
const emailSearch = ref('')
const showContactDetail = ref(false)

// Computed
const showEmailResults = computed(() => 
  contactStore.emailSearchResults.length > 0 || contactStore.searchError
)

// Methods
const handleEmailSearch = async () => {
  if (emailSearch.value.trim()) {
    await contactStore.searchContactsByEmail(emailSearch.value)
  }
}

const clearEmailSearch = () => {
  emailSearch.value = ''
  contactStore.clearEmailSearch()
}

const viewContact = async (id: string) => {
  await contactStore.fetchContactById(id)
  showContactDetail.value = true
}

const closeContactDetail = () => {
  showContactDetail.value = false
  contactStore.clearSelectedContact()
}

// Initialize data
onMounted(async () => {
  if (authStore.isAuthenticated) {
    await contactStore.fetchContacts()
  }
})

// SEO
useHead({
  title: "Contact Management - Teknikoz University",
  meta: [
    {
      name: "description",
      content: "Manage and view all contact submissions for Teknikoz University",
    },
  ],
})
</script>
