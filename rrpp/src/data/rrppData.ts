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

export const rrppData: RRPPData[] = [
  
  

  {
    id: 1,
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.webp',
    instagramUsername: 'alex_valenti10',
    ubicacion: 'Eldorado',
  },

  
  {
    id: 2,
    nombre: 'Axel',
    apellido: 'Oviedo',
    urlImagen: '/fotos/axel.webp',
    instagramUsername: 'axelov_',
    ubicacion: 'Esperanza',
  },
  



  {
    id: 3,
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.webp',
    instagramUsername: 'agusss.e01',
    ubicacion: 'Esperanza',
  },

  
  {
    id: 4,
    nombre: 'Luz',
    apellido: 'Duarte',
    urlImagen: '/fotos/luz.webp',
    instagramUsername: 'luzduarte15',
    ubicacion: 'Esperanza',
  },
  

  {
    id: 5,
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: '/fotos/karen.webp',
    instagramUsername: 'karen06.1',
    ubicacion: 'Esperanza',
  },
  
  {
    id: 6,
    nombre: 'Abby',
    apellido: 'Pfaffenzeller',
    urlImagen: '/fotos/aby.webp',
    instagramUsername: 'abby__pfaffenzeller08',
    ubicacion: 'Esperanza',
  },
  {
    id: 7,
    nombre: 'Pao',
    apellido: 'Borja',
    urlImagen: '/fotos/paoborja.jpg',
    instagramUsername: 'paoo_borja',
    ubicacion: 'Esperanza',
  },
  
  {
    id: 8,
    nombre: 'Pablo',
    apellido: 'Mielnik',
    urlImagen: '/fotos/pablomielnik.webp',
    instagramUsername: 'pabloo_mielnik',
    ubicacion: 'Eldorado',
  },  

  
  {
    id: 9,
    nombre: 'Yesi',
    apellido: 'Villalba',
    urlImagen: '/fotos/yesi.webp',
    instagramUsername: 'yesi_villalba04',
    ubicacion: 'Wanda',
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
