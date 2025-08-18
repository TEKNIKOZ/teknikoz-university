import { defineStore } from 'pinia'
import type { $Fetch } from 'nitropack'
import type {
  Course,
  CourseWithDetails,
  CourseFilters,
  CourseFormData,
  SectionFormData,
  LessonFormData,
  PriceFormData,
  CourseMaterial
} from '@/types/course'
import * as courseRepo from '@/repository/course.repository'
import { useAuthStore } from './auth.stores'
import { useNuxtApp } from 'nuxt/app'
import { ref, computed } from 'vue'

export const useCourseStore = defineStore('course', () => {
  // State
  const courses = ref<Course[]>([])
  const currentCourse = ref<CourseWithDetails | null>(null)
  const courseMaterials = ref<CourseMaterial[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  const fetchCourses = async (filters: CourseFilters = {}) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.getCourses($api as $Fetch, filters, authStore.token)

      if (response.success) {
        courses.value = response.data
        totalCount.value = response.count || 0
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to fetch courses')
      }
    } catch (err: any) {
      console.error('Error fetching courses:', err)
      error.value = err.data?.message || 'Failed to fetch courses'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const fetchCourseBySlug = async (slug: string, includeDetails: boolean = true) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.getCourseBySlug($api as $Fetch, slug, includeDetails, authStore.token)

      if (response.success) {
        currentCourse.value = response.data
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to fetch course')
      }
    } catch (err: any) {
      console.error('Error fetching course:', err)
      currentCourse.value = null
      error.value = err.data?.message || 'Failed to fetch course'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const fetchCourseById = async (id: number, includeDetails: boolean = true) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.getCourseById($api as $Fetch, id, includeDetails, authStore.token)

      if (response.success) {
        currentCourse.value = response.data
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to fetch course')
      }
    } catch (err: any) {
      console.error('Error fetching course:', err)
      currentCourse.value = null
      error.value = err.data?.message || 'Failed to fetch course'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const fetchCourseMaterials = async (courseId: number) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.getCourseMaterials($api as $Fetch, courseId, authStore.token)

      if (response.success) {
        courseMaterials.value = response.data
        if (currentCourse.value && currentCourse.value.id === courseId) {
          currentCourse.value.materials = response.data
        }
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to fetch materials')
      }
    } catch (err: any) {
      console.error('Error fetching materials:', err)
      error.value = err.data?.message || 'Failed to fetch materials'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const createCourse = async (courseData: CourseFormData) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.createCourse($api as $Fetch, courseData, authStore.token)

      if (response.success) {
        await fetchCourses()
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to create course')
      }
    } catch (err: any) {
      console.error('Error creating course:', err)
      error.value = err.data?.message || 'Failed to create course'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const updateCourse = async (courseId: number, courseData: Partial<CourseFormData>) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.updateCourse($api as $Fetch, courseId, courseData, authStore.token)

      if (response.success) {
        await fetchCourseById(courseId)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to update course')
      }
    } catch (err: any) {
      console.error('Error updating course:', err)
      error.value = err.data?.message || 'Failed to update course'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const deleteCourse = async (courseId: number) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.deleteCourse($api as $Fetch, courseId, authStore.token)

      if (response.success) {
        await fetchCourses()
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to delete course')
      }
    } catch (err: any) {
      console.error('Error deleting course:', err)
      error.value = err.data?.message || 'Failed to delete course'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const createSection = async (courseId: number, sectionData: SectionFormData) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.createSection($api as $Fetch, courseId, sectionData, authStore.token)

      if (response.success) {
        await fetchCourseById(courseId)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to create section')
      }
    } catch (err: any) {
      console.error('Error creating section:', err)
      error.value = err.data?.message || 'Failed to create section'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const createLesson = async (courseId: number, lessonData: LessonFormData) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.createLesson($api as $Fetch, courseId, lessonData, authStore.token)

      if (response.success) {
        await fetchCourseById(courseId)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to create lesson')
      }
    } catch (err: any) {
      console.error('Error creating lesson:', err)
      error.value = err.data?.message || 'Failed to create lesson'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const uploadMaterial = async (courseId: number, formData: FormData) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.uploadMaterial($api as $Fetch, courseId, formData, authStore.token)

      if (response.success) {
        await fetchCourseMaterials(courseId)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to upload material')
      }
    } catch (err: any) {
      console.error('Error uploading material:', err)
      error.value = err.data?.message || 'Failed to upload material'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const uploadCourseCover = async (courseId: number, file: File) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.uploadCourseCover($api as $Fetch, courseId, file, authStore.token)

      if (response.success) {
        await fetchCourseById(courseId)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to upload cover')
      }
    } catch (err: any) {
      console.error('Error uploading cover:', err)
      error.value = err.data?.message || 'Failed to upload cover'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const setCoursePrice = async (courseId: number, priceData: PriceFormData) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.setCoursePrice($api as $Fetch, courseId, priceData, authStore.token)

      if (response.success) {
        await fetchCourseById(courseId)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to set price')
      }
    } catch (err: any) {
      console.error('Error setting price:', err)
      error.value = err.data?.message || 'Failed to set price'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const deleteMaterial = async (materialId: number) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.deleteMaterial($api as $Fetch, materialId, authStore.token)

      if (response.success && currentCourse.value) {
        await fetchCourseMaterials(currentCourse.value.id)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to delete material')
      }
    } catch (err: any) {
      console.error('Error deleting material:', err)
      error.value = err.data?.message || 'Failed to delete material'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const deleteSection = async (sectionId: number) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.deleteSection($api as $Fetch, sectionId, authStore.token)

      if (response.success && currentCourse.value) {
        // Refresh course to get updated sections
        await fetchCourseById(currentCourse.value.id, true)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to delete section')
      }
    } catch (err: any) {
      console.error('Error deleting section:', err)
      error.value = err.data?.message || 'Failed to delete section'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const deleteLesson = async (lessonId: number) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.deleteLesson($api as $Fetch, lessonId, authStore.token)

      if (response.success && currentCourse.value) {
        // Refresh course to get updated lessons
        await fetchCourseById(currentCourse.value.id, true)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to delete lesson')
      }
    } catch (err: any) {
      console.error('Error deleting lesson:', err)
      error.value = err.data?.message || 'Failed to delete lesson'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const deletePrice = async (priceId: number) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.deletePrice($api as $Fetch, priceId, authStore.token)

      if (response.success && currentCourse.value) {
        // Refresh course to get updated prices
        await fetchCourseById(currentCourse.value.id, true)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to delete price')
      }
    } catch (err: any) {
      console.error('Error deleting price:', err)
      error.value = err.data?.message || 'Failed to delete price'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const updateSection = async (sectionId: number, data: { title: string; order_index?: number }) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.updateSection($api as $Fetch, sectionId, data, authStore.token)

      if (response.success && currentCourse.value) {
        // Refresh course to get updated sections
        await fetchCourseById(currentCourse.value.id, true)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to update section')
      }
    } catch (err: any) {
      console.error('Error updating section:', err)
      error.value = err.data?.message || 'Failed to update section'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const updateLesson = async (lessonId: number, data: Partial<LessonFormData>) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.updateLesson($api as $Fetch, lessonId, data, authStore.token)

      if (response.success && currentCourse.value) {
        // Refresh course to get updated lessons
        await fetchCourseById(currentCourse.value.id, true)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to update lesson')
      }
    } catch (err: any) {
      console.error('Error updating lesson:', err)
      error.value = err.data?.message || 'Failed to update lesson'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const updateMaterial = async (
    materialId: number, 
    data: {
      title?: string;
      description?: string;
      file_type?: string;
      is_downloadable?: boolean;
      access_level?: 'public' | 'enrolled' | 'premium';
      order_index?: number;
    }
  ) => {
    loading.value = true
    error.value = null
    const authStore = useAuthStore()
    
    try {
      const { $api } = useNuxtApp()
      const response = await courseRepo.updateMaterial($api as $Fetch, materialId, data, authStore.token)

      if (response.success && currentCourse.value) {
        // Refresh course materials
        await fetchCourseMaterials(currentCourse.value.id)
        return { success: true, data: response.data }
      } else {
        throw new Error(response.message || 'Failed to update material')
      }
    } catch (err: any) {
      console.error('Error updating material:', err)
      error.value = err.data?.message || 'Failed to update material'
      return {
        success: false,
        error: error.value
      }
    } finally {
      loading.value = false
    }
  }

  const clearError = () => {
    error.value = null
  }

  const clearCurrentCourse = () => {
    currentCourse.value = null
    courseMaterials.value = []
  }

  // Computed
  const publishedCourses = computed(() => courses.value.filter(course => course.status === 'published'))
  const draftCourses = computed(() => courses.value.filter(course => course.status === 'draft'))
  const beginnerCourses = computed(() => courses.value.filter(course => course.level === 'beginner'))
  const intermediateCourses = computed(() => courses.value.filter(course => course.level === 'intermediate'))
  const advancedCourses = computed(() => courses.value.filter(course => course.level === 'advanced'))

  return {
    // State
    courses,
    currentCourse,
    courseMaterials,
    totalCount,
    loading,
    error,

    // Actions
    fetchCourses,
    fetchCourseBySlug,
    fetchCourseById,
    fetchCourseMaterials,
    createCourse,
    updateCourse,
    deleteCourse,
    createSection,
    createLesson,
    uploadMaterial,
    uploadCourseCover,
    setCoursePrice,
    deleteMaterial,
    deleteSection,
    deleteLesson,
    deletePrice,
    updateSection,
    updateLesson,
    updateMaterial,
    clearError,
    clearCurrentCourse,

    // Computed
    publishedCourses,
    draftCourses,
    beginnerCourses,
    intermediateCourses,
    advancedCourses
  }
})