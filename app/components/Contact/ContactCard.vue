<template>
  <div class="flex items-start justify-between">
    <div class="flex-1">
      <div class="flex items-center space-x-3 mb-2">
        <h3 class="text-lg font-medium text-gray-900">{{ contact.name }}</h3>
        <span
          :class="[
            'px-2 py-1 text-xs font-medium rounded-full',
            contact.form_type === 'contact'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-green-100 text-green-800'
          ]"
        >
          {{ contact.form_type === 'contact' ? 'Contact Form' : 'Brochure Request' }}
        </span>
      </div>
      
      <div class="space-y-1 text-sm text-gray-600">
        <div class="flex items-center space-x-2">
          <Icon name="mdi:email" class="w-4 h-4" />
          <span>{{ contact.email }}</span>
        </div>
        
        <div class="flex items-center space-x-2">
          <Icon name="mdi:phone" class="w-4 h-4" />
          <span>{{ formatPhone(contact.phone) }}</span>
        </div>
        
        <div class="flex items-center space-x-2">
          <Icon name="mdi:school" class="w-4 h-4" />
          <span>{{ formatCourseInterest(contact.course_interest) }}</span>
        </div>
        
        <div v-if="contact.message" class="flex items-start space-x-2 mt-2">
          <Icon name="mdi:message-text" class="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span class="line-clamp-2">{{ contact.message }}</span>
        </div>
      </div>
    </div>
    
    <div class="text-right text-sm text-gray-500 ml-4 flex-shrink-0">
      <div>{{ formatDate(contact.created_at) }}</div>
      <div class="text-xs">{{ formatTime(contact.created_at) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from '@/repository/contact.repository'

interface Props {
  contact: Contact
}

defineProps<Props>()

// Course interest mapping
const courseMap: Record<string, string> = {
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

const formatPhone = (phone: string): string => {
  if (phone.length === 10) {
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`
  }
  return phone
}

const formatCourseInterest = (courseInterest: string): string => {
  return courseMap[courseInterest] || courseInterest
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

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>