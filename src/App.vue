<template>
  <div id="app" class="min-h-screen bg-gray-900 text-white">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="text-xl font-bold text-blue-400">MSI</router-link>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <ul class="flex space-x-8">
              <li>
                <router-link to="/" class="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium" active-class="text-blue-400">
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/projects" class="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium" active-class="text-blue-400">
                  Projects
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium" active-class="text-blue-400">
                  About
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium" active-class="text-blue-400">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed -->
              <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open -->
              <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" active-class="text-blue-400">
            Home
          </router-link>
          <router-link to="/projects" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" active-class="text-blue-400">
            Projects
          </router-link>
          <router-link to="/about" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" active-class="text-blue-400">
            About
          </router-link>
          <router-link to="/contact" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" active-class="text-blue-400">
            Contact
          </router-link>
        </div>
      </div>
    </nav>

    <div class="pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// export default {
//   name: 'App',
// };

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>


