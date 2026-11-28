

<script setup lang="ts">

import { ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { artista } from '@/datos/portafolio'

const anio = 2026

</script>

<template>

  <section class="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p class="text-lg uppercase tracking-[0.3em]">{{ artista.nombre }}</p>
      <p class="italic">{{ anio }}</p>
    <h1 class="font-script text-outline text-7xl normal-case not-italic sm:text-9xl">Portfolio</h1>

      <Button as-child variant="outline" size="lg" class="mt-6 h-12 rounded-full px-8 text-xl italic">
          <RouterLink to="/obras">
            ver obras
            <ArrowRight />
          </RouterLink>
      </Button>
  </section>

</template>