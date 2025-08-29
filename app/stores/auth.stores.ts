import { defineStore } from "pinia";
import type { $Fetch } from "nitropack";
import { TOKEN_KEY } from "~/constants/auth";
import { authRepository, type UserRepositoryData } from "../repository/auth.repository";
import { ref, nextTick } from "vue";
import { useNuxtApp } from "nuxt/app";

export const useAuthStore = defineStore("auth", () => {
   const token = ref("");
   const refreshToken = ref("");
   const name = ref("");
   const email = ref("");
   const phone = ref("");
   const userId = ref<number | null>(null);
   const roles = ref<string[]>([]);
   const status = ref("");
   const isEmailVerified = ref(false);
   const isAuthenticated = ref(false);
   const userProfile = ref<UserRepositoryData["data"] | null>(null);

   /**
    * Gets a value from localStorage if on client side
    */
   const getStorageValue = (key: string): string => {
      if (import.meta.client) {
         try {
            return localStorage.getItem(key) || "";
         } catch (e) {
            console.error(`Error reading ${key} from localStorage:`, e);
            return "";
         }
      }
      return "";
   };


   if (import.meta.client) {
      const initTokens = () => {
         token.value = getStorageValue(TOKEN_KEY);
         const userData = getStorageValue("user");


         if (userData) {
            try {
               const user = JSON.parse(userData);
               name.value = user.name || "";
               email.value = user.email || "";
               phone.value = user.phone || "";
               userId.value = user.id || null;
               roles.value = user.roles || [];
               status.value = user.status || "active";
               isEmailVerified.value = user.is_email_verified || false;
            } catch (e) {
               console.error("Error parsing user data:", e);
            }
         }

         isAuthenticated.value = !!token.value;
      };

      // Initialize immediately
      initTokens();

      // Also initialize in nextTick as fallback
      nextTick(initTokens);
   }

   /**
    * Set tokens in localStorage and state
    */
   const setTokens = (accessToken: string) => {

      if (import.meta.client) {
         localStorage.setItem(TOKEN_KEY, accessToken);
      }
      token.value = accessToken;
   };

   /**
    * Clear tokens from localStorage and state
    */
   const clearTokens = () => {
      if (import.meta.client) {
         localStorage.removeItem(TOKEN_KEY);
      }
      token.value = "";
      refreshToken.value = "";
   };

   /**
    * Save user data to localStorage and state
    */
   const setUserData = (user: any) => {
      name.value = user.name;
      email.value = user.email;
      phone.value = user.phone || "";
      userId.value = user.id;
      roles.value = user.roles;
      status.value = user.status || "active";
      isEmailVerified.value = user.is_email_verified || false;

      if (import.meta.client) {
         localStorage.setItem("user", JSON.stringify(user));
      }
   };

   /**
    * Clear user data from localStorage and state
    */
   const clearUserData = () => {
      name.value = "";
      email.value = "";
      phone.value = "";
      userId.value = null;
      roles.value = [];
      status.value = "";
      isEmailVerified.value = false;
      userProfile.value = null;

      if (import.meta.client) {
         localStorage.removeItem("user");
      }
   };

   /**
    * Login user with email and password
    */
   const login = async (email: string, password: string) => {
      try {
         const { $api } = useNuxtApp();
         const authRepo = authRepository($api as $Fetch);
         const response = await authRepo.login(email, password);

         if (!response.success) {
            throw new Error(response.message || "Login failed");
         }

         const { accessToken, user } = response.data!;

         setTokens(accessToken);
         setUserData(user);
         isAuthenticated.value = true;

         return {
            success: true,
            message: "Login successful",
         };
      } catch (error) {
         console.error("Login error:", error);
         return {
            success: false,
            message: error instanceof Error ? error.message : "Login failed",
         };
      }
   };

   /**
    * Register a new user
    */
   const register = async (
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
   ) => {
      try {
         const { $api } = useNuxtApp();
         const authRepo = authRepository($api as $Fetch);
         const response = await authRepo.register(email, name, password, phone, role, agreement);

         if (!response.success) {
            throw new Error(response.message || "Registration failed");
         }

         const { accessToken, user } = response.data!;

         setTokens(accessToken);
         setUserData(user);
         isAuthenticated.value = true;

         return {
            success: true,
            message: "Registration successful",
         };
      } catch (error) {
         console.error("Registration error:", error);
         return {
            success: false,
            message: error instanceof Error ? error.message : "Registration failed",
         };
      }
   };

   /**
    * Logout user
    */
   const logout = async () => {
      try {
         if (isAuthenticated.value) {
            const { $api } = useNuxtApp();
            const authRepo = authRepository($api as $Fetch);
            await authRepo.logout();
         }

         clearTokens();
         clearUserData();
         isAuthenticated.value = false;

         return {
            success: true,
            message: "Logout successful",
         };
      } catch (error) {
         console.error("Logout error:", error);

         // Still clear local data even if API call fails
         clearTokens();
         clearUserData();
         isAuthenticated.value = false;

         return {
            success: false,
            message: error instanceof Error ? error.message : "Logout failed",
         };
      }
   };

   /**
    * Check if user is authenticated
    */
   const checkAuth = () => {
      if (import.meta.server) return false;

      const storedToken = localStorage.getItem(TOKEN_KEY);
      return !!storedToken;
   };

   const hasRefreshToken = () => {
      return true;
   };

   /* Change Password */

   const changePassword = async (oldPassword: string, newPassWord: string) => {
      try {
         if (!isAuthenticated.value || !userId.value) {
            return {
               success: false,
               message: "User not authenticated",
            };
         }

         const { $api } = useNuxtApp();
         const userRepo = authRepository($api as $Fetch);
         const response = await userRepo.changePassword(
            userId.value,
            oldPassword,
            newPassWord
         );
         if (!response || !response.success) {
            throw new Error(
               response.message || "Error while changing the password"
            );
         }
         return {
            success: true,
            message: "Password changed successfully",
         };
      } catch (error) {
         console.error("Error changing the password", error);
         return {
            success: false,
            message:
               error instanceof Error ? error.message : "Failed to change password",
         };
      }
   };

   /**
    * Fetch all users
    */
   const fetchAllUsers = async () => {
      try {
         const { $api } = useNuxtApp();
         const userRepo = authRepository($api as $Fetch);
         const response = await userRepo.getAllUsers();

         if (!response.success) {
            throw new Error(response.message || "Failed to load users");
         }

         return {
            success: true,
            data: response.data,
         };
      } catch (error) {
         console.error("Error fetching all users:", error);
         return {
            success: false,
            message:
               error instanceof Error ? error.message : "Failed to load users",
         };
      }
   };

   /**
    * Fetch user profile data
    */
   const fetchUserProfile = async () => {
      try {
         if (!isAuthenticated.value || !userId.value) {
            return {
               success: false,
               message: "User not authenticated",
            };
         }

         const { $api } = useNuxtApp();
         const userRepo = authRepository($api as $Fetch);
         const response = await userRepo.getUserProfile(userId.value);

         if (!response.success) {
            throw new Error(response.message || "Failed to load profile");
         }

         userProfile.value = response.data || null;
         return {
            success: true,
            data: response.data,
         };
      } catch (error) {
         console.error("Error fetching user profile:", error);
         return {
            success: false,
            message:
               error instanceof Error ? error.message : "Failed to load profile",
         };
      }
   };

   /**
    * Get current user from API
    */
   const getCurrentUser = async () => {
      try {
         if (!isAuthenticated.value) {
            return {
               success: false,
               message: "User not authenticated",
            };
         }

         const { $api } = useNuxtApp();
         const authRepo = authRepository($api as $Fetch);
         const response = await authRepo.getCurrentUser();

         if (!response.success) {
            throw new Error(response.message || "Failed to get user");
         }

         if (response.data?.user) {
            setUserData(response.data.user);
         }

         return {
            success: true,
            data: response.data,
         };
      } catch (error) {
         console.error("Error getting current user:", error);
         return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to get user",
         };
      }
   };

   return {
      token,
      refreshToken,
      name,
      email,
      phone,
      userId,
      roles,
      status,
      isEmailVerified,
      isAuthenticated,
      login,
      register,
      logout,
      checkAuth,
      hasRefreshToken,
      setTokens,
      clearTokens,
      fetchAllUsers,
      userProfile,
      fetchUserProfile,
      changePassword,
      getCurrentUser,
   };
});
