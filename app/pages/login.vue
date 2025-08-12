<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
  >
    <div
      class="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md">
        <div
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 sm:p-10"
        >
          <!-- Header -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p class="text-gray-600">Sign in to your account</p>
          </div>

          <form class="space-y-6" @submit.prevent="handleLogin">
            <div class="space-y-5">
              <div class="group">
                <label
                  for="email"
                  class="block text-base sm:text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div class="relative">
                  <Icon
                    name="heroicons:envelope"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand transition-colors"
                  />
                  <input
                    id="email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Enter your email"
                    :disabled="isLoading"
                  />
                </div>
              </div>

              <div class="group">
                <label
                  for="password"
                  class="block text-base sm:text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <div class="relative">
                  <Icon
                    name="heroicons:lock-closed"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand transition-colors"
                  />
                  <input
                    id="password"
                    v-model="form.password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Enter your password"
                    :disabled="isLoading"
                  />
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="form.rememberMe"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded"
                  :disabled="isLoading"
                />
                <label
                  for="remember-me"
                  class="ml-3 block text-base sm:text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <NuxtLink
                  to="/forgot-password"
                  class="font-semibold text-brand hover:text-brand/80 transition-colors"
                >
                  Forgot password?
                </NuxtLink>
              </div>
            </div>

            <div
              v-if="error"
              class="rounded-lg bg-red-50/80 backdrop-blur-sm p-3 border border-red-200/50"
            >
              <div class="flex">
                <div class="flex-shrink-0">
                  <Icon
                    name="heroicons:exclamation-triangle"
                    class="h-5 w-5 text-red-500 flex items-center"
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-red-800">{{ error }}</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="isLoading || !isFormValid"
              class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-4 focus:ring-brand/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg shadow-xl"
            >
              <Icon
                v-if="isLoading"
                name="eos-icons:loading"
                class="h-6 w-6 mr-3 animate-spin"
              />
              {{ isLoading ? "Signing in..." : "Sign In" }}
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-600">
              Don't have an account?
              <NuxtLink
                to="/signup"
                class="font-semibold text-brand hover:text-brand/80 transition-colors"
              >
                Sign up
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "~/stores/auth.stores";
const { login } = useAuthStore();
const router = useRouter();
const route = useRoute();

useSeoMeta({
  title: "Login - Teknikoz E-Learning",
  description:
    "Sign in to your Teknikoz E-Learning account to access courses and learning materials.",
});

const form = reactive({
  email: "",
  password: "",
  rememberMe: false,
});

const isLoading = ref(false);
const error = ref("");

const isFormValid = computed(() => {
  return form.email.trim() !== "" && form.password.trim() !== "";
});

const handleLogin = async () => {
  if (!isFormValid.value) return;

  isLoading.value = true;
  error.value = "";

  try {
    const result = await login(form.email, form.password);

    if (result.success) {
      const redirectTo = (route.query.redirect as string) || "/";
      await router.push(redirectTo);
    } else {
      error.value = result.message || "Login failed. Please try again.";
    }
  } catch (err) {
    error.value = "An unexpected error occurred. Please try again.";
    console.error("Login error:", err);
  } finally {
    isLoading.value = false;
  }
};
</script>
