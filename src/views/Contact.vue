<template>
    <div class="min-h-screen bg-gray-900 text-white py-10">
      <div class="container mx-auto px-4 max-w-4xl">
        <!-- Title and Description -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold text-blue-400">Contact Me</h1>
          <p class="text-gray-300 mt-4">
            I'd love to hear from you! Fill out the form below or use the contact information provided.
          </p>
        </div>
  
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Details -->
          <div>
            <h2 class="text-2xl font-semibold text-gray-200 mb-4">Contact Details</h2>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-center">
                <svg class="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-7 9 7-9 7-9-7z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21V10l-6 7 6-7 6 7v-6" />
                </svg>
                <span>23 hazan al mae, safi, Morocco</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l4.5 3.5m7 0l4.5-3.5M7.5 12.5L3 16m18-3.5l-4.5 3.5M3 8l4.5-3.5m7 0L19 8M7.5 3.5L3 8m18 0l-4.5-3.5m0 7l4.5 3.5m-18 0L7.5 8" />
                </svg>
                <span>boughnimiabdlmalke@gmail.com</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l1-3 3-1 3 1 1 3-1 3-3 1-3-1-1-3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21V10l-6 7 6-7 6 7v-6" />
                </svg>
                <span>+212627751677</span>
              </li>
            </ul>
          </div>
  
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-semibold text-gray-200 mb-4">Send a Message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
  
              <div>
                <label for="email" class="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  required
                />
              </div>
  
              <div>
                <label for="message" class="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
  
              <button
                type="submit"
                class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>
            </form>
            <p v-if="message" :class="{ 'text-green-400': success, 'text-red-400': !success }" class="mt-4">
              {{ message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
        isSubmitting: false,
        message: "",
        success: false,
      };
    },
    methods: {
      async submitForm() {
        this.isSubmitting = true;
        this.message = "";
  
        try {
          const response = await axios.post("https://api.web3forms.com/submit", {
            access_key: "0fc59c3a-87a7-4acd-ad52-4a943739c9d0", // Replace with your Web3Forms Access Key
            ...this.form,
          });
  
          if (response.status === 200) {
            this.success = true;
            this.message = "Your message has been sent successfully!";
            this.form = { name: "", email: "", message: "" }; // Reset form
          }
        } catch (error) {
          this.success = false;
          this.message = "An error occurred. Please try again.";
          console.error("Error submitting the form:", error);
        } finally {
          this.isSubmitting = false;
        }
      },
    },
  };
  </script>
  