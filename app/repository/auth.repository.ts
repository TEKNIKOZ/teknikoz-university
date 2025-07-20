import type { $Fetch } from "nitropack";
import { getApiUrl } from "~/constants/auth";

export type AuthRepositoryData = {
   success: boolean;
   data?: {
      user: {
         id: number;
         email: string;
         fullname: string;
         is_active: boolean;
         is_email_verified: boolean;
         roles: string[];
      };
      accessToken: string;
      expiresIn: number;
   };
   message?: string;
   errors?: any[];
};

export type UserRepositoryData = {
   success: boolean;
   data?: {
      id: number;
      email: string;
      fullname: string;
      is_active: boolean;
      is_email_verified: boolean;
      roles: string[];
   };

   message?: string;
   errors?: any[];
};
export interface User {
   id: number;
   email: string;
   fullname: string;
   is_active: boolean;
   is_email_verified: boolean;
   roles: string[];
}

export type UsersRepositoryData = {
   success: boolean;
   data?: {
      id: number;
      email: string;
      fullname: string;
      is_active: boolean;
      is_email_verified: boolean;
      roles: string[];
   }[];

   message?: string;
   errors?: any[];
};
export interface User {
   id: number;
   email: string;
   fullname: string;
   is_active: boolean;
   is_email_verified: boolean;
   roles: string[];
}

export const authRepository = (fetch: $Fetch) => {
   const apiUrl = getApiUrl();

   return {
      login: async (
         email: string,
         password: string
      ): Promise<AuthRepositoryData> => {
         return fetch(`/api/auth/login`, {
            method: "POST",
            body: { email, password },
            credentials: "include",
         });
      },

      signup: async (
         fullname: string,
         email: string,
         password: string
      ): Promise<AuthRepositoryData> => {
         return fetch(`/api/auth/signup`, {
            method: "POST",
            body: { fullname, email, password },
            credentials: "include",
         });
      },

      refreshToken: async (): Promise<{ success: boolean; data?: { accessToken: string; expiresIn: number }; message?: string }> => {
         return fetch(`/api/auth/refresh-token`, {
            method: "POST",
            credentials: "include",
         });
      },

      logout: async (): Promise<{ success: boolean; message?: string; data?: null }> => {
         return fetch(`/api/auth/logout`, {
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
   };
};
