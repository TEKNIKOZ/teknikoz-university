import type { $Fetch } from 'nitropack'
import { useRuntimeConfig, defineNuxtPlugin, navigateTo } from 'nuxt/app'
import { TOKEN_KEY, REFRESH_TOKEN_KEY, PUBLIC_URLS } from '../constants/auth'

interface RefreshTokenResponse {
   success: boolean;
   data?: {
      accessToken: string;
      expiresIn: number;
   };
}

const isUrlPublic = (url: string, publicUrls: string[]): boolean => {
   return publicUrls.some(pattern =>
      url.includes(pattern.replace('*', ''))
   )
}

type HttpMethod =
   | 'GET' | 'POST' | 'PUT' | 'DELETE'
   | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'

export default defineNuxtPlugin(() => {
   const config = useRuntimeConfig()
   const baseUrlApi = config.public.baseUrlApi as string

   // Warn if using non-HTTPS in production
   if (process.env.NODE_ENV === 'production' && baseUrlApi.startsWith('http://')) {
      console.warn('⚠️ WARNING: Using non-HTTPS API URL in production!')
   }

   const api: $Fetch = $fetch.create({
      baseURL: baseUrlApi,
      timeout: 30000,
      credentials: 'include',

      async onRequest({ request, options }) {
         const url = typeof request === 'string'
            ? `${baseUrlApi}${request.startsWith('/') ? '' : '/'}${request}`
            : request.toString()

         if (isUrlPublic(url, PUBLIC_URLS)) return

         if (import.meta.client) {
            const token = localStorage.getItem(TOKEN_KEY)
            if (token) {
               if (!options.headers) {
                  options.headers = new Headers()
               } else if (!(options.headers instanceof Headers)) {
                  options.headers = new Headers(options.headers)
               }
               options.headers.set('Authorization', `Bearer ${token}`)
            }
         }
      },

      async onResponseError({ request, response, options }) {
         const status = response.status
         let data

         try {
            data = await response._data
         } catch (e) {
            data = {}
         }

         if (status === 401 && data?.message === 'Token expired') {
            try {
               const refreshTokenValue = localStorage.getItem(REFRESH_TOKEN_KEY)
               if (!refreshTokenValue) {
                  throw new Error('No refresh token available')
               }

               const refreshResult = await $fetch<RefreshTokenResponse>(
                  `/auth/refresh`,
                  {
                     method: 'POST',
                     body: { refreshToken: refreshTokenValue },
                     credentials: 'include',
                     baseURL: baseUrlApi,
                  }
               )

               if (refreshResult?.success && refreshResult?.data?.accessToken) {
                  const newToken = refreshResult.data.accessToken

                  if (import.meta.client) {
                     localStorage.setItem(TOKEN_KEY, newToken)
                  }

                  const newRequest = typeof request === 'string'
                     ? request
                     : request.toString()
                  const newOptions = { ...options }

                  if (!newOptions.headers) {
                     newOptions.headers = new Headers()
                  } else if (!(newOptions.headers instanceof Headers)) {
                     newOptions.headers = new Headers(newOptions.headers)
                  }

                  newOptions.headers.set('Authorization', `Bearer ${newToken}`)

                  return await $fetch(newRequest, {
                     ...newOptions,
                     method: (newOptions.method || 'GET') as HttpMethod,
                     baseURL: baseUrlApi,
                  })
               }
            } catch (error) {
               console.error('Error refreshing token:', error)
               if (import.meta.client) {
                  localStorage.removeItem(TOKEN_KEY)
                  localStorage.removeItem(REFRESH_TOKEN_KEY)
                  localStorage.removeItem('user')
                  await navigateTo('/login')
               }
            }
         }

         throw new Error(data?.message || 'Request failed')
      },
   })

   return {
      provide: {
         api,
      },
   }
})