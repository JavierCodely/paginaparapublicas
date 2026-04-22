// Archivo de datos de RRPP
// Edita este archivo para agregar, modificar o eliminar RRPP

export type Ubicacion = 'Esperanza' | 'Wanda' | 'Libertad' | 'Eldorado' | 'Iguazú';

export const ubicaciones: Ubicacion[] = [
  'Esperanza',
  'Iguazú',
  'Wanda',
  'Libertad'
];

export interface RRPPData {
  id: number;
  nombre: string;
  apellido: string;
  urlImagen: string;
  instagramUsername: string;
  instagramPostUrl?: string; // URL de post específico de Instagram (opcional)
  whatsappUrl?: string; // URL o link de WhatsApp (opcional)
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
    whatsappUrl: 'https://wa.me/5493757501271?src=qr',
    ubicacion: 'Esperanza',
  },
  
  {
    nombre: 'Elias',
    apellido: 'Vive',
    urlImagen: '/fotos/eliasvide.webp',
    instagramUsername: 'elias.vive',
    whatsappUrl: 'https://wa.me/543757585076?src=qr',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Axel',
    apellido: 'Oviedo',
    
    urlImagen: '/fotos/axel.webp',
    
    whatsappUrl: 'https://wa.me/543757697037?src=qr',
    instagramUsername: 'axelov_',
    ubicacion: 'Esperanza',
  },

  
 
  {
    nombre: 'Aylen',
    apellido: 'Molina',
    urlImagen: '/fotos/aylen.webp',
    whatsappUrl: 'https://wa.me/543757684896?src=qr',
    
    instagramUsername: 'aylen_mln',
    ubicacion: 'Esperanza',
  },
  

  {
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.webp',
    instagramUsername: 'alex_valenti10',
    whatsappUrl: 'https://wa.me/5493751235586?src=qr',
    ubicacion: 'Esperanza',
  },

  {
    nombre: 'Mario',
    apellido: 'Ramos',
    urlImagen: '/fotos/marioramos.webp',
    instagramUsername: 'marioramos1087',
    ubicacion: 'Libertad',
  },
  {
    nombre: 'Nico',
    apellido: 'Zilz',
    urlImagen: '/fotos/nicozilz.webp',
    instagramUsername: 'nico_zilz',
    ubicacion: 'Wanda',
  },

  
  

  

    
  {
    nombre: 'Mati',
    apellido: 'Piriz',
    urlImagen: '/fotos/mati.png',
    instagramUsername: 'matipirizz_',
    ubicacion: 'Iguazú',
  }


];

// Función que asigna IDs automáticamente según el orden
export const rrppData: RRPPData[] = rrppDataSinId.map((rrpp, index) => ({
  ...rrpp,
  id
  : index + 1
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
