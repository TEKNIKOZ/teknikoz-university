import { getApiUrl } from "@/constants/auth";
import type { $Fetch } from "nitropack";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course_interest: string;
  message?: string;
  form_type: 'contact';
}

export interface ContactResponse {
  success: boolean;
  data?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    course_interest: string;
    message?: string;
    form_type: string;
    created_at: string;
    updated_at: string;
  };
  message?: string;
  errors?: any[];
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  course_interest: string;
  message?: string;
  form_type: 'contact' | 'brochure';
  created_at: string;
  updated_at: string;
}

export interface ContactsListResponse {
  success: boolean;
  data?: Contact[];
  pagination?: {
    limit: number;
    offset: number;
    total: number;
  };
  message?: string;
}

export interface ContactDetailResponse {
  success: boolean;
  data?: Contact;
  message?: string;
}

export interface ContactsByEmailResponse {
  success: boolean;
  data?: Contact[];
  message?: string;
}

export const contactRepository = (fetch: $Fetch) => {
  const apiUrl = getApiUrl();
  return {
    // Submit contact form
    submitContact: async (formData: ContactFormData): Promise<ContactResponse> => {
      return fetch(`${apiUrl}/contacts`, {
        method: "POST",
        body: formData,
      });
    },

    // Get all contacts with pagination and filtering
    getAllContacts: async (params?: {
      limit?: number;
      offset?: number;
      form_type?: 'contact' | 'brochure';
    }): Promise<ContactsListResponse> => {
      const searchParams = new URLSearchParams();

      if (params?.limit) searchParams.append('limit', params.limit.toString());
      if (params?.offset) searchParams.append('offset', params.offset.toString());
      if (params?.form_type) searchParams.append('form_type', params.form_type);

      const queryString = searchParams.toString();
      const url = queryString ? `${apiUrl}/contacts?${queryString}` : `${apiUrl}/contacts`;

      return fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    },

    // Get contact by ID
    getContactById: async (id: number): Promise<ContactDetailResponse> => {
      return fetch(`${apiUrl}/contacts/${id}`, {
        method: "GET",
      });
    },

    // Get contacts by email
    getContactsByEmail: async (email: string): Promise<ContactsByEmailResponse> => {
      return fetch(`${apiUrl}/contacts/email/${encodeURIComponent(email)}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    },
  };
};