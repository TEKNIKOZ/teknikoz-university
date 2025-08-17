<template>
  <div
    class="min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
  >
    <div
      class="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12"
    >
      <div class="w-full max-w-md">
        <div
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 sm:p-10"
        >
          <!-- Header -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Join us today</h2>
            <p class="text-gray-600">Create your account</p>
          </div>

          <form class="space-y-6" @submit.prevent="handleSignup">
            <div class="space-y-5">
              <!-- Full Name -->
              <div class="group">
                <label
                  for="fullname"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <Icon
                    name="heroicons:user"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand transition-colors"
                  />
                  <input
                    id="fullname"
                    v-model="form.fullname"
                    name="fullname"
                    type="text"
                    autocomplete="name"
                    required
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Enter your full name"
                    :disabled="isLoading"
                    :class="{
                      'border-red-300 focus:border-red-400': errors.fullname,
                      'border-green-300 focus:border-green-400':
                        form.fullname && !errors.fullname,
                      'border-gray-300 focus:border-brand': !errors.fullname,
                    }"
                  />
                </div>
                <p
                  v-if="errors.fullname"
                  class="mt-2 text-sm text-red-600 font-medium"
                >
                  {{ errors.fullname }}
                </p>
              </div>

              <!-- Email Address -->
              <div class="group">
                <label
                  for="email"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address <span class="text-red-500">*</span>
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
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Enter your email"
                    :disabled="isLoading"
                    :class="{
                      'border-red-300 focus:border-red-400': errors.email,
                      'border-green-300 focus:border-green-400':
                        form.email && !errors.email,
                      'border-gray-300 focus:border-brand': !errors.email,
                    }"
                  />
                </div>
                <p
                  v-if="errors.email"
                  class="mt-2 text-sm text-red-600 font-medium"
                >
                  {{ errors.email }}
                </p>
              </div>

              <!-- Phone Number -->
              <div class="group">
                <label
                  for="phone"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <div class="relative">
                  <Icon
                    name="heroicons:phone"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand transition-colors"
                  />
                  <input
                    id="phone"
                    v-model="form.phone"
                    name="phone"
                    type="tel"
                    autocomplete="tel"
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Enter your phone number"
                    :disabled="isLoading"
                    :class="{
                      'border-red-300 focus:border-red-400': errors.phone,
                      'border-green-300 focus:border-green-400':
                        form.phone && !errors.phone,
                      'border-gray-300 focus:border-brand': !errors.phone,
                    }"
                  />
                </div>
                <p
                  v-if="errors.phone"
                  class="mt-2 text-sm text-red-600 font-medium"
                >
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Role Selection -->
              <div class="group">
                <label
                  for="role"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  I want to register as <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <Icon
                    name="heroicons:academic-cap"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand transition-colors"
                  />
                  <select
                    id="role"
                    v-model="form.role"
                    name="role"
                    required
                    class="w-full pl-12 pr-10 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200 appearance-none"
                    :disabled="isLoading"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                  <Icon
                    name="heroicons:chevron-down"
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                  />
                </div>
                <p
                  v-if="errors.role"
                  class="mt-2 text-sm text-red-600 font-medium"
                >
                  {{ errors.role }}
                </p>
              </div>

              <!-- Password -->
              <div class="group">
                <label
                  for="password"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password <span class="text-red-500">*</span>
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
                    autocomplete="new-password"
                    required
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Create a strong password"
                    :disabled="isLoading"
                    :class="{
                      'border-red-300 focus:border-red-400': errors.password,
                      'border-green-300 focus:border-green-400':
                        form.password && !errors.password,
                      'border-gray-300 focus:border-brand': !errors.password,
                    }"
                  />
                </div>
                <p
                  v-if="errors.password"
                  class="mt-2 text-sm text-red-600 font-medium"
                >
                  {{ errors.password }}
                </p>
              </div>

              <!-- Confirm Password -->
              <div class="group">
                <label
                  for="confirmPassword"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Confirm Password <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <Icon
                    name="heroicons:shield-check"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand transition-colors"
                  />
                  <input
                    id="confirmPassword"
                    v-model="form.confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autocomplete="new-password"
                    required
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-brand focus:bg-white transition-all duration-200"
                    placeholder="Confirm your password"
                    :disabled="isLoading"
                    :class="{
                      'border-red-300 focus:border-red-400':
                        errors.confirmPassword,
                      'border-green-300 focus:border-green-400':
                        form.confirmPassword && !errors.confirmPassword,
                      'border-gray-300 focus:border-brand':
                        !errors.confirmPassword,
                    }"
                  />
                </div>
                <p
                  v-if="errors.confirmPassword"
                  class="mt-2 text-sm text-red-600 font-medium"
                >
                  {{ errors.confirmPassword }}
                </p>
              </div>
            </div>

            <div class="flex items-center">
              <input
                id="agree-terms"
                v-model="form.agreeToTerms"
                name="agree-terms"
                type="checkbox"
                required
                class="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded"
                :disabled="isLoading"
              />
              <label for="agree-terms" class="ml-3 block text-xs text-gray-600">
                I agree to the
                <NuxtLink
                  to="/legal/terms"
                  class="text-brand hover:text-brand/80 font-semibold transition-colors"
                >
                  Terms of Service
                </NuxtLink>
                and
                <NuxtLink
                  to="/legal/privacy"
                  class="text-brand hover:text-brand/80 font-semibold transition-colors"
                >
                  Privacy Policy
                </NuxtLink>
              </label>
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
                  <p class="text-base sm:text-sm font-medium text-red-800">
                    {{ error }}
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="success"
              class="rounded-lg bg-green-50/80 backdrop-blur-sm p-3 border border-green-200/50"
            >
              <div class="flex">
                <div class="flex-shrink-0">
                  <Icon
                    name="heroicons:check-circle"
                    class="h-5 w-5 text-green-500 flex items-center"
                  />
                </div>
                <div class="ml-3">
                  <p class="text-base sm:text-sm font-medium text-green-800">
                    {{ success }}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="isLoading || !isFormValid || success !== ''"
              class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-4 focus:ring-brand/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg shadow-xl"
            >
              <Icon
                v-if="isLoading"
                name="eos-icons:loading"
                class="h-6 w-6 mr-3 animate-spin"
              />
              <Icon
                v-else-if="success"
                name="heroicons:check-circle"
                class="h-6 w-6 mr-3 text-white"
              />
              {{
                isLoading
                  ? "Creating account..."
                  : success
                  ? "Account created!"
                  : "Create Account"
              }}
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-8 text-center">
            <p class="text-base sm:text-sm text-gray-600">
              Already have an account?
              <NuxtLink
                to="/login"
                class="font-semibold text-brand hover:text-brand/80 transition-colors"
              >
                Login
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useAuthStore } from "@/stores/auth.stores";
import { useRouter, useSeoMeta } from "nuxt/app";
const { register } = useAuthStore();
const router = useRouter();

// SEO Meta Tags
useSeoMeta({
  title: "Sign Up - Teknikoz E-Learning",
  description:
    "Create your Teknikoz E-Learning account to start learning and access exclusive courses.",
});

const form = reactive({
  fullname: "",
  email: "",
  phone: "",
  role: "student",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
});

const isLoading = ref(false);
const error = ref("");
const success = ref("");

const errors = reactive({
  fullname: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  confirmPassword: "",
});

const validateFullname = () => {
  errors.fullname = "";
  if (!form.fullname.trim()) {
    errors.fullname = "Full name is required";
  } else if (form.fullname.length < 2) {
    errors.fullname = "Full name must be at least 2 characters long";
  }
};

const validateEmail = () => {
  errors.email = "";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
  }
};

const validatePhone = () => {
  errors.phone = "";
  if (form.phone.trim()) {
    const phoneRegex = /^[+]?[1-9]?[0-9]{7,15}$/;
    if (!phoneRegex.test(form.phone.replace(/[\s-()]/g, ""))) {
      errors.phone = "Please enter a valid phone number";
    }
  }
};

const validateRole = () => {
  errors.role = "";
  if (!form.role || !["student", "teacher"].includes(form.role)) {
    errors.role = "Please select a valid role";
  }
};

const validatePassword = () => {
  errors.password = "";
  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
};

const validateConfirmPassword = () => {
  errors.confirmPassword = "";
  if (!form.confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
};

const validateForm = () => {
  validateFullname();
  validateEmail();
  validatePhone();
  validateRole();
  validatePassword();
  validateConfirmPassword();

  return (
    !errors.fullname &&
    !errors.email &&
    !errors.phone &&
    !errors.role &&
    !errors.password &&
    !errors.confirmPassword
  );
};

const isFormValid = computed(() => {
  return (
    form.fullname.trim() !== "" &&
    form.email.trim() !== "" &&
    form.role &&
    form.password.trim() !== "" &&
    form.confirmPassword.trim() !== "" &&
    form.agreeToTerms &&
    !errors.fullname &&
    !errors.email &&
    !errors.phone &&
    !errors.role &&
    !errors.password &&
    !errors.confirmPassword
  );
});

const handleSignup = async () => {
  if (!validateForm() || !form.agreeToTerms) return;

  isLoading.value = true;
  error.value = "";
  success.value = "";

  try {
    const agreementData = {
      agreedToTerms: form.agreeToTerms,
      agreementTimestamp: new Date().toISOString(),
      termsVersion: "2025-01-08",
      privacyVersion: "2025-01-08",
    };

    const result = await register(
      form.email,
      form.fullname,
      form.password,
      form.phone || undefined,
      form.role,
      agreementData
    );

    if (result.success) {
      success.value = "Account created successfully! Redirecting...";
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      error.value = result.message || "Registration failed. Please try again.";
    }
  } catch (err) {
    error.value = "An unexpected error occurred. Please try again.";
    console.error("Signup error:", err);
  } finally {
    isLoading.value = false;
  }
};

watch(() => form.fullname, validateFullname);
watch(() => form.email, validateEmail);
watch(() => form.phone, validatePhone);
watch(() => form.role, validateRole);
watch(
  () => form.password,
  () => {
    validatePassword();
    validateConfirmPassword();
  }
);
watch(() => form.confirmPassword, validateConfirmPassword);
</script>
