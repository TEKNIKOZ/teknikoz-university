import { defineStore } from "pinia";
import type { $Fetch } from "nitropack";
import { TOKEN_KEY } from "~/constants/auth";
import { authRepository, type UserRepositoryData } from "../repository/auth.repository";
import { ref, nextTick } from "vue";
import { useNuxtApp } from "nuxt/app";

export const useAuthStore = defineStore("auth", () => {
   const token = ref("");
   const name = ref("");
   const email = ref("");
   const userId = ref<number | null>(null);
   const roles = ref<string[]>([]);
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

   // Initialize from localStorage on client side
   if (import.meta.client) {
      nextTick(() => {
         token.value = getStorageValue(TOKEN_KEY);
         const userData = getStorageValue("user");

         if (userData) {
            try {
               const user = JSON.parse(userData);
               name.value = user.name || "";
               email.value = user.email || "";
               userId.value = user.id || null;
               roles.value = user.roles || [];
            } catch (e) {
               console.error("Error parsing user data:", e);
            }
         }

         isAuthenticated.value = !!token.value;
      });
   }

   /**
    * Set token in localStorage and state
    */
   const setToken = (newToken: string) => {
      if (import.meta.client) {
         localStorage.setItem(TOKEN_KEY, newToken);
      }
      token.value = newToken;
   };

   /**
    * Clear token from localStorage and state
    */
   const clearToken = () => {
      if (import.meta.client) {
         localStorage.removeItem(TOKEN_KEY);
      }
      token.value = "";
   };

   /**
    * Save user data to localStorage and state
    */
   const setUserData = (user: any) => {
      name.value = user.name;
      email.value = user.email;
      userId.value = user.id;
      roles.value = user.roles;

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
      userId.value = null;
      roles.value = [];
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

         setToken(accessToken);
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
   const signup = async (
      name: string,
      email: string,
      password: string
   ) => {
      try {
         const { $api } = useNuxtApp();
         const authRepo = authRepository($api as $Fetch);
         const response = await authRepo.signup(name, email, password);

         if (!response.success) {
            throw new Error(response.message || "Registration failed");
         }

         const { accessToken, user } = response.data!;

         setToken(accessToken);
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

         clearToken();
         clearUserData();
         isAuthenticated.value = false;

         return {
            success: true,
            message: "Logout successful",
         };
      } catch (error) {
         console.error("Logout error:", error);

         // Still clear local data even if API call fails
         clearToken();
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

         userProfile.value = response.data;
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

   return {
      token,
      name,
      email,
      userId,
      roles,
      isAuthenticated,
      login,
      signup,
      logout,
      checkAuth,
      setToken,
      clearToken,
      fetchAllUsers,
      userProfile,
      fetchUserProfile,
      changePassword,
   };
});
