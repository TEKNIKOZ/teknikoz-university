import { getApiUrl } from "@/constants/auth";
import type { $Fetch } from "nitropack";

export interface BrochureRequestData {
  name: string;
  email: string;
  phone: string;
  course_interest: string;
  message?: string;
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

export interface BrochureRequest {
  id: number;
  contact_id: number;
  course_type: string;
  brochure_name: string;
  email_sent: boolean;
  email_sent_at: string | null;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
  contact?: {
    name: string;
    email: string;
  };
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
    total: number;
    sent: number;
    pending: number;
  };
  message?: string;
}

export interface BrochureResendResponse {
  success: boolean;
  message?: string;
}

export const brochureRepository = (fetch: $Fetch) => {
  const apiUrl = getApiUrl();
  return {
    // Submit brochure request
    submitBrochureRequest: async (formData: BrochureRequestData): Promise<BrochureResponse> => {
      return fetch(`${apiUrl}/brochure-requests`, {
        method: "POST",
        body: formData,
      });
    },

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
      const url = queryString ? `${apiUrl}/brochure-requests?${queryString}` : `${apiUrl}/brochure-requests`;

      return fetch(url, {
        method: "GET",
      });
    },

    // Get pending email deliveries
    getPendingDeliveries: async (params?: {
      limit?: number;
    }): Promise<BrochurePendingDeliveryResponse> => {
      const searchParams = new URLSearchParams();

      if (params?.limit) searchParams.append('limit', params.limit.toString());

      const queryString = searchParams.toString();
      const url = queryString ? `${apiUrl}/brochure-requests/pending/email-delivery?${queryString}` : `${apiUrl}/brochure-requests/pending/email-delivery`;

      return fetch(url, {
        method: "GET",
      });
    },

    // Get email delivery stats
    getDeliveryStats: async (): Promise<BrochureDeliveryStatsResponse> => {
      return fetch(`${apiUrl}/brochure-requests/stats/email-delivery`, {
        method: "GET",
      });
    },

    // Get brochure requests by contact ID
    getBrochureRequestsByContact: async (contactId: number): Promise<BrochureRequestsByContactResponse> => {
      return fetch(`${apiUrl}/brochure-requests/contact/${contactId}`, {
        method: "GET",
      });
    },

    // Get brochure request by ID
    getBrochureRequestById: async (id: number): Promise<BrochureRequestDetailResponse> => {
      return fetch(`${apiUrl}/brochure-requests/${id}`, {
        method: "GET",
      });
    },

    // Resend brochure
    resendBrochure: async (id: number): Promise<BrochureResendResponse> => {
      return fetch(`${apiUrl}/brochure-requests/${id}/resend`, {
        method: "POST",
      });
    },
  };
};