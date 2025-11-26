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
    urlImagen: 'src/data/fotos/debora.png',
    instagramUsername: 'debora_chamorrooo',
  },
  {
    id: 2,
    nombre: 'Mily',
    apellido: 'Goiris',
    urlImagen: 'src/data/fotos/mily.png',
    instagramUsername: 'mily_.goirisss',
  },
  {
    id: 3,
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: 'src/data/fotos/karen.png',
    instagramUsername: 'karen06.1',
  },
  {
    id: 4,
    nombre: 'Magui',
    apellido: 'Romero',
    urlImagen: 'src/data/fotos/magui.png',
    instagramUsername: 'ma.gui.romero',
  },
  {
    id: 4,
    nombre: 'Axel',
    apellido: 'Lov',
    urlImagen: 'src/data/fotos/axel.png',
    instagramUsername: 'axelov_',
  },
  {
    id: 5,
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: 'src/data/fotos/agustin.png',
    instagramUsername: 'agusss.e01',
  },
];

// INSTRUCCIONES:
// 1. Para agregar un nuevo RRPP, copia uno de los objetos arriba y modifica los datos
// 2. Para la URL de la imagen, puedes usar:
//    - Una URL de Instagram (haz click derecho en la imagen > Copiar dirección de imagen)
//    - Una URL de cualquier imagen en internet
//    - Servicios como pravatar.cc, unsplash.com, etc.
// 3. El instagramUsername es el nombre de usuario SIN el @
// 4. Después de hacer cambios, guarda el archivo y la página se actualizará automáticamente
