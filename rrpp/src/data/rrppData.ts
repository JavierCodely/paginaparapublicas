// Archivo de datos de RRPP
// Edita este archivo para agregar, modificar o eliminar RRPP

export type Ubicacion = 'Esperanza' | 'Iguazú' | 'Libertad' | 'Wanda' ;


export const ubicaciones: Ubicacion[] = [
  'Esperanza',
  
  'Wanda',
  
  'Libertad',
  'Iguazú'
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
    nombre: 'Agustina',
    apellido: 'Cardozo',
    urlImagen: '/fotos/AgustinaCardozo.webp',
    instagramUsername: 'agussscardozo_',
    whatsappUrl: 'https://wa.me/543757547504?src=qr',
    ubicacion: 'Libertad',
  },
  
  {
    nombre: 'Ezequiel',
    apellido: 'Villalba',
    urlImagen: '/fotos/Ezequiel.webp',
    instagramUsername: 'ezequiiel_villalba',
    whatsappUrl: 'https://wa.me/543757504262?src=qr',
    ubicacion: 'Esperanza',
  },
  
  {
    nombre: 'Agustina',
    apellido: 'Davalos',
    urlImagen: '/fotos/AgustinaDavalos.webp',
    instagramUsername: 'agustina_davalos08',
    whatsappUrl: 'https://wa.me/543757610816?src=qr',
    ubicacion: 'Wanda',
  },
  
  {
    nombre: 'Nico',
    apellido: 'Zilz',
    urlImagen: '/fotos/Nico.webp',
    instagramUsername: 'nico_zilz',
    whatsappUrl: 'https://wa.me/543757525976?src=qr',
    ubicacion: 'Wanda',
  },
  

  

    

];

// Función que asigna IDs automáticamente según el orden
export const rrppData: RRPPData[] = rrppDataSinId.map((rrpp, index) => ({
  ...rrpp,
  id: index + 1,
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
