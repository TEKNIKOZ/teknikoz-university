import type { $Fetch } from "nitropack";
import { getApiUrl } from "@/constants/auth";

export type AuthRepositoryData = {
   success: boolean;
   data?: {
      user: {
         id: number;
         email: string;
         name: string;
         phone?: string;
         is_email_verified: boolean;
         status: string;
         roles: string[];
      };
      accessToken: string;
      refreshToken?: string;
      expiresIn: number;
   };
   message?: string;
   errors?: any[];
};

export type UserRepositoryData = {
   success: boolean;
   data?: {
      user: {
         id: number;
         email: string;
         name: string;
         phone?: string;
         is_email_verified: boolean;
         status: string;
         roles: string[];
      };
   };
   message?: string;
   errors?: any[];
};

export interface User {
   id: number;
   email: string;
   name: string;
   phone?: string;
   is_email_verified: boolean;
   status: string;
   roles: string[];
}

export type UsersRepositoryData = {
   success: boolean;
   data?: {
      id: number;
      email: string;
      name: string;
      phone?: string;
      is_email_verified: boolean;
      status: string;
      roles: string[];
   }[];
   message?: string;
   errors?: any[];
};

export const authRepository = (fetch: $Fetch) => {
   const apiUrl = getApiUrl();

   return {
      login: async (
         email: string,
         password: string
      ): Promise<AuthRepositoryData> => {
         return fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            body: { email, password },
            credentials: "include",
         });
      },

      register: async (
         email: string,
         name: string,
         password: string,
         phone?: string,
         role?: string,
         agreement?: {
            agreedToTerms: boolean;
            agreementTimestamp: string;
            termsVersion: string;
            privacyVersion: string;
         }
      ): Promise<AuthRepositoryData> => {
         return fetch(`${apiUrl}/auth/register`, {
            method: "POST",
            body: { email, name, password, phone, role, agreement },
            credentials: "include",
         });
      },

      refreshToken: async (refreshToken: string): Promise<{ success: boolean; data?: { accessToken: string; expiresIn: number }; message?: string }> => {
         return fetch(`${apiUrl}/auth/refresh`, {
            method: "POST",
            body: { refreshToken },
            credentials: "include",
         });
      },

      getCurrentUser: async (): Promise<UserRepositoryData> => {
         return fetch(`${apiUrl}/me`, {
            method: "GET",
            credentials: "include",
         });
      },

      logout: async (): Promise<{ success: boolean; message?: string }> => {
         return fetch(`${apiUrl}/auth/logout`, {
            method: "POST",
            credentials: "include",
         });
      },
      changePassword: async (
         id: number,
         oldPassword: string,
         newPassword: string
      ): Promise<AuthRepositoryData> => {
         return fetch(`${apiUrl}/auth/users/${id}/change-password`, {
            method: "POST",
            credentials: "include",
            body: { oldPassword, newPassword },
         });
      },
      getUserProfile: async (id: number): Promise<UserRepositoryData> => {
         return fetch(`${apiUrl}/auth/users/${id}`, {
            method: "GET",
            credentials: "include",
         });
      },
      getAllUsers: async (): Promise<UsersRepositoryData> => {
         return fetch(`${apiUrl}/auth/users`, {
            method: "GET",
            credentials: "include",
         });
      },

      assignRole: async (userId: number, role: string): Promise<{ success: boolean; message?: string }> => {
         return fetch(`${apiUrl}/auth/assign-role`, {
            method: "POST",
            body: { userId, role },
            credentials: "include",
         });
      },

      removeRole: async (userId: number, role: string): Promise<{ success: boolean; message?: string }> => {
         return fetch(`${apiUrl}/auth/remove-role`, {
            method: "POST",
            body: { userId, role },
            credentials: "include",
         });
      },

      revokeAllTokens: async (): Promise<{ success: boolean; message?: string }> => {
         return fetch(`${apiUrl}/auth/revoke-all-tokens`, {
            method: "POST",
            credentials: "include",
         });
      },
   };
};
