import { defineStore } from 'pinia'
import { contactRepository, type Contact } from '@/repository/contact.repository'

interface ContactFilters {
  limit: number
  offset: number
  form_type?: 'contact' | 'brochure'
}

interface ContactPagination {
  limit: number
  offset: number
  total: number
}

export const useContactManagementStore = defineStore('contact-management', () => {
  // State
  const contacts = ref<Contact[]>([])
  const selectedContact = ref<Contact | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref<ContactPagination>({
    limit: 20,
    offset: 0,
    total: 0
  })

  // Filters
  const filters = ref<ContactFilters>({
    limit: 20,
    offset: 0,
    form_type: undefined
  })

  // Email search
  const emailSearchResults = ref<Contact[]>([])
  const isSearching = ref(false)
  const searchError = ref<string | null>(null)

  // Actions
  const fetchContacts = async (resetOffset = false) => {
    if (resetOffset) {
      filters.value.offset = 0
    }

    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api)
      
      const response = await repository.getAllContacts({
        limit: filters.value.limit,
        offset: filters.value.offset,
        form_type: filters.value.form_type
      })

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch contacts')
      }

      contacts.value = response.data || []
      
      if (response.pagination) {
        pagination.value = response.pagination
      }

      return true
    } catch (err) {
      console.error('Error fetching contacts:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch contacts'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const fetchContactById = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api)
      
      const response = await repository.getContactById(id)

      if (!response.success) {
        throw new Error(response.message || 'Contact not found')
      }

      selectedContact.value = response.data || null
      return true
    } catch (err) {
      console.error('Error fetching contact:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch contact'
      selectedContact.value = null
      return false
    } finally {
      isLoading.value = false
    }
  }

  const searchContactsByEmail = async (email: string) => {
    if (!email.trim()) {
      emailSearchResults.value = []
      return
    }

    isSearching.value = true
    searchError.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api)
      
      const response = await repository.getContactsByEmail(email.trim())

      if (!response.success) {
        throw new Error(response.message || 'Failed to search contacts')
      }

      emailSearchResults.value = response.data || []
      return true
    } catch (err) {
      console.error('Error searching contacts by email:', err)
      searchError.value = err instanceof Error ? err.message : 'Failed to search contacts'
      emailSearchResults.value = []
      return false
    } finally {
      isSearching.value = false
    }
  }

  // Filter actions
  const setFormTypeFilter = (formType: 'contact' | 'brochure' | undefined) => {
    filters.value.form_type = formType
    fetchContacts(true)
  }

  const setLimit = (limit: number) => {
    filters.value.limit = limit
    fetchContacts(true)
  }

  const nextPage = () => {
    if (filters.value.offset + filters.value.limit < pagination.value.total) {
      filters.value.offset += filters.value.limit
      fetchContacts()
    }
  }

  const prevPage = () => {
    if (filters.value.offset > 0) {
      filters.value.offset = Math.max(0, filters.value.offset - filters.value.limit)
      fetchContacts()
    }
  }

  const goToPage = (page: number) => {
    const newOffset = (page - 1) * filters.value.limit
    if (newOffset >= 0 && newOffset < pagination.value.total) {
      filters.value.offset = newOffset
      fetchContacts()
    }
  }

  // Reset functions
  const resetFilters = () => {
    filters.value = {
      limit: 20,
      offset: 0,
      form_type: undefined
    }
    fetchContacts()
  }

  const clearSelectedContact = () => {
    selectedContact.value = null
  }

  const clearEmailSearch = () => {
    emailSearchResults.value = []
    searchError.value = null
  }

  // Computed
  const currentPage = computed(() => Math.floor(filters.value.offset / filters.value.limit) + 1)
  const totalPages = computed(() => Math.ceil(pagination.value.total / filters.value.limit))
  const hasNextPage = computed(() => filters.value.offset + filters.value.limit < pagination.value.total)
  const hasPrevPage = computed(() => filters.value.offset > 0)

  return {
    // State
    contacts,
    selectedContact,
    isLoading,
    error,
    pagination,
    filters,
    emailSearchResults,
    isSearching,
    searchError,

    // Actions
    fetchContacts,
    fetchContactById,
    searchContactsByEmail,
    setFormTypeFilter,
    setLimit,
    nextPage,
    prevPage,
    goToPage,
    resetFilters,
    clearSelectedContact,
    clearEmailSearch,

    // Computed
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage
  }
})