
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Badge } from '@/components/ui/badge'
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
      <div class="mt-2 flex flex-wrap items-center gap-2 text-muted-foreground">
        <Badge variant="secondary">{{ obra.anio }}</Badge>
        <span>{{ obra.tecnica }}</span>
      </div>
      </RouterLink>
  </section>
</template>