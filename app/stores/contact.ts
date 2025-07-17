import { defineStore } from 'pinia'

interface ContactFormData {
  name: string
  email: string
  phone: string
  courseInterest: string
  message: string
}

export const useContactStore = defineStore('contact', () => {
  // Contact store state
  const isModalOpen = ref(false)
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  })
  const isSubmitting = ref(false)
  const hasSubmitted = ref(false)
  const canDownloadBrochure = ref(false)
  const errors = ref<Record<string, string>>({})

  // Open modal and reset submission state
  const openModal = () => {
    isModalOpen.value = true
    // Reset hasSubmitted when opening modal to allow new submissions
    hasSubmitted.value = false
  }

  // Close modal and reset form
  const closeModal = () => {
    isModalOpen.value = false
    resetForm()
  }

  // Update form data and clear field errors
  const updateFormData = (field: keyof ContactFormData, value: string) => {
    formData.value[field] = value
    if (errors.value[field]) {
      delete errors.value[field]
    }
  }

  // Set error for a specific field
  const setError = (field: string, message: string) => {
    errors.value[field] = message
  }

  // Clear all errors
  const clearErrors = () => {
    errors.value = {}
  }

  // Validate form data
  const validateForm = (): boolean => {
    clearErrors()
    let isValid = true

    // Name validation
    if (!formData.value.name.trim()) {
      setError('name', 'Name is required')
      isValid = false
    } else if (formData.value.name.trim().length < 2) {
      setError('name', 'Name must be at least 2 characters long')
      isValid = false
    } else if (!/^[a-zA-Z\s'.,-]+$/.test(formData.value.name.trim())) {
      setError('name', 'Name can only contain letters, spaces, and common punctuation')
      isValid = false
    }

    // Email validation
    if (!formData.value.email.trim()) {
      setError('email', 'Email is required')
      isValid = false
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.value.email.trim())) {
      setError('email', 'Please enter a valid email address')
      isValid = false
    }

    // Phone validation - exactly 10 digits
    if (!formData.value.phone.trim()) {
      setError('phone', 'Phone number is required')
      isValid = false
    } else {
      // Remove all non-digit characters
      const phoneDigits = formData.value.phone.replace(/\D/g, '')
      if (phoneDigits.length !== 10) {
        setError('phone', 'Phone number must be exactly 10 digits')
        isValid = false
      } else if (!/^[6-9]/.test(phoneDigits)) {
        setError('phone', 'Phone number must start with 6, 7, 8, or 9')
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
    
    if (!formData.value.courseInterest.trim()) {
      setError('courseInterest', 'Please select a course')
      isValid = false
    } else if (!validCourses.includes(formData.value.courseInterest)) {
      setError('courseInterest', 'Please select a valid course option')
      isValid = false
    }

    // Message validation (optional but with length limit)
    if (formData.value.message.trim().length > 500) {
      setError('message', 'Message must be less than 500 characters')
      isValid = false
    }

    return isValid
  }

  // Submit form data
  const submitForm = async () => {
    if (!validateForm()) return false

    isSubmitting.value = true

    try {
      // Simulate API call - replace with actual API call later
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Mark as submitted and allow brochure download
      hasSubmitted.value = true
      canDownloadBrochure.value = true

      // Store submission in localStorage for persistence
      localStorage.setItem('teknikoz_contact_submitted', 'true')
      localStorage.setItem('teknikoz_contact_data', JSON.stringify(formData.value))

      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  // Download brochure if allowed
  const downloadBrochure = () => {
    if (!canDownloadBrochure.value) return false

    // Create a temporary download link
    const link = document.createElement('a')
    link.href = '/brochure/teknikoz-university-brochure.pdf'
    link.download = 'Teknikoz-University-Brochure.pdf'
    link.click()

    return true
  }

  // Reset form to initial state
  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      courseInterest: '',
      message: ''
    }
    clearErrors()
    isSubmitting.value = false
    hasSubmitted.value = false
  }

  // Clear all stored data (useful for testing)
  const clearStoredData = () => {
    localStorage.removeItem('teknikoz_contact_submitted')
    localStorage.removeItem('teknikoz_contact_data')
    canDownloadBrochure.value = false
    hasSubmitted.value = false
    resetForm()
  }

  // Check if user has previously submitted the form (only for brochure access)
  const checkPreviousSubmission = () => {
    const hasSubmittedStored = localStorage.getItem('teknikoz_contact_submitted')
    if (hasSubmittedStored === 'true') {
      // Only enable brochure download, don't set hasSubmitted to true
      // This allows users to submit the form again while maintaining download access
      canDownloadBrochure.value = true

      const savedData = localStorage.getItem('teknikoz_contact_data')
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          // Pre-fill form with previous data for convenience
          formData.value = { ...parsedData }
        } catch (error) {
          console.error('Error parsing saved form data:', error)
        }
      }
    }
  }

  return {
    // State
    isModalOpen,
    formData,
    isSubmitting,
    hasSubmitted,
    canDownloadBrochure,
    errors,

    // Actions
    openModal,
    closeModal,
    updateFormData,
    setError,
    clearErrors,
    validateForm,
    submitForm,
    downloadBrochure,
    resetForm,
    clearStoredData,
    checkPreviousSubmission
  }
})