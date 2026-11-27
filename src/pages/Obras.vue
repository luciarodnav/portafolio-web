
<script setup lang="ts">
import { categorias } from '@/datos/portafolio'
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-10">
    <nav class="mb-10 flex flex-wrap gap-6 text-2xl italic">
      <RouterLink
        v-for="categoria in categorias"
        :key="categoria.id"
        :to="`/obras/${categoria.id}`"
        class="lowercase text-muted-foreground hover:text-foreground"
        active-class="!text-foreground underline underline-offset-8"
      >
        {{ categoria.nombre }}
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>