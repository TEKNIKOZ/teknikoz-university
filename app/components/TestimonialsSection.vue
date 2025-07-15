<template>
  <section class="py-16 px-4 bg-orange-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span class="text-brand">Hear from</span> Our Champions
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
          Success stories from professionals who transformed their careers
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative">
        <div class="flex overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white rounded-2xl p-8 relative">
                  <div
                    class="absolute top-4 right-4 text-6xl text-gray-200 font-sans"
                  >
                    "
                  </div>
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        :src="testimonials[0].image"
                        :alt="testimonials[0].name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-gray-900">
                        {{ testimonials[0].name }}
                      </h4>
                      <p class="text-brand text-sm">
                        - {{ testimonials[0].role }}
                      </p>
                      <div class="flex text-yellow-400 text-sm mt-1">
                        <Icon v-for="star in 5" :key="star" name="mdi:star" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 leading-relaxed">
                    "{{ testimonials[0].testimonial }}"
                  </p>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white rounded-2xl p-8 relative">
                  <div
                    class="absolute top-4 right-4 text-6xl text-gray-200 font-sans"
                  >
                    "
                  </div>
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        :src="testimonials[1].image"
                        :alt="testimonials[1].name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-gray-900">
                        {{ testimonials[1].name }}
                      </h4>
                      <p class="text-brand text-sm">
                        - {{ testimonials[1].role }}
                      </p>
                      <div class="flex text-yellow-400 text-sm mt-1">
                        <Icon v-for="star in 5" :key="star" name="mdi:star" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 leading-relaxed">
                    "{{ testimonials[1].testimonial }}"
                  </p>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Testimonial 3 -->
                <div class="bg-white rounded-2xl p-8 relative">
                  <div
                    class="absolute top-4 right-4 text-6xl text-gray-200 font-sans"
                  >
                    "
                  </div>
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        :src="testimonials[2].image"
                        :alt="testimonials[2].name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-gray-900">
                        {{ testimonials[2].name }}
                      </h4>
                      <p class="text-brand text-sm">
                        - {{ testimonials[2].role }}
                      </p>
                      <div class="flex text-yellow-400 text-sm mt-1">
                        <Icon v-for="star in 5" :key="star" name="mdi:star" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 leading-relaxed">
                    "{{ testimonials[2].testimonial }}"
                  </p>
                </div>

                <!-- Testimonial 4 -->
                <div class="bg-white rounded-2xl p-8 relative">
                  <div
                    class="absolute top-4 right-4 text-6xl text-gray-200 font-sans"
                  >
                    "
                  </div>
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        :src="testimonials[3].image"
                        :alt="testimonials[3].name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-gray-900">
                        {{ testimonials[3].name }}
                      </h4>
                      <p class="text-brand text-sm">
                        - {{ testimonials[3].role }}
                      </p>
                      <div class="flex text-yellow-400 text-sm mt-1">
                        <Icon v-for="star in 5" :key="star" name="mdi:star" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 leading-relaxed">
                    "{{ testimonials[3].testimonial }}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(slide, index) in totalSlides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-300',
              currentSlide === index ? 'bg-gray-900' : 'bg-gray-300',
            ]"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Import testimonial images
import testimonial1 from "@/assets/images/testimonial1.png";
import testimonial2 from "@/assets/images/testimonial2.png";

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "AI Solutions Architect",
    image: testimonial1,
    testimonial:
      "TEKNIKOZ transformed my career! I landed a PLM role at a top automotive company within 3 months of completing the course. The hands-on projects were exactly what I needed.",
  },
  {
    name: "Priya Sharma",
    role: "PLM Engineer at Tata Motors",
    image: testimonial2,
    testimonial:
      "The AI/ML course was incredible. Real industry projects, expert mentorship, and practical learning approach. I'm now leading AI initiatives at my company.",
  },
  {
    name: "Amit Patel",
    role: "Senior Data Scientist",
    image: testimonial1,
    testimonial:
      "The comprehensive curriculum and industry-relevant projects helped me transition from a traditional IT role to data science. The mentorship was outstanding and career support was exceptional.",
  },
  {
    name: "Sneha Reddy",
    role: "Product Manager at Microsoft",
    image: testimonial2,
    testimonial:
      "TEKNIKOZ's product management course gave me the strategic thinking and technical skills I needed. The real-world case studies and networking opportunities were invaluable for my career growth.",
  },
];

const currentSlide = ref(0);
const totalSlides = ref(2);
let autoSlideInterval: NodeJS.Timeout;

// Auto-slide functionality
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
  }, 5000); // Change slide every 5 seconds
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
