// Archivo de datos de RRPP
// Edita este archivo para agregar, modificar o eliminar RRPP

export type Ubicacion = 'Puerto Esperanza' | 'Puerto Wanda' | 'Puerto Libertad' | 'Eldorado' | 'Iguazu';

export const ubicaciones: Ubicacion[] = [
  'Puerto Esperanza',
  'Puerto Wanda',
  'Puerto Libertad',
  'Eldorado',
  'Iguazu'
];

export interface RRPPData {
  id: number;
  nombre: string;
  apellido: string;
  urlImagen: string;
  instagramUsername: string;
  ubicacion: Ubicacion;
}

export const rrppData: RRPPData[] = [
  
  
  {
    id: 0,
    nombre: 'Luz',
    apellido: 'Duarte',
    urlImagen: '/fotos/luz.webp',
    instagramUsername: 'luzduarte15',
    ubicacion: 'Puerto Esperanza',
  },


  {
    id: 1,
    nombre: 'Mily',
    apellido: 'Pereyra',
    urlImagen: '/fotos/Screenshot_20251201_230432_Instagram(1).webp',
    instagramUsername: 'mily_pereyra09',
    ubicacion: 'Puerto Wanda',
  },
  
  
  {
    id: 2,
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.webp',
    instagramUsername: 'agusss.e01',
    ubicacion: 'Puerto Esperanza',
  },

  {
    id: 3,
    nombre: 'Axel',
    apellido: 'Oviedo',
    urlImagen: '/fotos/axel.webp',
    instagramUsername: 'axelov_',
    ubicacion: 'Puerto Esperanza',
  },
  


  {
    id: 4,
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: '/fotos/karen.webp',
    instagramUsername: 'karen06.1',
    ubicacion: 'Puerto Esperanza',
  },
  
  {
    id: 5,
    nombre: 'Debora',
    apellido: 'Chamorro',
    urlImagen: '/fotos/debora.webp',
    instagramUsername: 'debora_chamorrooo',
    ubicacion: 'Puerto Esperanza',
  },
  
  {
    id: 6,
    nombre: 'Abby',
    apellido: 'Pfaffenzeller',
    urlImagen: '/fotos/aby.webp',
    instagramUsername: 'abby__pfaffenzeller08',
    ubicacion: 'Puerto Esperanza',
  },

  {
    id: 7,
    nombre: 'Dara',
    apellido: 'Aguilar',
    urlImagen: '/fotos/dara.webp',
    instagramUsername: 'daaraa_.0',
    ubicacion: 'Puerto Esperanza',
  },
  {
    id: 8,
    nombre: 'Magui',
    apellido: 'Romero',
    urlImagen: '/fotos/magui.webp',
    instagramUsername: 'ma.gui.romero',
    ubicacion: 'Puerto Wanda',
  },
  {
    id: 9,
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.webp',
    instagramUsername: 'alex_valenti10',
    ubicacion: 'Eldorado',
  },
  {
    id: 10,
    nombre: 'Fabri',
    apellido: 'Marquez',
    urlImagen: '/fotos/fabri.webp',
    instagramUsername: 'm_fabri1',
    ubicacion: 'Puerto Wanda',
  },
];

// INSTRUCCIONES:
// 1. Para agregar un nuevo RRPP, copia uno de los objetos arriba y modifica los datos
// 2. Para la URL de la imagen:
//    - Coloca la imagen PNG en la carpeta public/fotos/
//    - Ejecuta: node compress-images.mjs (convierte PNG a WebP optimizado)
//    - Usa la ruta: '/fotos/nombre-de-la-imagen.webp'
//    - También puedes usar URLs externas (Instagram, etc.)
// 3. El instagramUsername es el nombre de usuario SIN el @
// 4. Ubicaciones disponibles: 'Puerto Esperanza', 'Puerto Wanda', 'Puerto Libertad', 'Eldorado', 'Iguazu'
// 5. Después de hacer cambios, guarda el archivo y la página se actualizará automáticamente
