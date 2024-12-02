<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div class="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 animate-fade-in-up">
            Welcome to My Portfolio
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-300 animate-fade-in-up animation-delay-300">
            HI im Abdelmalek Bougnimi im  Junior Fullstack Developer, I combine technical expertise and a sense of innovation to design tailor-made web solutions.
            Passionate about solving complex challenges, my approach combines performance and creativity, aiming to maximize the impact of projects.
          
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation Links -->
    <div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="max-w-md mx-auto space-y-8">
        <router-link
          to="/projects"
          class="group relative w-full flex justify-center py-4 px-8 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-blue-300 group-hover:text-blue-400 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
          View All Projects
        </router-link>
        <router-link
          to="/contact"
          class="group relative w-full flex justify-center py-4 px-8 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-green-300 group-hover:text-green-400 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          Contact Me
        </router-link>
      </div>
    </div>

    <!-- Featured Skills Section -->
    <section class="py-16 bg-gray-800 bg-opacity-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Featured Skills
        </h2>
        <div class="flex justify-center items-center space-x-8">
          <div v-for="(skill, index) in featuredSkills" :key="skill.name" 
               class="flex flex-col items-center" 
               :class="{'order-first': index === 0, 'order-last': index === 2}">
            <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600">
              <svg class="w-8 h-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path :d="skill.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-300">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const featuredSkills = ref([
  { 
    name: 'Web Development', 
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' 
  },
  { 
    name: 'UI/UX Design', 
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1V4z' 
  },
  { 
    name: 'Responsive Design', 
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
  }
]);
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animation-delay-300 {
  animation-delay: 300ms;
}
</style>