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

export interface Contact {
  id: string;
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

export interface BrochureRequest {
  id: string;
  contact_id: string;
  course_type: string;
  brochure_name: string;
  email_sent: boolean;
  email_sent_at: string | null;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
}

export interface BrochureRequestsListResponse {
  success: boolean;
  data?: BrochureRequest[];
  pagination?: {
    limit: number;
    offset: number;
    total: number;
  };
  message?: string;
}

export interface BrochureRequestDetailResponse {
  success: boolean;
  data?: BrochureRequest;
  message?: string;
}

export interface BrochureRequestsByContactResponse {
  success: boolean;
  data?: BrochureRequest[];
  message?: string;
}

export interface BrochurePendingDeliveryResponse {
  success: boolean;
  data?: BrochureRequest[];
  total?: number;
  message?: string;
}

export interface BrochureDeliveryStatsResponse {
  success: boolean;
  data?: {
    total_requests: number;
    emails_sent: number;
    emails_pending: number;
    success_rate: number;
  };
  message?: string;
}

export interface BrochureResendResponse {
  success: boolean;
  message?: string;
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
      const url = queryString ? `/api/contacts?${queryString}` : '/api/contacts';
      
      console.log('📡 API Request URL:', url);
      
      return fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    },

    // Get contact by ID
    getContactById: async (id: string): Promise<ContactDetailResponse> => {
      return fetch(`/api/contacts/${id}`, {
        method: "GET",
      });
    },

    // Get contacts by email
    getContactsByEmail: async (email: string): Promise<ContactsByEmailResponse> => {
      return fetch(`/api/contacts/email/${encodeURIComponent(email)}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    },
  };
};

export const brochureRepository = (fetch: $Fetch) => {
  return {
    // Get all brochure requests with pagination and filtering
    getAllBrochureRequests: async (params?: {
      limit?: number;
      offset?: number;
      course_type?: string;
    }): Promise<BrochureRequestsListResponse> => {
      const searchParams = new URLSearchParams();
      
      if (params?.limit) searchParams.append('limit', params.limit.toString());
      if (params?.offset) searchParams.append('offset', params.offset.toString());
      if (params?.course_type) searchParams.append('course_type', params.course_type);

      const queryString = searchParams.toString();
      const url = queryString ? `/api/brochure-requests?${queryString}` : '/api/brochure-requests';
      
      return fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
    },

    // Get pending email deliveries
    getPendingDeliveries: async (params?: {
      limit?: number;
    }): Promise<BrochurePendingDeliveryResponse> => {
      const searchParams = new URLSearchParams();
      
      if (params?.limit) searchParams.append('limit', params.limit.toString());

      const queryString = searchParams.toString();
      const url = queryString ? `/api/brochure-requests/pending/email-delivery?${queryString}` : '/api/brochure-requests/pending/email-delivery';
      
      return fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
    },

    // Get email delivery stats
    getDeliveryStats: async (): Promise<BrochureDeliveryStatsResponse> => {
      return fetch(`/api/brochure-requests/stats/email-delivery`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
    },

    // Get brochure requests by contact ID
    getBrochureRequestsByContact: async (contactId: string): Promise<BrochureRequestsByContactResponse> => {
      return fetch(`/api/brochure-requests/contact/${contactId}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },

    // Get brochure request by ID
    getBrochureRequestById: async (id: string): Promise<BrochureRequestDetailResponse> => {
      return fetch(`/api/brochure-requests/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },

    // Resend brochure
    resendBrochure: async (id: string): Promise<BrochureResendResponse> => {
      return fetch(`/api/brochure-requests/${id}/resend`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
    },
  };
};