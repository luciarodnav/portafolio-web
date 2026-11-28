<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import type { Obra } from '@/datos/portafolio'

defineProps<{ obra: Obra }>()

</script>

<template>
    <RouterLink
    :to="{ name: 'obra', params: { categoria: obra.categoria, id: obra.id } }"
    class="group block"
     >
     <div class="overflow-hidden bg-muted">
      <img
        :src="obra.imagenes[0]"
        :alt="`Portada de ${obra.titulo}`"
        class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <h2 class="mt-3 text-3xl group-hover:underline group-hover:underline-offset-8">
      {{ obra.titulo }}
    </h2>
    <div class="mt-2 flex flex-wrap items-center gap-2 text-muted-foreground">
      <Badge variant="secondary">{{ obra.anio }}</Badge>
      <span>{{ obra.tecnica }}</span>
    </div>
    
    </RouterLink>


</template>



<style lang="scss" scoped>

</style>