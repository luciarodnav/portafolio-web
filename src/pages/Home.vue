

<script setup lang="ts">

import { ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { useLetrasVivas } from '@/composables/useLetrasVivas';
import { artista, categorias } from '@/datos/portafolio'


const anio = 2026
const titulo = 'Portfolio'.split('')

const { intensidades, registrar, alMover, alSalir } = useLetrasVivas(titulo.length)


</script>

<template>
  <section
        class="flex min-h-[calc(100svh-5rem)] select-none flex-col"
        @pointermove="alMover"
        @pointerleave="alSalir"
      >
         <div class="flex flex-1 flex-col items-center justify-center gap-2 px-4 pb-10">
          <h1
            aria-label="Portfolio"
            class="pointer-events-none flex justify-center font-normal font-script text-[17vw] normal-case not-italic leading-[1.3] sm:text-[12vw]"
          >
            <span
              v-for="(letra, i) in titulo"
              :key="i"
              :ref="(el) => registrar(el, i)"
              aria-hidden="true"
              class="letra inline-block"
              :style="{ '--i': intensidades[i] }"
            >
              {{ letra }}
            </span>
          </h1>

         <div class="flex flex-wrap justify-center gap-3">
            <Button
              v-for="categoria in categorias"
              :key="categoria.id"
              as-child
              variant="outline"
              size="lg"
              class="h-11 rounded-full px-6 text-lg italic"
            >
              <RouterLink :to="`/obras/${categoria.id}`">
                {{ categoria.nombre }}
                <ArrowRight />
              </RouterLink>
            </Button>
          </div>
        </div>
      </section>
</template>

<style scoped>

.letra {
  color: color-mix(
    in oklab,
    var(--color-foreground) calc((0.4 + var(--i, 0) * 0.6) * 100%),
    transparent
  );
  -webkit-text-stroke: 1px var(--color-foreground);
  transform: translateY(calc(var(--i, 0) * -0.04em));
  transition:
    color 300ms ease,
    transform 300ms ease;
}

@keyframes estampar {
  from {
    opacity: 0;
    scale: 1.35;
  }
  to {
    opacity: var(--op, 0.9);
    scale: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .letra {
    transform: none;
    transition: none;
  }
}

</style>