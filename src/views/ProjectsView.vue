<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Projects'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <div class="bg-white py-6 sm:py-8 lg:py-40">

        <!-- Project Image Gallery -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <router-link to="/Todo" href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-orange-100 shadow-lg md:h-80">
                <img src="../assets/logs.jpg"
                    loading="lazy" alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">TODO APP</span>
            </router-link>
            <!-- image - end -->

            <!-- image - start -->
            <router-link to="/Project"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-orange-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/gogo3.jpg"
                    loading="lazy" alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">UNIQUE PROJECT</span>
            </router-link>
            <!-- image - end -->
        </div>
      </div>
    </section>
  </MainLayout>
</template>
