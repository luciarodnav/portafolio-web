
import { ref } from 'vue'

export function useLetrasVivas(total: number, radio = 220) {
    const intensidades = ref<number[]>(Array.from({ length: total }, () => 0))

    const letras: (HTMLElement | null)[] = []
    let pendiente = false
    let cursor = { x: 0, y: 0 }

    function registrar(elemento: unknown, indice: number) {
    letras[indice] = elemento instanceof HTMLElement ? elemento : null
    }

    function calcular() {
        intensidades.value = letras.map((letra) => {
        if (!letra) return 0
        const caja = letra.getBoundingClientRect()
        const dx = cursor.x - (caja.left + caja.width / 2)
        const dy = cursor.y - (caja.top + caja.height / 2)
        const cercania = Math.max(0, 1 - Math.hypot(dx, dy) / radio)
        return Number((cercania ** 1.5).toFixed(3))
        })
    }

    function alMover(evento: PointerEvent) {
    cursor = { x: evento.clientX, y: evento.clientY }
    if (pendiente) return
    pendiente = true
    requestAnimationFrame(() => {
      pendiente = false
      calcular()
    })
      }

    function alSalir() {
    intensidades.value = Array.from({ length: total }, () => 0)
    }

    return { intensidades, registrar, alMover, alSalir }
    }