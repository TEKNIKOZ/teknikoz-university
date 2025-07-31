<template>
  <div
    v-if="totalPages > 1"
    class="flex flex-row items-center justify-between gap-3 sm:gap-0"
  >
    <!-- Results count -->
    <div
      class="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 order-2 sm:order-1"
    >
      Showing {{ itemsStartIndex }} to {{ itemsEndIndex }} of
      {{ totalItems }} results
    </div>

    <!-- Navigation -->
    <nav class="flex items-center order-1 sm:order-2" aria-label="Pagination">
      <div
        class="inline-flex items-center rounded-lg shadow-sm bg-white dark:bg-slate-800 p-0.5 sm:p-1 border border-gray-200 dark:border-slate-600"
      >
        <!-- First page -->
        <button
          @click="onPageChange(1)"
          :disabled="currentPage === 1"
          class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-gray-600 dark:text-gray-400 hover:text-brand hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 focus:outline-none"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          aria-label="First page"
        >
          <Icon
            name="mdi:page-first"
            class="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </button>

        <!-- Previous page -->
        <button
          @click="onPageChange(currentPage - 1)"
          :disabled="currentPage === 1"
          class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-gray-600 dark:text-gray-400 hover:text-brand hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 focus:outline-none"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          aria-label="Previous page"
        >
          <Icon
            name="mdi:chevron-left"
            class="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </button>

        <!-- Page numbers -->
        <div class="hidden sm:flex items-center mx-1">
          <template v-for="page in visiblePageNumbers" :key="page">
            <template v-if="page === '...'">
              <span
                class="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 text-gray-400 dark:text-gray-500 text-xs sm:text-sm"
                >...</span
              >
            </template>
            <template v-else>
              <button
                @click="onPageChange(Number(page))"
                :class="[
                  'inline-flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none',
                  currentPage === Number(page)
                    ? 'bg-brand text-white shadow-brand/30 hover:bg-brand/90'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-brand',
                ]"
                :aria-current="
                  currentPage === Number(page) ? 'page' : undefined
                "
              >
                {{ page }}
              </button>
            </template>
          </template>
        </div>

        <!-- Mobile current/total -->
        <div
          class="flex sm:hidden items-center justify-center min-w-[3.5rem] px-1"
        >
          <span class="text-xs font-medium text-gray-700 dark:text-gray-300"
            >{{ currentPage }}/{{ totalPages }}</span
          >
        </div>

        <!-- Next page -->
        <button
          @click="onPageChange(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-gray-600 dark:text-gray-400 hover:text-brand hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 focus:outline-none"
          :class="{
            'opacity-50 cursor-not-allowed': currentPage === totalPages,
          }"
          aria-label="Next page"
        >
          <Icon
            name="mdi:chevron-right"
            class="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </button>

        <!-- Last page -->
        <button
          @click="onPageChange(totalPages)"
          :disabled="currentPage === totalPages"
          class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-gray-600 dark:text-gray-400 hover:text-brand hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 focus:outline-none"
          :class="{
            'opacity-50 cursor-not-allowed': currentPage === totalPages,
          }"
          aria-label="Last page"
        >
          <Icon
            name="mdi:page-last"
            class="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  maxVisiblePages: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["page-change"]);

// Calculate total pages
const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.perPage);
});

// Calculate start and end index for displayed items
const itemsStartIndex = computed(() => {
  return props.totalItems === 0
    ? 0
    : (props.currentPage - 1) * props.perPage + 1;
});

const itemsEndIndex = computed(() => {
  return Math.min(props.currentPage * props.perPage, props.totalItems);
});

// Generate visible page numbers with ellipsis
const visiblePageNumbers = computed(() => {
  const currentPage = props.currentPage;
  const totalPages = Math.ceil(props.totalItems / props.perPage);
  const maxVisiblePages = props.maxVisiblePages;

  if (totalPages <= maxVisiblePages) {
    // Show all pages if total pages is less than max visible pages
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];

  // Always show first page
  pages.push(1);

  // Calculate range around current page
  const leftSidePages = Math.floor((maxVisiblePages - 2) / 2);
  const rightSidePages = maxVisiblePages - 3 - leftSidePages;

  const startPage = Math.max(2, currentPage - leftSidePages);
  const endPage = Math.min(totalPages - 1, currentPage + rightSidePages);

  // Add ellipsis if necessary
  if (startPage > 2) {
    pages.push("...");
  }

  // Add middle pages
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Add ellipsis if necessary
  if (endPage < totalPages - 1) {
    pages.push("...");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
});

// Handle page change
const onPageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    emit("page-change", page);
  }
};
</script>