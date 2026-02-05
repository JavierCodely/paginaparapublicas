// Archivo de datos de RRPP
// Edita este archivo para agregar, modificar o eliminar RRPP

export type Ubicacion = 'Esperanza' | 'Wanda' | 'Libertad' | 'Eldorado' | 'Iguazu';

export const ubicaciones: Ubicacion[] = [
  'Esperanza',
  'Eldorado',
  'Wanda',
  'Libertad',
  
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
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.webp',
    instagramUsername: 'agusss.e01',
    ubicacion: 'Esperanza',
  },
  
  
  {
    nombre: 'Luz',
    apellido: 'Duarte',
    urlImagen: '/fotos/luz.webp',
    instagramUsername: 'luzduarte15',
    ubicacion: 'Esperanza',
  },
  
  {
    nombre: 'Aylen',
    apellido: 'Molina',
    urlImagen: '/fotos/aylen.webp',
    instagramUsername: 'aylen_mln',
    ubicacion: 'Esperanza',
  },

  
  {
    nombre: 'Daniela',
    apellido: 'Toledo',
    urlImagen: '/fotos/daniela_toledo.webp',
    instagramUsername: 'daniela_toledo15',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.webp',
    instagramUsername: 'alex_valenti10',
    ubicacion: 'Esperanza',
  },


  {
    nombre: 'Axel',
    apellido: 'Oviedo',
    urlImagen: '/fotos/axel.webp',
    instagramUsername: 'axelov_',
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
    nombre: 'Abby',
    apellido: 'Pfaffenzeller',
    urlImagen: '/fotos/aby.webp',
    instagramUsername: 'abby-_pfaffenzeller08',
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
    nombre: 'Pao',
    apellido: 'Borja',
    urlImagen: '/fotos/paoborja.jpg',
    instagramUsername: 'paoo_borja',
    ubicacion: 'Esperanza',
  },
  {
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: '/fotos/karen.webp',
    instagramUsername: 'karen06.1',
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
    nombre: 'Yesi',
    apellido: 'Villalba',
    urlImagen: '/fotos/yesi.webp',
    instagramUsername: 'yesi_villalba04',
    ubicacion: 'Wanda',
  },
  
   {
    nombre: 'Magali',
    apellido: 'Pinto',
    urlImagen: '/fotos/magapinto.webp',
    instagramUsername: '_magapinto',
    ubicacion: 'Eldorado',
  },
  {
    nombre: 'Mairon',
    apellido: '',
    urlImagen: '/fotos/mairon.webp',
    instagramUsername: 'maironn._',
    ubicacion: 'Eldorado',
  },
  {
    nombre: 'Agus',
    apellido: 'Ferreira',
    urlImagen: '/fotos/agusferreira.webp',
    instagramUsername: 'aguuss_ferreiiraa',
    ubicacion: 'Eldorado',
  },
  {
    nombre: 'Pablo',
    apellido: 'Mielnik',
    urlImagen: '/fotos/pablomielnik.webp',
    instagramUsername: 'pabloo_mielnik',
    ubicacion: 'Eldorado',
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
