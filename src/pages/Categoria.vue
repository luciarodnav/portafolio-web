
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { obras } from '@/datos/portafolio'

const route = useRoute()
const obrasDeCategoria = computed(() =>
  obras.filter((obra) => obra.categoria === route.params.categoria),
)
</script>

<template>
  <section class="grid gap-10 sm:grid-cols-2">
    <RouterLink
      v-for="obra in obrasDeCategoria"
      :key="obra.id"
      :to="{ name: 'obra', params: { categoria: obra.categoria, id: obra.id } }"
      class="block"
    >
      <img
        :src="obra.imagenes[0]"
        :alt="`Portada de ${obra.titulo}`"
        class="aspect-video w-full bg-muted object-cover"
      />
      <h2 class="mt-3 text-3xl">{{ obra.titulo }}</h2>
      <p class="text-muted-foreground">{{ obra.anio }} · {{ obra.tecnica }}</p>
    </RouterLink>
  </section>
</template>