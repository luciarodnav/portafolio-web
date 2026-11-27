
<script setup lang="ts">
import { artista } from '@/datos/portafolio'
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-10">
    <h1 class="mb-8 text-5xl">artist statement</h1>
    <p>{{ artista.statement }}</p>
  </section>
</template>