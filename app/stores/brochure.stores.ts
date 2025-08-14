import { defineStore } from 'pinia'
import type { $Fetch } from 'nitropack'
import { brochureRepository, type BrochureRequest, type BrochureRequestData } from '@/repository/brochure.repository'
import { useNuxtApp } from 'nuxt/app'
import { ref, computed } from 'vue'

interface BrochureFormData {
  name: string
  email: string
  phone: string
  courseInterest: string
  message: string
}

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
  total: number
  sent: number
  pending: number
  success_rate: number
}

export const useBrochureManagementStore = defineStore('brochure-management', () => {
  // State
  const brochureRequests = ref<BrochureRequest[]>([])
  const selectedBrochure = ref<BrochureRequest | null>(null)
  const pendingDeliveries = ref<BrochureRequest[]>([])
  const deliveryStats = ref<BrochureDeliveryStats | null>(null)
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

  // Actions
  const fetchBrochureRequests = async (resetOffset = false) => {
    if (resetOffset) {
      filters.value.offset = 0
    }

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

      return { success: true, data: response }
    } catch (err) {
      console.error('Error fetching brochure requests:', err)
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to fetch brochure requests'
      }
    }
  }

  const fetchBrochureById = async (id: number) => {
    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getBrochureRequestById(id)

      if (!response.success) {
        throw new Error(response.message || 'Brochure request not found')
      }

      selectedBrochure.value = response.data || null
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Error fetching brochure request:', err)
      selectedBrochure.value = null
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to fetch brochure request'
      }
    }
  }

  const fetchPendingDeliveries = async (limit = 50) => {
    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getPendingDeliveries({ limit })

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch pending deliveries')
      }

      pendingDeliveries.value = response.data || []
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Error fetching pending deliveries:', err)
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to fetch pending deliveries'
      }
    }
  }

  const fetchDeliveryStats = async () => {
    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getDeliveryStats()

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch delivery stats')
      }

      if (response.data) {
        deliveryStats.value = {
          ...response.data,
          success_rate: response.data.total > 0 ? Math.round((response.data.sent / response.data.total) * 100) : 0
        }
      } else {
        deliveryStats.value = null
      }
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Error fetching delivery stats:', err)
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to fetch delivery stats'
      }
    }
  }

  const searchBrochuresByContact = async (contactId: number) => {
    if (!contactId) {
      contactBrochures.value = []
      return { success: true, data: [] }
    }

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.getBrochureRequestsByContact(contactId)

      if (!response.success) {
        throw new Error(response.message || 'Failed to search brochure requests')
      }

      contactBrochures.value = response.data || []
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Error searching brochure requests by contact:', err)
      contactBrochures.value = []
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to search brochure requests'
      }
    }
  }

  const searchBrochuresByEmail = async (email: string) => {
    if (!email.trim()) {
      contactBrochures.value = []
      return { success: true, data: [] }
    }

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)
      const response = await repository.getAllBrochureRequests()

      if (!response.success) {
        throw new Error(response.message || 'Failed to search brochure requests')
      }

      // Filter brochures by contact email on frontend
      const filteredBrochures = (response.data || []).filter(
        brochure => brochure.contact?.email.toLowerCase().includes(email.toLowerCase())
      )

      contactBrochures.value = filteredBrochures
      return { success: true, data: filteredBrochures }
    } catch (err) {
      console.error('Error searching brochure requests by email:', err)
      contactBrochures.value = []
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to search brochure requests'
      }
    }
  }

  const resendBrochure = async (id: number) => {
    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      const response = await repository.resendBrochure(id)

      if (!response.success) {
        throw new Error(response.message || 'Failed to resend brochure')
      }

      return { success: true, data: response }
    } catch (err) {
      console.error('Error resending brochure:', err)
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to resend brochure'
      }
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
    pagination,
    filters,
    contactBrochures,

    // Actions
    fetchBrochureRequests,
    fetchBrochureById,
    fetchPendingDeliveries,
    fetchDeliveryStats,
    searchBrochuresByContact,
    searchBrochuresByEmail,
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

export const useBrochureStore = defineStore('brochure', () => {
  // Brochure form state
  const isBrochureModalOpen = ref(false)
  const brochureFormData = ref<BrochureFormData>({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  })
  const isBrochureSubmitting = ref(false)
  const hasBrochureSubmitted = ref(false)
  const brochureErrors = ref<Record<string, string>>({})

  // Brochure Modal Actions
  const openBrochureModal = () => {
    isBrochureModalOpen.value = true
    hasBrochureSubmitted.value = false
  }

  const closeBrochureModal = () => {
    isBrochureModalOpen.value = false
    resetBrochureForm()
  }

  // Brochure Form Validation
  const validateBrochureForm = (): boolean => {
    brochureErrors.value = {}
    let isValid = true

    // Name validation
    if (!brochureFormData.value.name.trim()) {
      brochureErrors.value.name = 'Name is required'
      isValid = false
    } else if (brochureFormData.value.name.trim().length < 2) {
      brochureErrors.value.name = 'Name must be at least 2 characters long'
      isValid = false
    } else if (!/^[a-zA-Z\s'.,-]+$/.test(brochureFormData.value.name.trim())) {
      brochureErrors.value.name = 'Name can only contain letters, spaces, and common punctuation'
      isValid = false
    }

    // Email validation
    if (!brochureFormData.value.email.trim()) {
      brochureErrors.value.email = 'Email is required'
      isValid = false
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(brochureFormData.value.email.trim())) {
      brochureErrors.value.email = 'Please enter a valid email address'
      isValid = false
    }

    // Phone validation - exactly 10 digits
    if (!brochureFormData.value.phone.trim()) {
      brochureErrors.value.phone = 'Phone number is required'
      isValid = false
    } else {
      const phoneDigits = brochureFormData.value.phone.replace(/\D/g, '')
      if (phoneDigits.length !== 10) {
        brochureErrors.value.phone = 'Phone number must be exactly 10 digits'
        isValid = false
      } else if (!/^[6-9]/.test(phoneDigits)) {
        brochureErrors.value.phone = 'Phone number must start with 6, 7, 8, or 9'
        isValid = false
      }
    }

    // Course interest validation
    const validCourses = [
      'plm-windchill',
      'siemens-teamcenter',
      'cloud-solutions',
      'web-development',
      'data-science',
      'mobile-development',
      'devops',
      'ai-ml',
      'cybersecurity',
      'cloud-computing',
      'other'
    ]

    if (!brochureFormData.value.courseInterest.trim()) {
      brochureErrors.value.courseInterest = 'Please select a course'
      isValid = false
    } else if (!validCourses.includes(brochureFormData.value.courseInterest)) {
      brochureErrors.value.courseInterest = 'Please select a valid course option'
      isValid = false
    }

    // Message validation (optional but with length limit)
    if (brochureFormData.value.message.trim().length > 500) {
      brochureErrors.value.message = 'Message must be less than 500 characters'
      isValid = false
    }

    return isValid
  }

  // Submit brochure request form
  const submitBrochureForm = async () => {
    if (!validateBrochureForm()) return false

    isBrochureSubmitting.value = true

    try {
      const { $api } = useNuxtApp()
      const repository = brochureRepository($api as $Fetch)

      // Prepare data for API
      const apiData: BrochureRequestData = {
        name: brochureFormData.value.name.trim(),
        email: brochureFormData.value.email.trim(),
        phone: brochureFormData.value.phone.replace(/\D/g, ''), // Remove non-digits
        course_interest: brochureFormData.value.courseInterest,
        message: brochureFormData.value.message.trim() || undefined
      }

      // Submit brochure request
      const response = await repository.submitBrochureRequest(apiData)

      if (!response.success) {
        throw new Error(response.message || 'Failed to submit brochure request')
      }

      return true
    } catch (error) {
      console.error('Brochure form submission error:', error)
      brochureErrors.value.submit = error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      return false
    } finally {
      isBrochureSubmitting.value = false
    }
  }

  // Reset brochure form
  const resetBrochureForm = () => {
    brochureFormData.value = {
      name: '',
      email: '',
      phone: '',
      courseInterest: '',
      message: ''
    }
    brochureErrors.value = {}
    isBrochureSubmitting.value = false
    hasBrochureSubmitted.value = false
  }

  return {
    // Brochure form state
    isBrochureModalOpen,
    brochureFormData,
    isBrochureSubmitting,
    hasBrochureSubmitted,
    brochureErrors,

    // Actions
    openBrochureModal,
    closeBrochureModal,
    validateBrochureForm,
    submitBrochureForm,
    resetBrochureForm
  }
})