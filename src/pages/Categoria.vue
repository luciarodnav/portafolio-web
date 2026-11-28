
<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TarjetaObra from '@/components/TarjetaObra.vue'
import { obras } from '@/datos/portafolio'

const route = useRoute()
const obrasDeCategoria = computed(() =>
  obras.filter((obra) => obra.categoria === route.params.categoria),
)

</script>

<template>

    <section class="grid gap-10 sm:grid-cols-2">
      <TarjetaObra v-for="obra in obrasDeCategoria" :key="obra.id" :obra="obra" />
    </section>

</template>