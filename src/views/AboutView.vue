<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Navigation -->
    <!-- <nav class="fixed top-0 right-0 p-8">
      <ul class="flex space-x-8">
        <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">ABOUT</a></li>
        <li><a href="#portfolio" class="text-gray-400 hover:text-white transition-colors">PORTFOLIO</a></li>
        <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">CONTACT</a></li>
      </ul>
    </nav> -->

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <!-- Image Section -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="/bb.jpg?height=600&width=600"
            alt="Profile"
            class="rounded-lg w-full shadow-2xl"
          />


          <div class="absolute inset-0 bg-gray-900/10 rounded-lg">
            <div class="grid grid-cols-4 gap-4 p-4 opacity-20">
              <!-- Tech Background Icons -->
              <div v-for="i in 12" :key="i" class="w-8 h-8 bg-gray-500/20 rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Hi, my name is <span class="text-blue-400">Abdelmalke Boughnimi</span>.
          </h1>
          
          <div class="text-xl">
            I'm a <span class="text-blue-400 font-semibold">Full stck developer</span> 
            <span class="text-gray-400">.</span>
          </div>
          
          <p class="text-gray-400 text-lg leading-relaxed">
            Junior Fullstack Developer, I combine technical expertise and a sense of innovation to design tailor-made web solutions.
            Passionate about solving complex challenges, my approach combines performance and creativity, aiming to maximize the impact of projects.
          </p>

          <!-- Download CV Button -->
          <div class="pt-6">
            <a 
              href="/Recap - préparation de Portfolios pour le Job Dating - T4S .pdf" 
              download="My_CV.pdf"
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
            >
              <svg 
                class="w-5 h-5 mr-2 group-hover:transform group-hover:-translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
          </div>

          <!-- Skills Section -->
          <div class="pt-12">
            <h2 class="text-xl font-semibold mb-6 text-gray-300">SKILLS</h2>
            <div class="grid grid-cols-4 gap-8">
              <div v-for="skill in skills" :key="skill.name" 
                class="flex flex-col items-center group">
                <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <img :src="skill.icon" :alt="skill.name" class="w-6 h-6" />
                </div>
                <span class="text-xs text-gray-400 mt-2">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dark Mode Toggle -->
    <button 
      class="fixed bottom-8 right-8 p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Swagger', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png' },
  { name: 'UML-Merise', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Model.png' },
]);

</script>