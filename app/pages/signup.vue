<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
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
              <div class="group">
                <label
                  for="fullname"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
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

              <div class="group">
                <label
                  for="email"
                  class="block text-sm font-semibold text-gray-700 mb-2"
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

              <div class="group">
                <label
                  for="password"
                  class="block text-sm font-semibold text-gray-700 mb-2"
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
                <div v-if="form.password" class="mt-3">
                  <div class="flex items-center space-x-3">
                    <div class="flex-1">
                      <div
                        class="h-2.5 bg-gray-200 rounded-full overflow-hidden"
                      >
                        <div
                          class="h-full transition-all duration-500 rounded-full"
                          :class="passwordStrengthColor"
                          :style="{ width: passwordStrength + '%' }"
                        ></div>
                      </div>
                    </div>
                    <span
                      class="text-xs font-semibold"
                      :class="passwordStrengthTextColor"
                    >
                      {{ passwordStrengthText }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="group">
                <label
                  for="confirmPassword"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Confirm Password
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
              <label for="agree-terms" class="ml-3 block text-sm text-gray-600">
                I agree to the
                <NuxtLink
                  to="/terms"
                  class="text-brand hover:text-brand/80 font-semibold transition-colors"
                >
                  Terms of Service
                </NuxtLink>
                and
                <NuxtLink
                  to="/privacy"
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
                  <p class="text-sm font-medium text-red-800">{{ error }}</p>
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
                  <p class="text-sm font-medium text-green-800">
                    {{ success }}
                  </p>
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
              {{ isLoading ? "Creating account..." : "Create Account" }}
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-600">
              Already have an account?
              <NuxtLink
                to="/login"
                class="font-semibold text-brand hover:text-brand/80 transition-colors"
              >
                Sign in here
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.stores";
const { signup } = useAuthStore();
const router = useRouter();

// Using default layout to include navbar

useSeoMeta({
  title: "Sign Up - Teknikoz University",
  description:
    "Create your Teknikoz University account to start learning and access exclusive courses.",
});

const form = reactive({
  fullname: "",
  email: "",
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
  password: "",
  confirmPassword: "",
});

const validateFullname = () => {
  errors.fullname = "";
  if (form.fullname.trim() && form.fullname.length < 2) {
    errors.fullname = "Full name must be at least 2 characters long";
  }
};

const validateEmail = () => {
  errors.email = "";
  if (form.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
  }
};

const validatePassword = () => {
  errors.password = "";
  if (form.password.trim() && form.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
};

const validateConfirmPassword = () => {
  errors.confirmPassword = "";
  if (form.confirmPassword.trim() && form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
};

const validateForm = () => {
  validateFullname();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  return (
    !errors.fullname &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword
  );
};

const passwordStrength = computed(() => {
  const password = form.password;
  let strength = 0;

  if (password.length >= 8) strength += 25;
  if (/[a-z]/.test(password)) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25;
  if (/[0-9]/.test(password)) strength += 25;
  if (/[^A-Za-z0-9]/.test(password)) strength += 25;

  return Math.min(strength, 100);
});

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value;
  if (strength < 50) return "Weak";
  if (strength < 75) return "Medium";
  return "Strong";
});

const passwordStrengthColor = computed(() => {
  const strength = passwordStrength.value;
  if (strength < 50) return "bg-red-500";
  if (strength < 75) return "bg-yellow-500";
  return "bg-green-500";
});

const passwordStrengthTextColor = computed(() => {
  const strength = passwordStrength.value;
  if (strength < 50) return "text-red-600";
  if (strength < 75) return "text-yellow-600";
  return "text-green-600";
});

const isFormValid = computed(() => {
  return (
    form.fullname.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== "" &&
    form.confirmPassword.trim() !== "" &&
    form.agreeToTerms &&
    validateForm()
  );
});

const handleSignup = async () => {
  if (!validateForm() || !form.agreeToTerms) return;

  isLoading.value = true;
  error.value = "";
  success.value = "";

  try {
    const result = await signup(form.fullname, form.email, form.password);

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
watch(
  () => form.password,
  () => {
    validatePassword();
    validateConfirmPassword();
  }
);
watch(() => form.confirmPassword, validateConfirmPassword);
</script>
