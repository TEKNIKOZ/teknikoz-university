import { useRuntimeConfig } from "nuxt/app";

export const TOKEN_KEY = 'auth_token';
export const REFRESH_TOKEN_KEY = 'auth_refresh_token';
export const ROLES_KEY = 'auth_roles';
export const USER_KEY = 'auth_user';

export const getApiUrl = () => {
   const config = useRuntimeConfig();
   return config.public.baseUrlApi;
};

export const PUBLIC_URLS = [
   `/auth/login`,
   `/auth/register`,
   `/auth/refresh`,
   `/auth/logout`,
   `/auth/revoke-all-tokens`
]; 