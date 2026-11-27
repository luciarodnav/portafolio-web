
<script setup lang="ts">
import { computed } from 'vue'
import { ExternalLink } from '@lucide/vue'
import { obras } from '@/datos/portafolio'

// Vue Router nos pasa estos dos valores desde la URL
const props = defineProps<{ categoria: string; id: string }>()
const obra = computed(() => obras.find((o) => o.id === props.id))
</script>

<template>
  <article v-if="obra">
    <h1 class="text-5xl">{{ obra.titulo }}</h1>
    <p class="mt-3 text-muted-foreground">
      {{ obra.anio }} · {{ obra.tecnica }}
      <span v-if="obra.duracion"> · {{ obra.duracion }}</span>
    </p>
    <p class="mt-4 max-w-2xl">{{ obra.descripcion }}</p>

    <a
      v-if="obra.enlace"
      :href="obra.enlace"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 inline-flex items-center gap-2 italic underline underline-offset-4"
    >
      ver vídeo
      <ExternalLink class="size-4" />
    </a>

    <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      <img
        v-for="(imagen, i) in obra.imagenes"
        :key="imagen"
        :src="imagen"
        :alt="`${obra.titulo} (${i + 1} de ${obra.imagenes.length})`"
        class="aspect-video w-full bg-muted object-cover"
      />
    </div>
  </article>
  <p v-else>Esta obra no existe.</p>
</template>