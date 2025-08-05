<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-12 sm:py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Empower Your Workforce for Industry 4.0
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto opacity-90">
            Digital Transformation Starts with Skilled Teams
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-indigo-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300">
              Request Corporate Demo
            </button>
            <button class="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-indigo-900 transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Offerings -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Corporate Training Solutions
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs tailored to your organization's needs
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:account-group" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Team Training Programs</h3>
            <p class="text-gray-600 mb-4">Scalable training solutions for teams of all sizes</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Virtual and on-site delivery options
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Flexible scheduling around business operations
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Multi-batch training for large organizations
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Hands-on labs with real enterprise systems
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:book-open-variant" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Custom Curriculum</h3>
            <p class="text-gray-600 mb-4">Tailored content aligned with your business objectives</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                PLM, AI, IoT, MES integration modules
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Industry-specific use cases and scenarios
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Company-specific tool configurations
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Role-based learning paths
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:trending-up" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Leadership & Change Enablement</h3>
            <p class="text-gray-600 mb-4">Prepare leaders to drive digital transformation</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Change management methodologies
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Digital transformation strategy
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Team leadership in tech adoption
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                ROI measurement and reporting
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:rocket-launch" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Enterprise Onboarding Support</h3>
            <p class="text-gray-600 mb-4">Comprehensive support for technology adoption</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                System setup and configuration guidance
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Data migration and integration support
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Best practices implementation
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="text-green-500 mr-2 flex-shrink-0" />
                Go-live support and troubleshooting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Success Examples -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from organizations that invested in workforce transformation
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="mdi:factory" class="text-white text-xl" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900">Global Manufacturing Corp</h3>
                <p class="text-gray-600 text-sm">500+ Engineers Trained</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">75%</div>
                <div class="text-xs text-gray-600">Faster Design Cycles</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">60%</div>
                <div class="text-xs text-gray-600">Reduced Errors</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">90%</div>
                <div class="text-xs text-gray-600">Team Satisfaction</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"The comprehensive PLM training transformed our engineering workflows. We saw immediate productivity gains and our teams are now confident with advanced features."</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="mdi:car" class="text-white text-xl" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900">AutoTech Solutions</h3>
                <p class="text-gray-600 text-sm">200+ Professionals Upskilled</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">3 Months</div>
                <div class="text-xs text-gray-600">Time to Productivity</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">40%</div>
                <div class="text-xs text-gray-600">Cost Reduction</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">95%</div>
                <div class="text-xs text-gray-600">Completion Rate</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"The AI/ML integration training helped us implement predictive maintenance across our manufacturing line, resulting in significant cost savings."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools & Integration Support -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise Learning Platform
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced tools and integrations for seamless corporate training
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:school-outline" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">LMS Integration</h3>
            <p class="text-gray-600 mb-4">Seamless integration with your existing learning management systems</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• SCORM 1.2/2004 compliance</li>
              <li>• xAPI (Tin Can API) support</li>
              <li>• Single sign-on (SSO) integration</li>
              <li>• Custom branding options</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:chart-line" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Progress Dashboards</h3>
            <p class="text-gray-600 mb-4">Real-time visibility into training progress and outcomes</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Weekly progress reports</li>
              <li>• Individual and team analytics</li>
              <li>• Completion tracking</li>
              <li>• Performance metrics</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <Icon name="mdi:clipboard-check-outline" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Assessment Tools</h3>
            <p class="text-gray-600 mb-4">Comprehensive evaluation and certification system</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Pre/post assessments</li>
              <li>• Skill competency mapping</li>
              <li>• Automated certification</li>
              <li>• Custom evaluation criteria</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why TEKNIKOZ -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TEKNIKOZ E-Learning?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by global enterprises for workforce transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:earth" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Global Trainer Pool</h3>
            <p class="text-gray-600 text-sm">Certified experts from leading engineering companies worldwide</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:shield-check" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Compliance Aligned</h3>
            <p class="text-gray-600 text-sm">MedDev, Automotive, Aerospace industry standards</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:clock-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p class="text-gray-600 text-sm">Dedicated success manager and round-the-clock technical support</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:trophy-outline" class="text-white text-3xl" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Proven Results</h3>
            <p class="text-gray-600 text-sm">500+ successful enterprise transformations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Packages -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Corporate Packages & Discounts
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed for organizations of all sizes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div class="text-center mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Starter Package</h3>
              <p class="text-gray-600 text-sm">Perfect for small teams</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-brand">15% OFF</span>
                <p class="text-gray-500 text-sm">Team of 10+ members</p>
              </div>
            </div>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Core PLM/AI curriculum
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Virtual training delivery
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Basic progress tracking
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Email support
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-brand relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-brand text-white px-4 py-1 rounded-full text-xs font-medium">POPULAR</span>
            </div>
            <div class="text-center mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Growth Package</h3>
              <p class="text-gray-600 text-sm">Ideal for medium enterprises</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-brand">25% OFF</span>
                <p class="text-gray-500 text-sm">Team of 50+ members</p>
              </div>
            </div>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Custom curriculum design
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Hybrid delivery options
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Advanced analytics dashboard
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Dedicated success manager
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <div class="text-center mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Enterprise Package</h3>
              <p class="text-gray-600 text-sm">For large organizations</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-brand">Custom SLA</span>
                <p class="text-gray-500 text-sm">Tailored contracts</p>
              </div>
            </div>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                Fully customized programs
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                On-site training options
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                White-label solutions
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check" class="text-green-500 mr-2" />
                24/7 priority support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Transform Your Workforce Today
        </h2>
        <p class="text-lg sm:text-xl text-white opacity-90 mb-8">
          Join 500+ enterprises that have successfully transformed their teams with our training programs
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Request Corporate Demo
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors duration-300">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Enterprise Training Solutions - Workforce Transformation | Teknikoz E-Learning',
  meta: [
    {
      name: 'description',
      content: 'Enterprise PLM and AI training solutions for Industry 4.0. Custom corporate programs, team training, and workforce transformation services.'
    }
  ]
})
</script>