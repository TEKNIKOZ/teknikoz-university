import { defineStore } from 'pinia'
import { brochureRepository, type BrochureRequest } from '@/repository/contact.repository'
import type { $Fetch } from 'nitropack'

interface BrochureFilters {
  limit: number
  offset: number
  course_type?: string
}

interface BrochurePagination {
  limit: number
  offset: number
  total: number
}

interface BrochureDeliveryStats {
  total_requests: number
  emails_sent: number
  emails_pending: number
  success_rate: number
}

export const useBrochureManagementStore = defineStore('brochure-management', () => {
  // State
  const brochureRequests = ref<BrochureRequest[]>([])
  const selectedBrochure = ref<BrochureRequest | null>(null)
  const pendingDeliveries = ref<BrochureRequest[]>([])
  const deliveryStats = ref<BrochureDeliveryStats | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref<BrochurePagination>({
    limit: 20,
    offset: 0,
    total: 0
  })

  // Filters
  const filters = ref<BrochureFilters>({
    limit: 20,
    offset: 0,
    course_type: undefined
  })

  // Contact search
  const contactBrochures = ref<BrochureRequest[]>([])
  const isSearching = ref(false)
  const searchError = ref<string | null>(null)

  // Actions
  const fetchBrochureRequests = async (resetOffset = false) => {
    if (resetOffset) {
      filters.value.offset = 0
    }

    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getAllBrochureRequests({
        limit: filters.value.limit,
        offset: filters.value.offset,
        course_type: filters.value.course_type
      })

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch brochure requests')
      }

      brochureRequests.value = response.data || []

      if (response.pagination) {
        pagination.value = response.pagination
      }

      return true
    } catch (err) {
      console.error('Error fetching brochure requests:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch brochure requests'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const fetchBrochureById = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getBrochureRequestById(id)

      if (!response.success) {
        throw new Error(response.message || 'Brochure request not found')
      }

      selectedBrochure.value = response.data || null
      return true
    } catch (err) {
      console.error('Error fetching brochure request:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch brochure request'
      selectedBrochure.value = null
      return false
    } finally {
      isLoading.value = false
    }
  }

  const fetchPendingDeliveries = async (limit = 50) => {
    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getPendingDeliveries({ limit })

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch pending deliveries')
      }

      pendingDeliveries.value = response.data || []
      return true
    } catch (err) {
      console.error('Error fetching pending deliveries:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch pending deliveries'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const fetchDeliveryStats = async () => {
    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getDeliveryStats()

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch delivery stats')
      }

      deliveryStats.value = response.data || null
      return true
    } catch (err) {
      console.error('Error fetching delivery stats:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch delivery stats'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const searchBrochuresByContact = async (contactId: string) => {
    if (!contactId.trim()) {
      contactBrochures.value = []
      return
    }

    isSearching.value = true
    searchError.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getBrochureRequestsByContact(contactId.trim())

      if (!response.success) {
        throw new Error(response.message || 'Failed to search brochure requests')
      }

      contactBrochures.value = response.data || []
      return true
    } catch (err) {
      console.error('Error searching brochure requests by contact:', err)
      searchError.value = err instanceof Error ? err.message : 'Failed to search brochure requests'
      contactBrochures.value = []
      return false
    } finally {
      isSearching.value = false
    }
  }

  const resendBrochure = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.resendBrochure(id)

      if (!response.success) {
        throw new Error(response.message || 'Failed to resend brochure')
      }

      // Refresh the brochure requests after resending
      await fetchBrochureRequests()
      return true
    } catch (err) {
      console.error('Error resending brochure:', err)
      error.value = err instanceof Error ? err.message : 'Failed to resend brochure'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Filter actions
  const setCourseTypeFilter = (courseType: string | undefined) => {
    filters.value.course_type = courseType
    fetchBrochureRequests(true)
  }

  const setLimit = (limit: number) => {
    filters.value.limit = limit
    fetchBrochureRequests(true)
  }

  const nextPage = () => {
    if (filters.value.offset + filters.value.limit < pagination.value.total) {
      filters.value.offset += filters.value.limit
      fetchBrochureRequests()
    }
  }

  const prevPage = () => {
    if (filters.value.offset > 0) {
      filters.value.offset = Math.max(0, filters.value.offset - filters.value.limit)
      fetchBrochureRequests()
    }
  }

  const goToPage = (page: number) => {
    const newOffset = (page - 1) * filters.value.limit
    if (newOffset >= 0 && newOffset < pagination.value.total) {
      filters.value.offset = newOffset
      fetchBrochureRequests()
    }
  }

  // Reset functions
  const resetFilters = () => {
    filters.value = {
      limit: 20,
      offset: 0,
      course_type: undefined
    }
    fetchBrochureRequests()
  }

  const clearSelectedBrochure = () => {
    selectedBrochure.value = null
  }

  const clearContactSearch = () => {
    contactBrochures.value = []
    searchError.value = null
  }

  // Computed
  const currentPage = computed(() => Math.floor(filters.value.offset / filters.value.limit) + 1)
  const totalPages = computed(() => Math.ceil(pagination.value.total / filters.value.limit))
  const hasNextPage = computed(() => filters.value.offset + filters.value.limit < pagination.value.total)
  const hasPrevPage = computed(() => filters.value.offset > 0)

  return {
    // State
    brochureRequests,
    selectedBrochure,
    pendingDeliveries,
    deliveryStats,
    isLoading,
    error,
    pagination,
    filters,
    contactBrochures,
    isSearching,
    searchError,

    // Actions
    fetchBrochureRequests,
    fetchBrochureById,
    fetchPendingDeliveries,
    fetchDeliveryStats,
    searchBrochuresByContact,
    resendBrochure,
    setCourseTypeFilter,
    setLimit,
    nextPage,
    prevPage,
    goToPage,
    resetFilters,
    clearSelectedBrochure,
    clearContactSearch,

    // Computed
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage
  }
})