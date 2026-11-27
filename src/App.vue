

<script setup lang="ts">
import { artista } from '@/datos/portafolio'
</script>

<template>
  <header class="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
    <RouterLink to="/" class="text-sm uppercase tracking-[0.25em]">
      {{ artista.nombre }}
    </RouterLink>
    <nav class="flex gap-6 text-xl italic lowercase">
      <RouterLink to="/statement" active-class="underline underline-offset-8">
        statement
      </RouterLink>
      <RouterLink to="/obras" active-class="underline underline-offset-8">obras</RouterLink>
      <RouterLink to="/cv" active-class="underline underline-offset-8">cv</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>