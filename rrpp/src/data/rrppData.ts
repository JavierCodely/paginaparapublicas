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
    urlImagen: '/fotos/luz.png',
    instagramUsername: 'luzduarte15',
    ubicacion: 'Puerto Esperanza',
  },

  {
    id: 1,
    nombre: 'Axel',
    apellido: 'Oviedo',
    urlImagen: '/fotos/axel.png',
    instagramUsername: 'axelov_',
    ubicacion: 'Puerto Esperanza',
  },

  {
    id: 2,
    nombre: 'Debora',
    apellido: 'Chamorro',
    urlImagen: '/fotos/debora.png',
    instagramUsername: 'debora_chamorrooo',
    ubicacion: 'Puerto Esperanza',
  },
  {
    id: 3,
    nombre: 'Abby',
    apellido: 'Pfaffenzeller',
    urlImagen: '/fotos/aby.png',
    instagramUsername: 'abby_pfaffenzeller08',
    ubicacion: 'Puerto Esperanza',
  },
  {
    id: 4,
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: '/fotos/karen.png',
    instagramUsername: 'karen06.1',
    ubicacion: 'Puerto Esperanza',
  },

  {
    id: 5,
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.png',
    instagramUsername: 'agusss.e01',
    ubicacion: 'Puerto Esperanza',
  },
  {
    id: 6,
    nombre: 'Magui',
    apellido: 'Romero',
    urlImagen: '/fotos/magui.png',
    instagramUsername: 'ma.gui.romero',
    ubicacion: 'Puerto Wanda',
  },
  {
    id: 7,
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.png',
    instagramUsername: 'alex_valenti10',
    ubicacion: 'Eldorado',
  },
  {
    id: 8,
    nombre: 'Fabri',
    apellido: 'Marquez',
    urlImagen: '/fotos/fabri.png',
    instagramUsername: 'm_fabri1',
    ubicacion: 'Puerto Wanda',
  },
];

// INSTRUCCIONES:
// 1. Para agregar un nuevo RRPP, copia uno de los objetos arriba y modifica los datos
// 2. Para la URL de la imagen:
//    - Coloca la imagen en la carpeta public/fotos/
//    - Usa la ruta: '/fotos/nombre-de-la-imagen.png'
//    - También puedes usar URLs externas (Instagram, etc.)
// 3. El instagramUsername es el nombre de usuario SIN el @
// 4. Ubicaciones disponibles: 'Puerto Esperanza', 'Puerto Wanda', 'Puerto Libertad', 'Eldorado', 'Iguazu'
// 5. Después de hacer cambios, guarda el archivo y la página se actualizará automáticamente
