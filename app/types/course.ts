export interface Course {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  cover_url?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  status?: 'draft' | 'published';
  visibility?: 'public' | 'private';
  created_at?: Date;
  updated_at?: Date;
}

export interface CourseWithDetails extends Course {
  sections?: CourseSection[];
  materials?: CourseMaterial[];
  price?: Price;
}

export interface CourseSection {
  id: number;
  course_id: number;
  title: string;
  order_index: number;
  lessons?: Lesson[];
  created_at?: Date;
  updated_at?: Date;
}

export interface Lesson {
  id: number;
  course_id: number;
  section_id?: number;
  title: string;
  kind: 'video' | 'pdf' | 'text' | 'external';
  duration_sec?: number;
  order_index: number;
  vod_asset_id?: string;
  pdf_url?: string;
  html_content?: string;
  external_url?: string;
  is_free_preview?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface CourseMaterial {
  id: number;
  course_id: number;
  title: string;
  description?: string;
  file_type?: 'pdf' | 'video' | 'image' | 'document' | 'archive' | 'other';
  file_url: string;
  file_size_bytes?: number;
  mime_type?: string;
  access_level?: 'public' | 'enrolled' | 'premium';
  order_index?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface Price {
  id: number;
  course_id: number;
  currency?: 'USD' | 'EUR' | 'INR';
  amount: number;
  compare_at?: number;
  is_recurring?: boolean;
  interval_type?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface CourseFilters {
  status?: 'draft' | 'published' | 'all';
  visibility?: 'public' | 'private' | 'all';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'all';
  limit?: number;
  offset?: number;
}

export interface CourseFormData {
  title: string;
  slug: string;
  summary?: string;
  cover_url?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  status?: 'draft' | 'published';
  visibility?: 'public' | 'private';
}

export interface SectionFormData {
  title: string;
  order_index?: number;
}

export interface LessonFormData {
  section_id?: number;
  title: string;
  kind: 'video' | 'pdf' | 'text' | 'external';
  duration_sec?: number;
  order_index?: number;
  vod_asset_id?: string;
  pdf_url?: string;
  html_content?: string;
  external_url?: string;
  is_free_preview?: boolean;
}

export interface MaterialFormData {
  title: string;
  description?: string;
  file_type?: 'pdf' | 'video' | 'image' | 'document' | 'archive' | 'other';
  access_level?: 'public' | 'enrolled' | 'premium';
}

export interface PriceFormData {
  currency?: 'USD' | 'EUR' | 'INR';
  amount: number;
  compare_at?: number;
  is_recurring?: boolean;
  interval_type?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  is_active?: boolean;
}