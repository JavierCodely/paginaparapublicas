// Archivo de datos de RRPP
// Edita este archivo para agregar, modificar o eliminar RRPP

export type Ubicacion = 'Esperanza' | 'Wanda' | 'Libertad' | 'Eldorado' | 'Iguazu';

export const ubicaciones: Ubicacion[] = [
  'Esperanza',
  'Wanda',
  'Libertad',
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

// Array de datos sin IDs - los IDs se asignan automáticamente según el orden
const rrppDataSinId: Omit<RRPPData, 'id'>[] = [
  
  

  {
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.webp',
    instagramUsername: 'alex_valenti10',
    ubicacion: 'Eldorado',
  },


  {
    nombre: 'Axel',
    apellido: 'Oviedo',
    urlImagen: '/fotos/axel.webp',
    instagramUsername: 'axelov_',
    ubicacion: 'Esperanza',
  },
  



  {
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.webp',
    instagramUsername: 'agusss.e01',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Sofi',
    apellido: 'Benitez',
    urlImagen: '/fotos/soffibenitezz.webp',
    instagramUsername: '__soffibenitezz',
    ubicacion: 'Esperanza',
  },
  {
    nombre: 'Ayelen',
    apellido: 'Paz',
    urlImagen: '/fotos/pazayelen.webp',
    instagramUsername: 'pazayelen__',
    ubicacion: 'Eldorado',
  },

   {
    nombre: 'Lauty',
    apellido: 'Lopez',
    urlImagen: '/fotos/lautylopez.webp',
    instagramUsername: 'lauty_lopez013',
    ubicacion: 'Wanda',
  },
  {
    nombre: 'Luz',
    apellido: 'Duarte',
    urlImagen: '/fotos/luz.webp',
    instagramUsername: 'luzduarte15',
    ubicacion: 'Esperanza',
  },

   {
    nombre: 'Abby',
    apellido: 'Pfaffenzeller',
    urlImagen: '/fotos/aby.webp',
    instagramUsername: 'abby-_pfaffenzeller08',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Pao',
    apellido: 'Borja',
    urlImagen: '/fotos/paoborja.jpg',
    instagramUsername: 'paoo_borja',
    ubicacion: 'Esperanza',
  },


    {
    nombre: 'Debora',
    apellido: 'Chavez',
    urlImagen: '/fotos/debora.webp',
    instagramUsername: 'debora_chamorrooo',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Yuli',
    apellido: 'Recalde',
    urlImagen: '/fotos/yuli.webp',
    instagramUsername: '_yuli.recalde',
    ubicacion: 'Eldorado',
  },
   {
    nombre: 'Magali',
    apellido: 'Pinto',
    urlImagen: '/fotos/magapinto.webp',
    instagramUsername: '_magapinto',
    ubicacion: 'Eldorado',
  },
  {
    nombre: 'Pablo',
    apellido: 'Mielnik',
    urlImagen: '/fotos/pablomielnik.webp',
    instagramUsername: 'pabloo_mielnik',
    ubicacion: 'Eldorado',
  },


  {
    nombre: 'Yesi',
    apellido: 'Villalba',
    urlImagen: '/fotos/yesi.webp',
    instagramUsername: 'yesi_villalba04',
    ubicacion: 'Wanda',
  },
  

];

// Función que asigna IDs automáticamente según el orden
export const rrppData: RRPPData[] = rrppDataSinId.map((rrpp, index) => ({
  ...rrpp,
  id: index + 1
}));

// INSTRUCCIONES:
// 1. Para agregar un nuevo RRPP, copia uno de los objetos arriba y modifica los datos
//    IMPORTANTE: NO agregues el campo 'id', se asigna automáticamente según el orden
// 2. Para la URL de la imagen:
//    - Coloca la imagen PNG en la carpeta public/fotos/
//    - Ejecuta: node compress-images.mjs (convierte PNG a WebP optimizado)
//    - Usa la ruta: '/fotos/nombre-de-la-imagen.webp'
//    - También puedes usar URLs externas (Instagram, etc.)
// 3. El instagramUsername es el nombre de usuario SIN el @
// 4. Ubicaciones disponibles: 'Puerto Esperanza', 'Puerto Wanda', 'Puerto Libertad', 'Eldorado', 'Iguazu'
// 5. Después de hacer cambios, guarda el archivo y la página se actualizará automáticamente
