<template>
  <div class="space-y-6">
    <!-- Add Section Button -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          Course Sections
        </h2>
        <button
          @click="$emit('showAddSection')"
          class="px-4 py-2.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center"
        >
          <Icon name="mdi:plus" class="mr-2" />
          Add Section
        </button>
      </div>

      <!-- Sections List -->
      <div v-if="course?.sections?.length" class="space-y-4">
        <div
          v-for="(section, sectionIndex) in course.sections"
          :key="section.id"
          class="border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <div
            class="p-4 bg-gray-50 dark:bg-gray-800/40 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3 flex-1">
                <!-- Drag Handle -->
                <button
                  v-if="editingSection !== section.id"
                  class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-move"
                  title="Drag to reorder"
                >
                  <Icon
                    name="mdi:drag-vertical"
                    class="text-xl flex items-center"
                  />
                </button>

                <!-- Section Number -->
                <span
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded"
                >
                  Section {{ section.order_index || 0 }}
                </span>

                <!-- Title -->
                <div class="flex-1">
                  <h3
                    v-if="editingSection !== section.id"
                    class="font-semibold text-gray-900 dark:text-white"
                  >
                    {{ section.title }}
                  </h3>
                  <input
                    v-else
                    v-model="editingSectionTitle"
                    @keyup.enter="
                      $emit('saveSection', section.id, editingSectionTitle)
                    "
                    @keyup.escape="cancelSectionEdit"
                    class="w-full px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand dark:bg-gray-700 dark:text-white"
                    placeholder="Section title"
                    autofocus
                  />
                </div>
              </div>
              <div class="flex items-center gap-2 ml-4">
                <!-- Move Up/Down Buttons -->
                <button
                  v-if="editingSection !== section.id && sectionIndex > 0"
                  @click="$emit('moveSectionUp', section, sectionIndex)"
                  class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all"
                  title="Move up"
                >
                  <Icon name="mdi:arrow-up" class="text-sm flex items-center" />
                </button>
                <button
                  v-if="
                    editingSection !== section.id &&
                    sectionIndex < (course?.sections?.length || 0) - 1
                  "
                  @click="$emit('moveSectionDown', section, sectionIndex)"
                  class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all"
                  title="Move down"
                >
                  <Icon
                    name="mdi:arrow-down"
                    class="text-sm flex items-center"
                  />
                </button>

                <div class="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

                <!-- Edit/Save/Cancel -->
                <button
                  v-if="editingSection !== section.id"
                  @click="startSectionEdit(section)"
                  class="p-2 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                >
                  <Icon name="mdi:pencil" class="flex items-center" />
                </button>
                <button
                  v-else
                  @click="$emit('saveSection', section.id, editingSectionTitle)"
                  class="p-2 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all"
                >
                  <Icon name="mdi:check" class="flex items-center" />
                </button>
                <button
                  v-if="editingSection === section.id"
                  @click="cancelSectionEdit"
                  class="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                >
                  <Icon name="mdi:close" class="flex items-center" />
                </button>
                <button
                  v-if="editingSection !== section.id"
                  @click="$emit('deleteSection', section)"
                  :disabled="deletingSectionId === section.id"
                  class="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon
                    v-if="deletingSectionId === section.id"
                    name="mdi:loading"
                    class="animate-spin"
                  />
                  <Icon v-else name="mdi:delete" class="flex items-center" />
                </button>
              </div>
            </div>
          </div>

          <!-- Lessons -->
          <div v-if="section.lessons?.length" class="p-4 space-y-2">
            <div
              v-for="(lesson, lessonIndex) in section.lessons"
              :key="lesson.id"
              class="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow"
            >
              <div class="flex items-center gap-3 flex-1">
                <!-- Drag Handle -->
                <button
                  class="p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-move"
                  title="Drag to reorder"
                >
                  <Icon
                    name="mdi:drag-vertical"
                    class="text-lg flex items-center"
                  />
                </button>

                <Icon
                  :name="getLessonIcon(lesson.kind)"
                  class="text-gray-600 dark:text-gray-400 text-xl"
                />
                <div class="flex items-center gap-3 flex-1">
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    lesson.title
                  }}</span>
                  <span
                    class="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded font-medium capitalize"
                    >{{ lesson.kind }}</span
                  >
                  <span
                    v-if="lesson.is_free_preview"
                    class="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-0.5 rounded font-medium"
                  >
                    Free Preview
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <!-- Move Up/Down Buttons -->
                <button
                  v-if="lessonIndex > 0"
                  @click="
                    $emit('moveLessonUp', section.id, lesson, lessonIndex)
                  "
                  class="p-1 text-gray-500 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all"
                  title="Move up"
                >
                  <Icon name="mdi:arrow-up" class="text-xs flex items-center" />
                </button>
                <button
                  v-if="lessonIndex < (section.lessons?.length || 0) - 1"
                  @click="
                    $emit('moveLessonDown', section.id, lesson, lessonIndex)
                  "
                  class="p-1 text-gray-500 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all"
                  title="Move down"
                >
                  <Icon
                    name="mdi:arrow-down"
                    class="text-xs flex items-center"
                  />
                </button>

                <div class="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>

                <button
                  @click="$emit('editLesson', lesson)"
                  class="p-1 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all"
                >
                  <Icon name="mdi:pencil" class="text-sm flex items-center" />
                </button>
                <button
                  @click="$emit('deleteLesson', lesson)"
                  :disabled="deletingLessonId === lesson.id"
                  class="p-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon
                    v-if="deletingLessonId === lesson.id"
                    name="mdi:loading"
                    class="text-sm animate-spin"
                  />
                  <Icon
                    v-else
                    name="mdi:delete"
                    class="text-sm flex items-center"
                  />
                </button>
              </div>
            </div>
          </div>
          <div v-else class="p-4 text-center text-gray-500">
            No lessons in this section
          </div>

          <!-- Add Lesson Button -->
          <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              @click="$emit('showAddLesson', section.id)"
              class="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 transition-all flex items-center justify-center"
            >
              <Icon name="mdi:plus" class="mr-2" />
              Add Lesson
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
        <Icon name="mdi:book-open-variant" class="text-5xl mb-4" />
        <p>No sections yet. Add your first section to get started.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Section {
  id: number;
  title: string;
  order_index?: number;
  lessons?: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  kind: string;
  is_free_preview?: boolean;
}

interface Course {
  sections?: Section[];
}

interface Props {
  course: Course | null;
  deletingSectionId?: number | null;
  deletingLessonId?: number | null;
}

interface Emits {
  (e: "showAddSection"): void;
  (e: "showAddLesson", sectionId: number): void;
  (e: "editLesson", lesson: Lesson): void;
  (e: "saveSection", sectionId: number, title: string): void;
  (e: "deleteSection", section: Section): void;
  (e: "deleteLesson", lesson: Lesson): void;
  (e: "moveSectionUp", section: Section, index: number): void;
  (e: "moveSectionDown", section: Section, index: number): void;
  (e: "moveLessonUp", sectionId: number, lesson: Lesson, index: number): void;
  (e: "moveLessonDown", sectionId: number, lesson: Lesson, index: number): void;
}

withDefaults(defineProps<Props>(), {
  deletingSectionId: null,
  deletingLessonId: null,
});

defineEmits<Emits>();

const editingSection = ref<number | null>(null);
const editingSectionTitle = ref("");

const getLessonIcon = (kind: string) => {
  switch (kind) {
    case "video":
      return "mdi:play-circle";
    case "pdf":
      return "mdi:file-pdf-box";
    case "text":
      return "mdi:text-box";
    case "external":
      return "mdi:link";
    default:
      return "mdi:file";
  }
};

const startSectionEdit = (section: Section) => {
  editingSection.value = section.id;
  editingSectionTitle.value = section.title;
};

const cancelSectionEdit = () => {
  editingSection.value = null;
  editingSectionTitle.value = "";
};
</script>
