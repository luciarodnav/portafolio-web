<script setup lang="ts">
import { artista } from '@/datos/portafolio'

import { ref } from 'vue'
import { Menu } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const enlaces = [
  { to: '/statement', texto: 'statement' },
  { to: '/obras', texto: 'obras' },
  { to: '/cv', texto: 'cv' },
]

const menuAbierto = ref(false)

</script>


<template>
    <header class="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
    <RouterLink to="/" class="text-sm uppercase tracking-[0.25em]">
      {{ artista.nombre }}
    </RouterLink>

    <nav class="hidden gap-6 text-xl italic lowercase md:flex">
      <RouterLink
        v-for="enlace in enlaces"
        :key="enlace.to"
        :to="enlace.to"
        class="hover:underline hover:underline-offset-8"
        active-class="underline underline-offset-8"
      >
        {{ enlace.texto }}
      </RouterLink>
    </nav>

    <Sheet v-model:open="menuAbierto">
      <SheetTrigger as-child>
        <Button variant="ghost" size="icon" class="md:hidden" aria-label="Abrir menú">
          <Menu class="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" class="w-72">
        <SheetHeader>
          <SheetTitle class="text-sm uppercase tracking-[0.25em]">
            {{ artista.nombre }}
          </SheetTitle>
          <SheetDescription class="sr-only">Menú de navegación</SheetDescription>
        </SheetHeader>

          <nav class="flex flex-col gap-6 px-4 text-3xl italic lowercase">
            <SheetClose v-for="enlace in enlaces" :key="enlace.to" as-child>
              <RouterLink
                :to="enlace.to"
                class="hover:underline hover:underline-offset-8"
                active-class="underline underline-offset-8"
              >
                {{ enlace.texto }}

              </RouterLink>

            </SheetClose>

          </nav>
        </SheetContent>
      </Sheet>
    </header>
   
</template>



<style scoped>

</style>