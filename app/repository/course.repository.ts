import type { $Fetch } from "nitropack";
import type {
  Course,
  CourseWithDetails,
  CourseFilters,
  CourseFormData,
  SectionFormData,
  LessonFormData,
  PriceFormData,
  CourseMaterial
} from '@/types/course';

export interface CourseListResponse {
  success: boolean;
  data: Course[];
  count?: number;
  message?: string;
}

export interface CourseDetailResponse {
  success: boolean;
  data: CourseWithDetails;
  message?: string;
}

export interface MaterialsResponse {
  success: boolean;
  data: CourseMaterial[];
  count?: number;
  message?: string;
}

export interface GenericResponse {
  success: boolean;
  data?: any;
  message?: string;
}

// Get list of courses (Auth Required)
export const getCourses = async (
  apiFetch: $Fetch, 
  filters: CourseFilters = {},
  token: string
): Promise<CourseListResponse> => {
  try {
    const queryParams = new URLSearchParams();
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.visibility) queryParams.append('visibility', filters.visibility);
    if (filters.level) queryParams.append('level', filters.level);
    if (filters.limit) queryParams.append('limit', filters.limit.toString());
    if (filters.offset) queryParams.append('offset', filters.offset.toString());

    const response = await apiFetch<CourseListResponse>(`/courses?${queryParams}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Get course by slug (Auth Required)
export const getCourseBySlug = async (
  apiFetch: $Fetch,
  slug: string,
  includeDetails: boolean = true,
  token: string
): Promise<CourseDetailResponse> => {
  try {
    const response = await apiFetch<CourseDetailResponse>(`/courses/slug/${slug}`, {
      method: 'GET',
      params: { details: includeDetails },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error fetching course by slug:', error);
    throw error;
  }
};

// Get course by ID (Auth Required)
export const getCourseById = async (
  apiFetch: $Fetch,
  id: number,
  includeDetails: boolean = true,
  token: string
): Promise<CourseDetailResponse> => {
  try {
    const response = await apiFetch<CourseDetailResponse>(`/courses/${id}`, {
      method: 'GET',
      params: { details: includeDetails },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error fetching course by ID:', error);
    throw error;
  }
};

// Get course materials (Auth Required)
export const getCourseMaterials = async (
  apiFetch: $Fetch,
  courseId: number,
  token: string
): Promise<MaterialsResponse> => {
  try {
    const response = await apiFetch<MaterialsResponse>(`/courses/${courseId}/materials`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error fetching course materials:', error);
    throw error;
  }
};

// Create a new course (Admin/Teacher Only)
export const createCourse = async (
  apiFetch: $Fetch,
  courseData: CourseFormData,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: courseData
    });

    return response;
  } catch (error: any) {
    console.error('Error creating course:', error);
    throw error;
  }
};

// Update a course (Admin/Teacher Only)
export const updateCourse = async (
  apiFetch: $Fetch,
  courseId: number,
  courseData: Partial<CourseFormData>,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/${courseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: courseData
    });

    return response;
  } catch (error: any) {
    console.error('Error updating course:', error);
    throw error;
  }
};

// Delete a course (Admin/Teacher Only)
export const deleteCourse = async (
  apiFetch: $Fetch,
  courseId: number,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/${courseId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error deleting course:', error);
    throw error;
  }
};

// Create a section (Admin/Teacher Only)
export const createSection = async (
  apiFetch: $Fetch,
  courseId: number,
  sectionData: SectionFormData,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/${courseId}/sections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: sectionData
    });

    return response;
  } catch (error: any) {
    console.error('Error creating section:', error);
    throw error;
  }
};

// Create a lesson (Admin/Teacher Only)
export const createLesson = async (
  apiFetch: $Fetch,
  courseId: number,
  lessonData: LessonFormData,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/${courseId}/lessons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: lessonData
    });

    return response;
  } catch (error: any) {
    console.error('Error creating lesson:', error);
    throw error;
  }
};

// Upload material (Admin/Teacher Only)
export const uploadMaterial = async (
  apiFetch: $Fetch,
  courseId: number,
  formData: FormData,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/${courseId}/materials`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    return response;
  } catch (error: any) {
    console.error('Error uploading material:', error);
    throw error;
  }
};

// Upload course cover (Admin/Teacher Only)
export const uploadCourseCover = async (
  apiFetch: $Fetch,
  courseId: number,
  file: File,
  token: string
): Promise<GenericResponse> => {
  try {
    const formData = new FormData();
    formData.append('cover', file);

    const response = await apiFetch<GenericResponse>(`/courses/${courseId}/cover`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    return response;
  } catch (error: any) {
    console.error('Error uploading course cover:', error);
    throw error;
  }
};

// Set course price (Admin/Teacher Only)
export const setCoursePrice = async (
  apiFetch: $Fetch,
  courseId: number,
  priceData: PriceFormData,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/${courseId}/price`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: priceData
    });

    return response;
  } catch (error: any) {
    console.error('Error setting course price:', error);
    throw error;
  }
};

// Delete material (Admin/Teacher Only)
export const deleteMaterial = async (
  apiFetch: $Fetch,
  materialId: number,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/materials/${materialId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error deleting material:', error);
    throw error;
  }
};

// Delete section (Admin/Teacher Only)
export const deleteSection = async (
  apiFetch: $Fetch,
  sectionId: number,
  token: string
): Promise<GenericResponse> => {
  try {
    // Using the correct backend endpoint
    const response = await apiFetch<GenericResponse>(`/sections/${sectionId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error deleting section:', error);
    throw error;
  }
};

// Delete lesson (Admin/Teacher Only)
export const deleteLesson = async (
  apiFetch: $Fetch,
  lessonId: number,
  token: string
): Promise<GenericResponse> => {
  try {
    // Using the correct backend endpoint
    const response = await apiFetch<GenericResponse>(`/lessons/${lessonId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error deleting lesson:', error);
    throw error;
  }
};

// Delete price (Admin/Teacher Only)
export const deletePrice = async (
  apiFetch: $Fetch,
  priceId: number,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/prices/${priceId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error: any) {
    console.error('Error deleting price:', error);
    throw error;
  }
};

// Update section (Admin/Teacher Only)
export const updateSection = async (
  apiFetch: $Fetch,
  sectionId: number,
  data: { title: string; order_index?: number },
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/sections/${sectionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: data
    });

    return response;
  } catch (error: any) {
    console.error('Error updating section:', error);
    throw error;
  }
};

// Update lesson (Admin/Teacher Only)
export const updateLesson = async (
  apiFetch: $Fetch,
  lessonId: number,
  data: Partial<LessonFormData>,
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/lessons/${lessonId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: data
    });

    return response;
  } catch (error: any) {
    console.error('Error updating lesson:', error);
    throw error;
  }
};

// Update material (Admin/Teacher Only)
export const updateMaterial = async (
  apiFetch: $Fetch,
  materialId: number,
  data: {
    title?: string;
    description?: string;
    file_type?: string;
    access_level?: 'public' | 'enrolled' | 'premium';
    order_index?: number;
  },
  token: string
): Promise<GenericResponse> => {
  try {
    const response = await apiFetch<GenericResponse>(`/courses/materials/${materialId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: data
    });

    return response;
  } catch (error: any) {
    console.error('Error updating material:', error);
    throw error;
  }
};

// Download functionality has been removed

// Export all functions as courseRepository for backwards compatibility
export const courseRepository = {
  getCourses,
  getCourseBySlug,
  getCourseById,
  getCourseMaterials,
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
  updateMaterial
};