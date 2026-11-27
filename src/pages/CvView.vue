
<script setup lang="ts">
import { artista, cv } from '@/datos/portafolio'
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-10">
    <h1 class="mb-8 text-7xl uppercase not-italic">cv</h1>

    <div class="mb-6">
      <h2 class="text-2xl font-medium">Datos personales</h2>
      <p>Nombre: {{ artista.nombre }}</p>
      <p>Email: {{ artista.email }}</p>
      <p>Instagram: @{{ artista.instagram }}</p>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-medium">Formación</h2>
      <p v-for="f in cv.formacion" :key="f.titulo">
        {{ f.periodo }}: {{ f.titulo }}. {{ f.centro }}
      </p>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-medium">Idiomas</h2>
      <p v-for="i in cv.idiomas" :key="i.idioma">{{ i.idioma }}: {{ i.nivel }}</p>
    </div>
  </section>
</template>