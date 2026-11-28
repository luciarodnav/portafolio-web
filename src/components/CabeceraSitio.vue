<script setup lang="ts">
import { artista } from '@/datos/portafolio'

const enlaces = [
  { to: '/statement', texto: 'statement' },
  { to: '/obras', texto: 'obras' },
  { to: '/cv', texto: 'cv' },
]

</script>


<template>
    <header class="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
    <RouterLink to="/" class="text-sm uppercase tracking-[0.25em]">
      {{ artista.nombre }}
    </RouterLink>

    <nav class="flex gap-6 text-xl italic lowercase">
      <RouterLink
        v-for="enlace in enlaces"
        :key="enlace.to"
        :to="enlace.to"
        class="hover:underline hover:underline-offset-8"
        active-class="underline underline-offset-8"
      >
         {{ enlace.texto }}
      </RouterLink>
    </nav>
  </header>
   
</template>



<style scoped>

</style>