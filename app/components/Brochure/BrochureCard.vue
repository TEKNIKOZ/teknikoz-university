<template>
  <div class="flex items-start justify-between">
    <div class="flex-1">
      <div class="flex items-center space-x-3 mb-2">
        <h3 class="text-lg font-medium text-gray-900">{{ brochure.brochure_name }}</h3>
        <span
          :class="[
            'px-2 py-1 text-xs font-medium rounded-full',
            brochure.email_sent
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          ]"
        >
          {{ brochure.email_sent ? 'Delivered' : 'Pending' }}
        </span>
      </div>
      
      <div class="space-y-1 text-sm text-gray-600">
        <div class="flex items-center space-x-2">
          <Icon name="mdi:identifier" class="w-4 h-4" />
          <span>ID: {{ brochure.id.slice(0, 8) }}...</span>
        </div>
        
        <div class="flex items-center space-x-2">
          <Icon name="mdi:account" class="w-4 h-4" />
          <span>Contact: {{ brochure.contact_id.slice(0, 8) }}...</span>
        </div>
        
        <div class="flex items-center space-x-2">
          <Icon name="mdi:school" class="w-4 h-4" />
          <span>{{ formatCourseType(brochure.course_type) }}</span>
        </div>
        
        <div v-if="brochure.email_sent_at" class="flex items-center space-x-2">
          <Icon name="mdi:email-check" class="w-4 h-4" />
          <span>Sent: {{ formatDate(brochure.email_sent_at) }}</span>
        </div>
        
        <div v-if="brochure.created_by" class="flex items-center space-x-2">
          <Icon name="mdi:account-plus" class="w-4 h-4" />
          <span>Created by: {{ brochure.created_by }}</span>
        </div>
      </div>
    </div>
    
    <div class="text-right text-sm text-gray-500 ml-4 flex-shrink-0">
      <div>{{ formatDate(brochure.created_at) }}</div>
      <div class="text-xs">{{ formatTime(brochure.created_at) }}</div>
      <div v-if="brochure.updated_at !== brochure.created_at" class="text-xs text-gray-400 mt-1">
        Updated: {{ formatDate(brochure.updated_at) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BrochureRequest } from '@/repository/contact.repository'

interface Props {
  brochure: BrochureRequest
}

defineProps<Props>()

// Course type mapping
const courseTypeMap: Record<string, string> = {
  'engineering': 'Engineering',
  'medical': 'Medical',
  'plm-windchill': 'PLM Windchill',
  'siemens-teamcenter': 'Siemens Teamcenter',
  'cloud-solutions': 'Cloud Solutions',
  'web-development': 'Web Development',
  'data-science': 'Data Science',
  'mobile-development': 'Mobile Development',
  'devops': 'DevOps',
  'ai-ml': 'AI/ML',
  'cybersecurity': 'Cybersecurity',
  'cloud-computing': 'Cloud Computing',
  'other': 'Other'
}

const formatCourseType = (courseType: string): string => {
  return courseTypeMap[courseType] || courseType
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const formatTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>