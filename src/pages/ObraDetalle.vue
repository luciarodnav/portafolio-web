
<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, ExternalLink } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { categorias, obras } from '@/datos/portafolio'

// Vue Router nos pasa estos dos valores desde la URL
const props = defineProps<{ categoria: string; id: string }>()
const obra = computed(() => obras.find((o) => o.id === props.id))
const nombreCategoria = computed(
    () => categorias.find((c) => c.id === obra.value?.categoria)?.nombre,
)
</script>

<template>
  <article v-if="obra">

    <Button as-child variant="ghost" size="sm" class="-ml-3 mb-4 text-base italic">
      <RouterLink :to="`/obras/${categoria}`">
        <ArrowLeft />
        volver
      </RouterLink>
    </Button>

    <h1 class="text-5xl">{{ obra.titulo }}</h1>

    <div class="mt-4 flex flex-wrap items-center gap-2">
      <Badge>{{ nombreCategoria }}</Badge>
      <Badge variant="secondary">{{ obra.anio }}</Badge>
      <Badge v-if="obra.duracion" variant="outline">{{ obra.duracion }}</Badge>
    </div>

    <p class="mt-3 text-muted-foreground">{{ obra.tecnica }}</p>
    <p class="mt-4 max-w-2xl">{{ obra.descripcion }}</p>

    <Button v-if="obra.enlace" as-child variant="outline" class="mt-6 text-base italic">
      <a :href="obra.enlace" target="_blank" rel="noopener noreferrer">
        ver vídeo
        <ExternalLink />
      </a>
    </Button>

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