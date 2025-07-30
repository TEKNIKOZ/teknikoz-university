import { defineStore } from 'pinia'
import { contactRepository, type ContactFormData as ApiContactFormData, type BrochureRequestData } from '@/repository/contact.repository'

interface ContactFormData {
  name: string
  email: string
  phone: string
  courseInterest: string
  message: string
}

interface BrochureFormData {
  name: string
  email: string
  phone: string
  courseInterest: string
  message: string
}

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

  // Contact Modal Actions
  const openContactModal = () => {
    isContactModalOpen.value = true
    hasContactSubmitted.value = false
  }

  const closeContactModal = () => {
    isContactModalOpen.value = false
    resetContactForm()
  }

  // Brochure Modal Actions
  const openBrochureModal = () => {
    isBrochureModalOpen.value = true
    hasBrochureSubmitted.value = false
  }

  const closeBrochureModal = () => {
    isBrochureModalOpen.value = false
    resetBrochureForm()
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

  // Submit contact form
  const submitContactForm = async () => {
    if (!validateContactForm()) return false

    isContactSubmitting.value = true

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api)

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

  // Submit brochure request form
  const submitBrochureForm = async () => {
    if (!validateBrochureForm()) return false

    isBrochureSubmitting.value = true

    try {
      const { $api } = useNuxtApp()
      const repository = contactRepository($api)

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
    // Contact form state
    isContactModalOpen,
    contactFormData,
    isContactSubmitting,
    hasContactSubmitted,
    contactErrors,

    // Brochure form state
    isBrochureModalOpen,
    brochureFormData,
    isBrochureSubmitting,
    hasBrochureSubmitted,
    brochureErrors,

    // Actions
    openContactModal,
    closeContactModal,
    openBrochureModal,
    closeBrochureModal,
    validateContactForm,
    validateBrochureForm,
    submitContactForm,
    submitBrochureForm,
    resetContactForm,
    resetBrochureForm
  }
})