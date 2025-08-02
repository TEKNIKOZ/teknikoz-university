import { defineStore } from 'pinia'
import type { $Fetch } from 'nitropack'
import { contactRepository, type Contact, type ContactFormData as ApiContactFormData } from '@/repository/contact.repository'

interface ContactFormData {
  name: string
  email: string
  phone: string
  courseInterest: string
  message: string
}

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
  // Management State
  const contacts = ref<Contact[]>([])
  const selectedContact = ref<Contact | null>(null)
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

  // Contact Form State
  const isContactModalOpen = ref(false)
  const contactFormData = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  })
  const isContactSubmitting = ref(false)
  const hasContactSubmitted = ref(false)
  const contactErrors = ref<Record<string, string>>({})

  // Contact Modal Actions
  const openContactModal = () => {
    isContactModalOpen.value = true
    hasContactSubmitted.value = false
  }

  const closeContactModal = () => {
    isContactModalOpen.value = false
    resetContactForm()
  }

  // Contact Form Validation
  const validateContactForm = (): boolean => {
    contactErrors.value = {}
    let isValid = true

    // Name validation
    if (!contactFormData.value.name.trim()) {
      contactErrors.value.name = 'Name is required'
      isValid = false
    } else if (contactFormData.value.name.trim().length < 2) {
      contactErrors.value.name = 'Name must be at least 2 characters long'
      isValid = false
    } else if (!/^[a-zA-Z\s'.,-]+$/.test(contactFormData.value.name.trim())) {
      contactErrors.value.name = 'Name can only contain letters, spaces, and common punctuation'
      isValid = false
    }

    // Email validation
    if (!contactFormData.value.email.trim()) {
      contactErrors.value.email = 'Email is required'
      isValid = false
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contactFormData.value.email.trim())) {
      contactErrors.value.email = 'Please enter a valid email address'
      isValid = false
    }

    // Phone validation - exactly 10 digits
    if (!contactFormData.value.phone.trim()) {
      contactErrors.value.phone = 'Phone number is required'
      isValid = false
    } else {
      const phoneDigits = contactFormData.value.phone.replace(/\D/g, '')
      if (phoneDigits.length !== 10) {
        contactErrors.value.phone = 'Phone number must be exactly 10 digits'
        isValid = false
      } else if (!/^[6-9]/.test(phoneDigits)) {
        contactErrors.value.phone = 'Phone number must start with 6, 7, 8, or 9'
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

    if (!contactFormData.value.courseInterest.trim()) {
      contactErrors.value.courseInterest = 'Please select a course'
      isValid = false
    } else if (!validCourses.includes(contactFormData.value.courseInterest)) {
      contactErrors.value.courseInterest = 'Please select a valid course option'
      isValid = false
    }

    // Message validation (optional but with length limit)
    if (contactFormData.value.message.trim().length > 500) {
      contactErrors.value.message = 'Message must be less than 500 characters'
      isValid = false
    }

    return isValid
  }

  // Submit contact form
  const submitContactForm = async () => {
    if (!validateContactForm()) return false

    isContactSubmitting.value = true

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api as $Fetch)

      // Prepare data for API
      const apiData: ApiContactFormData = {
        name: contactFormData.value.name.trim(),
        email: contactFormData.value.email.trim(),
        phone: contactFormData.value.phone.replace(/\D/g, ''), // Remove non-digits
        course_interest: contactFormData.value.courseInterest,
        message: contactFormData.value.message.trim() || undefined,
        form_type: 'contact'
      }

      // Submit contact form
      const response = await repository.submitContact(apiData)

      if (!response.success) {
        throw new Error(response.message || 'Failed to submit contact form')
      }

      return true
    } catch (error) {
      console.error('Contact form submission error:', error)
      contactErrors.value.submit = error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      return false
    } finally {
      isContactSubmitting.value = false
    }
  }

  // Reset contact form
  const resetContactForm = () => {
    contactFormData.value = {
      name: '',
      email: '',
      phone: '',
      courseInterest: '',
      message: ''
    }
    contactErrors.value = {}
    isContactSubmitting.value = false
    hasContactSubmitted.value = false
  }

  // Management Actions
  const fetchContacts = async (resetOffset = false) => {
    if (resetOffset) {
      filters.value.offset = 0
    }

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api as $Fetch)

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

      return { success: true, data: response }
    } catch (err) {
      console.error('Error fetching contacts:', err)
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to fetch contacts'
      }
    }
  }

  const fetchContactById = async (id: number) => {
    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api as $Fetch)

      const response = await repository.getContactById(id)

      if (!response.success) {
        throw new Error(response.message || 'Contact not found')
      }

      selectedContact.value = response.data || null
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Error fetching contact:', err)
      selectedContact.value = null
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to fetch contact'
      }
    }
  }

  const searchContactsByEmail = async (email: string) => {
    if (!email.trim()) {
      emailSearchResults.value = []
      return { success: true, data: [] }
    }

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api as $Fetch)

      const response = await repository.getContactsByEmail(email.trim())

      if (!response.success) {
        throw new Error(response.message || 'Failed to search contacts')
      }

      emailSearchResults.value = response.data || []
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Error searching contacts by email:', err)
      emailSearchResults.value = []
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to search contacts'
      }
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
  }

  // Computed
  const currentPage = computed(() => Math.floor(filters.value.offset / filters.value.limit) + 1)
  const totalPages = computed(() => Math.ceil(pagination.value.total / filters.value.limit))
  const hasNextPage = computed(() => filters.value.offset + filters.value.limit < pagination.value.total)
  const hasPrevPage = computed(() => filters.value.offset > 0)

  return {
    // Management State
    contacts,
    selectedContact,
    pagination,
    filters,
    emailSearchResults,

    // Contact Form State
    isContactModalOpen,
    contactFormData,
    isContactSubmitting,
    hasContactSubmitted,
    contactErrors,

    // Contact Form Actions
    openContactModal,
    closeContactModal,
    validateContactForm,
    submitContactForm,
    resetContactForm,

    // Management Actions
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

export const useContactStore = defineStore('contact', () => {
  // Contact form state
  const isContactModalOpen = ref(false)
  const contactFormData = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  })
  const isContactSubmitting = ref(false)
  const hasContactSubmitted = ref(false)
  const contactErrors = ref<Record<string, string>>({})

  // Contact Modal Actions
  const openContactModal = () => {
    isContactModalOpen.value = true
    hasContactSubmitted.value = false
  }

  const closeContactModal = () => {
    isContactModalOpen.value = false
    resetContactForm()
  }

  // Contact Form Validation
  const validateContactForm = (): boolean => {
    contactErrors.value = {}
    let isValid = true

    // Name validation
    if (!contactFormData.value.name.trim()) {
      contactErrors.value.name = 'Name is required'
      isValid = false
    } else if (contactFormData.value.name.trim().length < 2) {
      contactErrors.value.name = 'Name must be at least 2 characters long'
      isValid = false
    } else if (!/^[a-zA-Z\s'.,-]+$/.test(contactFormData.value.name.trim())) {
      contactErrors.value.name = 'Name can only contain letters, spaces, and common punctuation'
      isValid = false
    }

    // Email validation
    if (!contactFormData.value.email.trim()) {
      contactErrors.value.email = 'Email is required'
      isValid = false
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contactFormData.value.email.trim())) {
      contactErrors.value.email = 'Please enter a valid email address'
      isValid = false
    }

    // Phone validation - exactly 10 digits
    if (!contactFormData.value.phone.trim()) {
      contactErrors.value.phone = 'Phone number is required'
      isValid = false
    } else {
      const phoneDigits = contactFormData.value.phone.replace(/\D/g, '')
      if (phoneDigits.length !== 10) {
        contactErrors.value.phone = 'Phone number must be exactly 10 digits'
        isValid = false
      } else if (!/^[6-9]/.test(phoneDigits)) {
        contactErrors.value.phone = 'Phone number must start with 6, 7, 8, or 9'
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

    if (!contactFormData.value.courseInterest.trim()) {
      contactErrors.value.courseInterest = 'Please select a course'
      isValid = false
    } else if (!validCourses.includes(contactFormData.value.courseInterest)) {
      contactErrors.value.courseInterest = 'Please select a valid course option'
      isValid = false
    }

    // Message validation (optional but with length limit)
    if (contactFormData.value.message.trim().length > 500) {
      contactErrors.value.message = 'Message must be less than 500 characters'
      isValid = false
    }

    return isValid
  }

  // Submit contact form
  const submitContactForm = async () => {
    if (!validateContactForm()) return false

    isContactSubmitting.value = true

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api as $Fetch)

      // Prepare data for API
      const apiData: ApiContactFormData = {
        name: contactFormData.value.name.trim(),
        email: contactFormData.value.email.trim(),
        phone: contactFormData.value.phone.replace(/\D/g, ''), // Remove non-digits
        course_interest: contactFormData.value.courseInterest,
        message: contactFormData.value.message.trim() || undefined,
        form_type: 'contact'
      }

      // Submit contact form
      const response = await repository.submitContact(apiData)

      if (!response.success) {
        throw new Error(response.message || 'Failed to submit contact form')
      }

      return true
    } catch (error) {
      console.error('Contact form submission error:', error)
      contactErrors.value.submit = error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      return false
    } finally {
      isContactSubmitting.value = false
    }
  }

  // Reset contact form
  const resetContactForm = () => {
    contactFormData.value = {
      name: '',
      email: '',
      phone: '',
      courseInterest: '',
      message: ''
    }
    contactErrors.value = {}
    isContactSubmitting.value = false
    hasContactSubmitted.value = false
  }

  return {
    // Contact form state
    isContactModalOpen,
    contactFormData,
    isContactSubmitting,
    hasContactSubmitted,
    contactErrors,

    // Actions
    openContactModal,
    closeContactModal,
    validateContactForm,
    submitContactForm,
    resetContactForm
  }
})