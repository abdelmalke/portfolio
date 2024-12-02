<!-- src/views/Projects.vue -->
<template>
  <div class="min-h-screen bg-gray-900 text-white py-10">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Title and Intro -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-blue-400">Projects</h1>
        <p class="text-gray-300 mt-4">
          Explore some of the projects I've worked on. Click to learn more!
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <!-- Project Image -->
          <img
            :src="project.image"
            :alt="project.title"
            class="h-48 w-full object-cover"
          />

          <!-- Project Details -->
          <div class="p-6">
            <h2 class="text-xl font-semibold text-blue-400">{{ project.title }}</h2>
            <p class="text-gray-300 mt-2">
              {{ project.description }}
            </p>

            <!-- Links -->
            <!-- <div class="mt-4">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:underline"
              >
                View Project
              </a>
              <a
                v-if="project.code"
                :href="project.code"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:underline ml-4"
              >
                View Code
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "EventManager",
          description: "EventManager is a platform for booking tickets for upcoming events or parties. It is a simple platform, created with PHP",
          image: "/Capture d’écran (94).png",
          link: "https://example.com/project-one",
          code: "https://github.com/example/project-one",
        },
        {
          id: 2,
          title: "Residential and Agricultural Land Sales Web Application",
          description: "This project is a responsive web platform enabling users to search, view, and request appointments to visit or purchase residential and agricultural land. It features secure user authentication, detailed property listings with filters, and administrative tools for managing users, listings, and appointments. Users can also upgrade to the 'Editor' role by making a payment for additional functionalities. The application employs an MVC architecture, UML-based design, and modern tools for documentation and deployment, ensuring scalability, security, and a seamless user experience across devices.",
          image: "/fille.png",
          link: "https://example.com/project-two",
          code: "https://github.com/example/project-two",
        },
        {
          id: 3,
          title: "Weather App",
          description: "Built a Weather App using Js Native ,where users can check the weather for there city and any other city.",
          image: "https://bigsondev.com/static/152080ab66d22504c762930a86fa816e/f3583/weather-app.png",
          link: "https://example.com/project-three",
          code: "https://github.com/example/project-three",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add additional styles if needed */
</style>
