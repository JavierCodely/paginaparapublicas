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
  instagramPostUrl?: string; // URL de post específico de Instagram (opcional)
  ubicacion: Ubicacion;
}

// Array de datos sin IDs - los IDs se asignan automáticamente según el orden
const rrppDataSinId: Omit<RRPPData, 'id'>[] = [
  
  // EJEMPLO: Cómo agregar una URL de post específica de Instagram
  // {
  //   nombre: 'Nombre',
  //   apellido: 'Apellido',
  //   urlImagen: '/fotos/foto.webp',
  //   instagramUsername: 'usuario',
  //   instagramPostUrl: 'https://www.instagram.com/p/C8lYbUsMF2O/', // <- URL del post
  //   ubicacion: 'Esperanza',
  // },

  {
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.webp',
    instagramUsername: 'agusss.e01',
    instagramPostUrl: 'https://www.instagram.com/p/DAeWlSAyyHD/',
    ubicacion: 'Esperanza',
  },
  
  
  {
    nombre: 'Luz',
    apellido: 'Duarte',
    urlImagen: '/fotos/luz.webp',
    instagramUsername: 'luzduarte15',
    instagramPostUrl: 'https://www.instagram.com/p/DRXLt18EVdfFGa-Uuiuf3Zbtu4q9cKhzgRyoiw0/?igsh=MWd5MHgwdnQ1NXVsMg==',
    ubicacion: 'Esperanza',
  },
  
  {
    nombre: 'Aylen',
    apellido: 'Molina',
    urlImagen: '/fotos/aylen.webp',
    instagramUsername: 'aylen_mln',
    instagramPostUrl: 'https://www.instagram.com/p/DRTJ4rhDtNH/?igsh=ZzRtYm91NmJpdXV2',
    ubicacion: 'Esperanza',
  },

  
  {
    nombre: 'Daniela',
    apellido: 'Toledo',
    urlImagen: '/fotos/daniela_toledo.webp',
    instagramPostUrl: 'https://www.instagram.com/p/DOTW3TiEWe8/?igsh=MTZzZjdtejd5c2hkNA==',
    instagramUsername: 'daniela_toledo15',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.webp',
    instagramPostUrl: 'https://www.instagram.com/p/DOoTuDngBST/?igsh=bXZrMjl4NG5qZzlt',
    instagramUsername: 'alex_valenti10',
    ubicacion: 'Esperanza',
  },


  {
    nombre: 'Axel',
    apellido: 'Oviedo',
    
    urlImagen: '/fotos/axel.webp',
    instagramPostUrl: 'https://www.instagram.com/p/Cv7lVPNO-zH/?igsh=MWRkNWowYjYwNHQ4MQ==',
    instagramUsername: 'axelov_',
    ubicacion: 'Esperanza',
  },


  
  {
    nombre: 'Yuli',
    apellido: 'Recalde',
    urlImagen: '/fotos/yuli.webp',
    instagramPostUrl: 'https://www.instagram.com/p/C_NtFtMxg9m/?igsh=b3BwbGR4YnFkcGZu',
    instagramUsername: '_yuli.recalde',
    ubicacion: 'Eldorado',
  },


  
  {
    nombre: 'Ayelen',
    apellido: 'Paz',
    urlImagen: '/fotos/pazayelen.webp',
    instagramUsername: 'pazayelen__',
    instagramPostUrl: 'https://www.instagram.com/p/DRUy_18Ea2_/?igsh=emRvYTNodWdvZ2E1',
    ubicacion: 'Eldorado',
  },

    {
    nombre: 'Debora',
    apellido: 'Chavez',
    urlImagen: '/fotos/debora.webp',
    instagramPostUrl: 'https://www.instagram.com/p/DQzSg2Ajqgm/?igsh=YzVia3diaG5yZzNn',
    instagramUsername: 'debora_chamorrooo',
    ubicacion: 'Esperanza',
  },
  
   {
    nombre: 'Magali',
    apellido: 'Pinto',
    urlImagen: '/fotos/magapinto.webp',
    instagramPostUrl: 'https://www.instagram.com/p/DPcJcbekjOh/?igsh=aXg2djhpYm1mMzZx',
    instagramUsername: '_magapinto',
    ubicacion: 'Eldorado',
  },
  {
    nombre: 'Mati',
    apellido: 'Piriz',
    urlImagen: '/fotos/mati.png',
    instagramPostUrl: 'https://www.instagram.com/p/DNt1OYA0q1I/?img_index=1',
    instagramUsername: 'matipirizz_',
    ubicacion: 'Iguazu',
  },
  {
    nombre: 'Mairon',
    apellido: '',
    urlImagen: '/fotos/mairon.webp',
    instagramPostUrl: 'https://www.instagram.com/p/DTeez3GDdg4/?igsh=MWhidnplZzEwZWx4MQ==',
    instagramUsername: 'maironn._',
    ubicacion: 'Eldorado',
  },
  {
    nombre: 'Pablo',
    apellido: 'Mielnik',
    urlImagen: '/fotos/pablomielnik.webp',
    instagramPostUrl: 'https://www.instagram.com/p/CtfkigMrE4F/?igsh=MTF0MTV5ZGVhbWp4',

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
// 4. El instagramPostUrl es OPCIONAL - si lo agregas, el link abrirá ese post específico
//    Ejemplo: instagramPostUrl: 'https://www.instagram.com/p/C8lYbUsMF2O/'
//    Si no lo agregas, se abrirá el perfil del usuario
// 5. Ubicaciones disponibles: 'Puerto Esperanza', 'Puerto Wanda', 'Puerto Libertad', 'Eldorado', 'Iguazu'
// 6. Después de hacer cambios, guarda el archivo y la página se actualizará automáticamente
