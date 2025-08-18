<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div
      class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                Edit Course
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {{ course?.title || "Loading..." }}
              </p>
            </div>
            <div class="flex items-center gap-3">
              <NuxtLink
                v-if="course"
                :to="`/course-catalog/${course.slug}`"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600 shadow-sm"
              >
                <Icon name="mdi:eye" class="mr-2" />
                Preview
              </NuxtLink>
              <NuxtLink
                to="/dashboard/courses"
                class="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600 shadow-sm"
              >
                <Icon name="mdi:arrow-left" class="mr-2" />
                Back to Courses
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="max-w-7xl mx-auto px-4 py-8">
      <div class="animate-pulse">
        <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
        <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
        <div class="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-7xl mx-auto px-4 py-8">
      <div
        class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6"
      >
        <div class="flex items-center">
          <Icon name="mdi:alert-circle" class="text-red-500 text-2xl mr-3" />
          <div>
            <h3 class="text-lg font-medium text-red-800 dark:text-red-400">
              Error Loading Course
            </h3>
            <p class="text-red-600 dark:text-red-300 mt-1">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-else-if="course" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Tabs -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
        <div class="border-b border-gray-200 dark:border-gray-700">
          <nav class="flex -mb-px">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-6 py-4 text-sm font-medium border-b-2 transition-colors',
                activeTab === tab.id
                  ? 'border-brand text-brand dark:text-brand'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
              ]"
            >
              <Icon :name="tab.icon" class="mr-2" />
              {{ tab.label }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Tab Content -->
      <div>
        <!-- Basic Info Tab -->
        <div
          v-if="activeTab === 'basic'"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Information
          </h2>

          <form @submit.prevent="updateCourseInfo" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Title -->
              <div class="md:col-span-2">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Course Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="courseData.title"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <!-- Summary -->
              <div class="md:col-span-2">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Course Summary
                </label>
                <textarea
                  v-model="courseData.summary"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                ></textarea>
              </div>

              <!-- Level -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Difficulty Level
                </label>
                <select
                  v-model="courseData.level"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                >
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <!-- Status -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Status
                </label>
                <select
                  v-model="courseData.status"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <!-- Visibility -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Visibility
                </label>
                <select
                  v-model="courseData.visibility"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <!-- Cover URL -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Cover Image URL
                </label>
                <input
                  v-model="courseData.cover_url"
                  type="url"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                :disabled="isSaving"
                class="px-6 py-2 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors disabled:opacity-50"
              >
                {{ isSaving ? "Saving..." : "Save Changes" }}
              </button>
            </div>
          </form>
        </div>

        <!-- Sections Tab -->
        <div v-if="activeTab === 'sections'" class="space-y-6">
          <!-- Add Section Button -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Course Sections
              </h2>
              <button
                @click="showAddSection = true"
                class="px-4 py-2.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <Icon name="mdi:plus" class="mr-2" />
                Add Section
              </button>
            </div>

            <!-- Sections List -->
            <div v-if="course.sections?.length" class="space-y-4">
              <div
                v-for="section in course.sections"
                :key="section.id"
                class="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div
                  class="p-4 bg-gray-50 dark:bg-gray-800/40 border-b border-gray-200 dark:border-gray-700"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      {{ section.title }}
                    </h3>
                    <div class="flex items-center gap-2">
                      <button
                        @click="editSection(section)"
                        class="p-2 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                      >
                        <Icon name="mdi:pencil" />
                      </button>
                      <button
                        @click="deleteSection(section.id)"
                        :disabled="deletingSectionId === section.id"
                        class="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Icon v-if="deletingSectionId === section.id" name="mdi:loading" class="animate-spin" />
                        <Icon v-else name="mdi:delete" />
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Lessons -->
                <div v-if="section.lessons?.length" class="p-4 space-y-2">
                  <div
                    v-for="lesson in section.lessons"
                    :key="lesson.id"
                    class="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div class="flex items-center gap-3">
                      <Icon
                        :name="getLessonIcon(lesson.kind)"
                        class="text-gray-600 dark:text-gray-400 text-xl"
                      />
                      <span class="text-gray-900 dark:text-white font-medium">{{
                        lesson.title
                      }}</span>
                      <span
                        class="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded font-medium"
                        >{{ lesson.kind }}</span
                      >
                    </div>
                    <div class="flex items-center gap-2">
                      <button
                        @click="editLesson(lesson)"
                        class="p-1 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all"
                      >
                        <Icon name="mdi:pencil" class="text-sm" />
                      </button>
                      <button
                        @click="deleteLesson(lesson.id)"
                        :disabled="deletingLessonId === lesson.id"
                        class="p-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Icon v-if="deletingLessonId === lesson.id" name="mdi:loading" class="text-sm animate-spin" />
                        <Icon v-else name="mdi:delete" class="text-sm" />
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
                    @click="showAddLesson(section.id)"
                    class="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 transition-all"
                  >
                    <Icon name="mdi:plus" class="mr-2" />
                    Add Lesson
                  </button>
                </div>
              </div>
            </div>
            <div
              v-else
              class="text-center py-12 text-gray-500 dark:text-gray-400"
            >
              <Icon name="mdi:book-open-variant" class="text-5xl mb-4" />
              <p>No sections yet. Add your first section to get started.</p>
            </div>
          </div>
        </div>

        <!-- Materials Tab -->
        <div
          v-if="activeTab === 'materials'"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
        >
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Course Materials
            </h2>
            <button
              @click="showUploadMaterial = true"
              class="px-4 py-2.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              <Icon name="mdi:upload" class="mr-2" />
              Upload Material
            </button>
          </div>

          <!-- Materials List -->
          <div v-if="course.materials?.length" class="space-y-4">
            <div
              v-for="material in course.materials"
              :key="material.id"
              class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-3">
                <Icon
                  :name="getMaterialIcon(material.file_type)"
                  class="text-3xl text-brand dark:text-brand"
                />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">
                    {{ material.title }}
                  </h4>
                  <p
                    v-if="material.description"
                    class="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {{ material.description }}
                  </p>
                  <div class="flex items-center gap-3 mt-1 text-xs">
                    <span
                      class="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded font-medium"
                      >{{ material.file_type }}</span
                    >
                    <span
                      v-if="material.file_size_bytes"
                      class="text-gray-600 dark:text-gray-400"
                    >
                      {{ formatFileSize(material.file_size_bytes) }}
                    </span>
                    <span
                      class="capitalize bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand/90 px-2 py-0.5 rounded font-medium"
                      >{{ material.access_level }}</span
                    >
                  </div>
                </div>
              </div>
              <button
                @click="deleteMaterial(material.id)"
                :disabled="deletingMaterialId === material.id"
                class="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon v-if="deletingMaterialId === material.id" name="mdi:loading" class="animate-spin" />
                <Icon v-else name="mdi:delete" />
              </button>
            </div>
          </div>
          <div
            v-else
            class="text-center py-12 text-gray-500 dark:text-gray-400"
          >
            <Icon name="mdi:folder-open" class="text-5xl mb-4" />
            <p>No materials uploaded yet.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Section Modal -->
    <Teleport to="body">
      <div v-if="showAddSection" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
          <div
            class="fixed inset-0 bg-black/50"
            @click="showAddSection = false"
          ></div>

          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Add Section
            </h3>

            <form @submit.prevent="createSection" class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Section Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="sectionForm.title"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Order Index
                </label>
                <input
                  v-model.number="sectionForm.order_index"
                  type="number"
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="showAddSection = false"
                  class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isCreatingSection"
                  class="flex-1 px-4 py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {{ isCreatingSection ? "Creating..." : "Create Section" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Upload Material Modal -->
    <Teleport to="body">
      <div v-if="showUploadMaterial" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
          <div
            class="fixed inset-0 bg-black/50"
            @click="showUploadMaterial = false"
          ></div>

          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Upload Course Material
            </h3>

            <form @submit.prevent="uploadMaterial" class="space-y-4">
              <!-- File Input -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  File <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <input
                    ref="fileInput"
                    type="file"
                    @change="handleFileSelect"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 dark:file:bg-brand/30 dark:file:text-brand cursor-pointer"
                  />
                  <div
                    v-if="selectedFile"
                    class="mt-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Icon
                      :name="getMaterialIcon(getFileType(selectedFile.name))"
                      class="inline mr-2 text-brand dark:text-brand"
                    />
                    <span class="font-medium">{{ selectedFile.name }}</span>
                    <span class="text-gray-500 dark:text-gray-400 ml-2"
                      >({{ formatFileSize(selectedFile.size) }})</span
                    >
                  </div>
                </div>
              </div>

              <!-- Title -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="materialForm.title"
                  type="text"
                  required
                  placeholder="Enter material title"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <!-- Description -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Description
                </label>
                <textarea
                  v-model="materialForm.description"
                  rows="3"
                  placeholder="Brief description of the material (optional)"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <!-- Access Level -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Access Level <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="materialForm.access_level"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                >
                  <option value="public" class="py-2">
                    Public - Anyone can access
                  </option>
                  <option value="enrolled" class="py-2">
                    Enrolled - Only enrolled students
                  </option>
                  <option value="premium" class="py-2">
                    Premium - Paid members only
                  </option>
                </select>
              </div>

              <!-- Download Permission -->
              <div>
                <label class="flex items-center gap-3">
                  <input
                    v-model="materialForm.is_downloadable"
                    type="checkbox"
                    class="w-4 h-4 text-brand bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-brand focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  />
                  <span
                    class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Allow users to download this file
                  </span>
                </label>
              </div>

              <!-- Order Index -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Order Index
                </label>
                <input
                  v-model.number="materialForm.order_index"
                  type="number"
                  min="0"
                  placeholder="Display order (0 for default)"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <!-- Upload Progress -->
              <div
                v-if="uploadProgress > 0 && uploadProgress < 100"
                class="space-y-2"
              >
                <div class="flex justify-between text-sm font-medium">
                  <span class="text-gray-700 dark:text-gray-300"
                    >Uploading...</span
                  >
                  <span class="text-brand dark:text-brand"
                    >{{ uploadProgress }}%</span
                  >
                </div>
                <div
                  class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden"
                >
                  <div
                    class="bg-gradient-to-r from-brand to-brand/80 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                    :style="{ width: `${uploadProgress}%` }"
                  ></div>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  @click="cancelUpload"
                  class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isUploadingMaterial || !selectedFile"
                  class="flex-1 px-4 py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  {{ isUploadingMaterial ? "Uploading..." : "Upload Material" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Add Lesson Modal -->
    <Teleport to="body">
      <div v-if="showAddLessonModal" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
          <div
            class="fixed inset-0 bg-black/50"
            @click="showAddLessonModal = false"
          ></div>

          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Add Lesson
            </h3>

            <form @submit.prevent="createLesson" class="space-y-4">
              <!-- Title -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Lesson Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="lessonForm.title"
                  type="text"
                  required
                  placeholder="Enter lesson title"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <!-- Lesson Type -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Lesson Type <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="lessonForm.kind"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="video">Video</option>
                  <option value="pdf">PDF Document</option>
                  <option value="text">Text Content</option>
                  <option value="external">External Link</option>
                </select>
              </div>

              <!-- Video Fields -->
              <div v-if="lessonForm.kind === 'video'" class="space-y-4">
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Video Asset ID
                  </label>
                  <input
                    v-model="lessonForm.vod_asset_id"
                    type="text"
                    placeholder="Enter video asset ID"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Duration (seconds)
                  </label>
                  <input
                    v-model.number="lessonForm.duration_sec"
                    type="number"
                    min="0"
                    placeholder="Video duration in seconds"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <!-- PDF Fields -->
              <div v-if="lessonForm.kind === 'pdf'">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  PDF URL
                </label>
                <input
                  v-model="lessonForm.pdf_url"
                  type="url"
                  placeholder="https://example.com/document.pdf"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <!-- Text Content Fields -->
              <div v-if="lessonForm.kind === 'text'">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  HTML Content
                </label>
                <textarea
                  v-model="lessonForm.html_content"
                  rows="6"
                  placeholder="Enter HTML content for the lesson"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <!-- External URL Fields -->
              <div v-if="lessonForm.kind === 'external'">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  External URL
                </label>
                <input
                  v-model="lessonForm.external_url"
                  type="url"
                  placeholder="https://example.com/lesson"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <!-- Order Index -->
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Order Index
                </label>
                <input
                  v-model.number="lessonForm.order_index"
                  type="number"
                  min="0"
                  placeholder="Display order (0 for default)"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <!-- Free Preview -->
              <div>
                <label class="flex items-center gap-3 cursor-pointer">
                  <input
                    v-model="lessonForm.is_free_preview"
                    type="checkbox"
                    class="w-4 h-4 text-brand bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-brand focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  />
                  <span
                    class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Allow free preview of this lesson
                  </span>
                </label>
              </div>

              <!-- Actions -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  @click="showAddLessonModal = false"
                  class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isCreatingLesson || !lessonForm.title"
                  class="flex-1 px-4 py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  <Icon v-if="isCreatingLesson" name="mdi:loading" class="animate-spin mr-2" />
                  {{ isCreatingLesson ? "Creating..." : "Create Lesson" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCourseStore } from "~/stores/course.stores";
import { useAuthStore } from "~/stores/auth.stores";
import type { SectionFormData, LessonFormData } from "~/types/course";

const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();
const authStore = useAuthStore();

const loading = ref(true);
const error = ref("");
const isSaving = ref(false);
const activeTab = ref("basic");
const showAddSection = ref(false);
const isCreatingSection = ref(false);

const tabs = [
  { id: "basic", label: "Basic Info", icon: "mdi:information" },
  {
    id: "sections",
    label: "Sections & Lessons",
    icon: "mdi:book-open-variant",
  },
  { id: "materials", label: "Materials", icon: "mdi:folder" },
];

const course = computed(() => courseStore.currentCourse);

const courseData = reactive({
  title: "",
  summary: "",
  level: "",
  status: "draft",
  visibility: "public",
  cover_url: "",
});

const sectionForm = reactive<SectionFormData>({
  title: "",
  order_index: 0,
});

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

const getMaterialIcon = (type?: string) => {
  switch (type) {
    case "pdf":
      return "mdi:file-pdf-box";
    case "video":
      return "mdi:video";
    case "image":
      return "mdi:image";
    case "document":
      return "mdi:file-document";
    case "archive":
      return "mdi:folder-zip";
    default:
      return "mdi:file";
  }
};

const formatFileSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
};

const updateCourseInfo = async () => {
  if (!course.value) return;

  isSaving.value = true;
  try {
    const result = await courseStore.updateCourse(course.value.id, {
      title: courseData.title,
      summary: courseData.summary,
      level: courseData.level as any,
      status: courseData.status as any,
      visibility: courseData.visibility as any,
      cover_url: courseData.cover_url,
    });

    if (!result.success) {
      alert("Failed to update course");
    }
  } catch (err) {
    console.error("Error updating course:", err);
    alert("Error updating course");
  } finally {
    isSaving.value = false;
  }
};

const createSection = async () => {
  if (!course.value || !sectionForm.title) return;

  isCreatingSection.value = true;
  try {
    const result = await courseStore.createSection(
      course.value.id,
      sectionForm
    );

    if (result.success) {
      showAddSection.value = false;
      sectionForm.title = "";
      sectionForm.order_index = 0;
    } else {
      alert("Failed to create section");
    }
  } catch (err) {
    console.error("Error creating section:", err);
    alert("Error creating section");
  } finally {
    isCreatingSection.value = false;
  }
};

const deleteSection = async (sectionId: number) => {
  if (!confirm("Are you sure you want to delete this section? All lessons in this section will also be deleted.")) return;
  
  deletingSectionId.value = sectionId;
  try {
    const result = await courseStore.deleteSection(sectionId);
    if (!result.success) {
      alert(result.error || 'Failed to delete section');
    }
  } catch (err) {
    console.error('Error deleting section:', err);
    alert('Error deleting section. Please try again.');
  } finally {
    deletingSectionId.value = null;
  }
};

const editSection = (section: any) => {
  // TODO: Implement section editing
  console.log("Edit section:", section);
};

const showAddLesson = (sectionId: number) => {
  currentSectionId.value = sectionId;
  lessonForm.section_id = sectionId;
  lessonForm.title = "";
  lessonForm.kind = "video";
  lessonForm.order_index = 0;
  lessonForm.duration_sec = undefined;
  lessonForm.vod_asset_id = undefined;
  lessonForm.pdf_url = undefined;
  lessonForm.html_content = undefined;
  lessonForm.external_url = undefined;
  lessonForm.is_free_preview = false;
  showAddLessonModal.value = true;
};

const createLesson = async () => {
  if (!course.value || !lessonForm.title || !lessonForm.section_id) return;

  isCreatingLesson.value = true;
  try {
    const result = await courseStore.createLesson(course.value.id, lessonForm);

    if (result.success) {
      showAddLessonModal.value = false;
      // Reset form
      lessonForm.title = "";
      lessonForm.kind = "video";
      lessonForm.order_index = 0;
      lessonForm.duration_sec = undefined;
      lessonForm.vod_asset_id = undefined;
      lessonForm.pdf_url = undefined;
      lessonForm.html_content = undefined;
      lessonForm.external_url = undefined;
      lessonForm.is_free_preview = false;
    } else {
      alert(result.error || "Failed to create lesson");
    }
  } catch (err) {
    console.error("Error creating lesson:", err);
    alert("Error creating lesson");
  } finally {
    isCreatingLesson.value = false;
  }
};

const editLesson = (lesson: any) => {
  // TODO: Implement lesson editing
  console.log("Edit lesson:", lesson);
};

const deleteLesson = async (lessonId: number) => {
  if (!confirm("Are you sure you want to delete this lesson?")) return;
  
  deletingLessonId.value = lessonId;
  try {
    const result = await courseStore.deleteLesson(lessonId);
    if (!result.success) {
      alert(result.error || 'Failed to delete lesson');
    }
  } catch (err) {
    console.error('Error deleting lesson:', err);
    alert('Error deleting lesson. Please try again.');
  } finally {
    deletingLessonId.value = null;
  }
};

const showUploadMaterial = ref(false);
const isUploadingMaterial = ref(false);
const uploadProgress = ref(0);
const selectedFile = ref<File | null>(null);
const fileInput = ref<HTMLInputElement>();
const deletingSectionId = ref<number | null>(null);
const deletingLessonId = ref<number | null>(null);
const deletingMaterialId = ref<number | null>(null);
const showAddLessonModal = ref(false);
const isCreatingLesson = ref(false);
const currentSectionId = ref<number | null>(null);

const materialForm = reactive({
  title: "",
  description: "",
  access_level: "enrolled",
  is_downloadable: true,
  order_index: 0,
});

const lessonForm = reactive<LessonFormData>({
  section_id: undefined,
  title: "",
  kind: "video",
  order_index: 0,
  duration_sec: undefined,
  vod_asset_id: undefined,
  pdf_url: undefined,
  html_content: undefined,
  external_url: undefined,
  is_free_preview: false,
});

const getFileType = (filename: string): string => {
  const ext = filename.split(".").pop()?.toLowerCase();
  if (["pdf"].includes(ext || "")) return "pdf";
  if (["mp4", "avi", "mov", "webm"].includes(ext || "")) return "video";
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext || "")) return "image";
  if (["doc", "docx", "txt", "md"].includes(ext || "")) return "document";
  if (["zip", "rar", "7z", "tar"].includes(ext || "")) return "archive";
  return "file";
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0];
    // Auto-fill title if empty
    if (!materialForm.title) {
      const filename = selectedFile.value.name;
      // Remove extension and replace underscores/hyphens with spaces
      materialForm.title = filename
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  }
};

const cancelUpload = () => {
  showUploadMaterial.value = false;
  selectedFile.value = null;
  uploadProgress.value = 0;
  materialForm.title = "";
  materialForm.description = "";
  materialForm.access_level = "enrolled";
  materialForm.is_downloadable = true;
  materialForm.order_index = 0;
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

const uploadMaterial = async () => {
  if (!course.value || !selectedFile.value) return;

  isUploadingMaterial.value = true;
  uploadProgress.value = 0;

  try {
    // Create FormData
    const formData = new FormData();
    formData.append("file", selectedFile.value);
    formData.append("title", materialForm.title);
    formData.append("description", materialForm.description || "");
    formData.append("access_level", materialForm.access_level);
    formData.append("is_downloadable", materialForm.is_downloadable.toString());
    formData.append("order_index", materialForm.order_index.toString());

    // Simulate progress (since we don't have real progress tracking)
    const progressInterval = setInterval(() => {
      if (uploadProgress.value < 90) {
        uploadProgress.value += 10;
      }
    }, 200);

    const result = await courseStore.uploadMaterial(course.value.id, formData);

    clearInterval(progressInterval);
    uploadProgress.value = 100;

    if (result.success) {
      // Success - close modal and reset
      setTimeout(() => {
        cancelUpload();
        // Refresh the course to get the new material
        courseStore.fetchCourseById(course.value!.id, true);
      }, 500);
    } else {
      alert(result.error || "Failed to upload material");
      uploadProgress.value = 0;
    }
  } catch (err) {
    console.error("Error uploading material:", err);
    alert("Error uploading material. Please try again.");
    uploadProgress.value = 0;
  } finally {
    isUploadingMaterial.value = false;
  }
};

const deleteMaterial = async (materialId: number) => {
  if (!confirm("Are you sure you want to delete this material?")) return;

  deletingMaterialId.value = materialId;
  try {
    const result = await courseStore.deleteMaterial(materialId);
    if (!result.success) {
      alert("Failed to delete material");
    }
  } catch (err) {
    console.error("Error deleting material:", err);
    alert("Error deleting material. Please try again.");
  } finally {
    deletingMaterialId.value = null;
  }
};

onMounted(async () => {
  // Check permissions
  const userRoles = authStore.roles;
  if (!userRoles.includes("admin") && !userRoles.includes("teacher")) {
    router.push("/dashboard");
    return;
  }

  // Load course
  const courseId = parseInt(route.params.id as string);
  if (isNaN(courseId)) {
    error.value = "Invalid course ID";
    loading.value = false;
    return;
  }

  try {
    const result = await courseStore.fetchCourseById(courseId, true);

    if (result.success && course.value) {
      // Populate form data
      courseData.title = course.value.title;
      courseData.summary = course.value.summary || "";
      courseData.level = course.value.level || "";
      courseData.status = course.value.status || "draft";
      courseData.visibility = course.value.visibility || "public";
      courseData.cover_url = course.value.cover_url || "";
    } else {
      error.value = result.error || "Failed to load course";
    }
  } catch (err) {
    console.error("Error loading course:", err);
    error.value = "Error loading course";
  } finally {
    loading.value = false;
  }
});
</script>
