// Archivo de datos de RRPP
// Edita este archivo para agregar, modificar o eliminar RRPP

export interface RRPPData {
  id: number;
  nombre: string;
  apellido: string;
  urlImagen: string;
  instagramUsername: string;
}

export const rrppData: RRPPData[] = [
  {
    id: 1,
    nombre: 'Debora',
    apellido: 'Chamorro',
    urlImagen: '/fotos/debora.png',
    instagramUsername: 'debora_chamorrooo',
  },
  {
    id: 2,
    nombre: 'Mily',
    apellido: 'Goiris',
    urlImagen: '/fotos/mily.png',
    instagramUsername: 'mily_.goirisss',
  },
  {
    id: 3,
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: '/fotos/karen.png',
    instagramUsername: 'karen06.1',
  },
  {
    id: 4,
    nombre: 'Magui',
    apellido: 'Romero',
    urlImagen: '/fotos/magui.png',
    instagramUsername: 'ma.gui.romero',
  },
  {
    id: 5,
    nombre: 'Axel',
    apellido: 'Lov',
    urlImagen: '/fotos/axel.png',
    instagramUsername: 'axelov_',
  },
  {
    id: 6,
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.png',
    instagramUsername: 'agusss.e01',
  },
];

// INSTRUCCIONES:
// 1. Para agregar un nuevo RRPP, copia uno de los objetos arriba y modifica los datos
// 2. Para la URL de la imagen:
//    - Coloca la imagen en la carpeta public/fotos/
//    - Usa la ruta: '/fotos/nombre-de-la-imagen.png'
//    - También puedes usar URLs externas (Instagram, etc.)
// 3. El instagramUsername es el nombre de usuario SIN el @
// 4. Después de hacer cambios, guarda el archivo y la página se actualizará automáticamente
