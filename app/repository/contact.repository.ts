import type { $Fetch } from "nitropack";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course_interest: string;
  message?: string;
  form_type: 'contact';
}

export interface BrochureRequestData {
  name: string;
  email: string;
  phone: string;
  course_interest: string;
  message?: string;
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

export interface BrochureResponse {
  success: boolean;
  data?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    course_interest: string;
    message?: string;
    created_at: string;
    updated_at: string;
  };
  message?: string;
  errors?: any[];
}

export const contactRepository = (fetch: $Fetch) => {
  return {
    // Submit contact form
    submitContact: async (formData: ContactFormData): Promise<ContactResponse> => {
      return fetch(`/api/contacts`, {
        method: "POST",
        body: formData,
      });
    },

    // Submit brochure request
    submitBrochureRequest: async (formData: BrochureRequestData): Promise<BrochureResponse> => {
      return fetch(`/api/brochure-requests`, {
        method: "POST",
        body: formData,
      });
    },
  };
};