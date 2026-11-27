
export type Categoría = 'libro-de-artista' | 'videoarte' | 'videoensayo'

export interface Obra {
    id: string           //lo que aparecerá en la URL
    titulo: string
    anio: number
    categoria: Categoría
    tecnica: string
    descripcion: string
    duracion?: string
    enlace?: string
    imagenes: string[]
}


export const artista = {
    nombre: 'Lucía Rodríguez Navarro',
    email: 'lurona2222@gmail.com',
    instagram: 'rodrigueznotfound',
    statement:
        'Mi obra explora el significado de mi pasado, mi familia y las huellas complejas del colonialismo. Quiero mostrar la nostalgia como un espacio físico, como una casa, más que como un sentimiento pasajero. Al unir vídeos de infancia con textos poéticos, invito a pensar cómo estos recuerdos pueden ser a la vez reconfortantes y «letales». Últimamente incorporo técnicas de grabado tradicional, como la xilografía y el linograbado, que aportan texturas orgánicas y una sensación de fragilidad que subraya lo delicado de la memoria.',
}

export const categorias: { id: Categoría; nombre: string} [] = [
    { id:'libro-de-artista', nombre:'Libro de artista' },
    { id: 'videoarte', nombre: 'Videoarte' },
    { id: 'videoensayo', nombre:'Videoensayo' },
]

export const obras: Obra[] = [
    {
        id: 'chile-sin-miedo',
        titulo: 'Chile without fear and without violence will say NO',
        anio: 2025,
        categoria: 'libro-de-artista',
        tecnica: 'Técnica mixta y xilografía sobre papel',
        descripcion:
            'Una exploración de la memoria política y social a través de la intervención de sellos y texturas.',
        imagenes: [1,2,3,4,5,6].map((n) => `/img/obras/chile-${n}.webp`),
    },
    {
        id: 'kirin-hon',
        titulo: 'Kirin hon',
        anio: 2024,
        categoria: 'libro-de-artista',
        tecnica: 'Acuarela sobre papel',
        descripcion:
            'Un diario visual que explora la iconografía tradicional y las formas orgánicas mediante una pincelada fluida.',
        imagenes: [1, 2, 3, 4, 5, 6, 7].map((n) => `/img/obras/kirin-${n}.webp`),
    
    },
    {
        id: 'memories-that-hug-me',
        titulo: 'Memories that hug me',
        anio: 2024,
        categoria: 'videoarte',
        tecnica: 'Vídeo HD, color. Sonido original y voz en off',
        duracion: '2\' 14"',
        descripcion:
            'Un viaje nostálgico por el archivo familiar que investiga el peso emocional de los espacios domésticos y los recuerdos de infancia.',
        enlace: 'https://youtu.be/ApZa-U9FAm8',
        imagenes: [1, 2, 3, 4, 5].map((n) => `/img/obras/memories-${n}.webp`),
    },
    {
        id: 'having-fun-is-okay',
        titulo: 'Having fun is okay',
        anio: 2023,
        categoria: 'videoensayo',
        tecnica: 'Vídeo HD, color',
        duracion: '29"',
        descripcion:
            'Construido con grabaciones de archivo personal y audio apropiado para reflexionar sobre la alegría contemporánea.',
        imagenes: [1, 2, 3, 4, 5, 6].map((n) => `/img/obras/having-fun-${n}.webp`),

    }
]

export const cv = {
    formacion: [
        {
            periodo: '2023 - actualidad',
            titulo: 'Grado en Bellas Artes',
            centro: 'Facultad de Bellas Artes de San Carlos, UPV',
        },
    ],
    idiomas: [
        { idioma: 'Español', nivel: 'Nativo' },
        { idioma: 'Valenciano', nivel: 'Intermedio' },
        { idioma: 'Inglés', nivel: 'Avanzado (B2)' },
    ],
}