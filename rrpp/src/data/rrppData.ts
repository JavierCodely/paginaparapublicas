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
    id: 0,
    nombre: 'Luz',
    apellido: 'Duarte',
    urlImagen: '/fotos/luz.png',
    instagramUsername: 'luzduarte15',
  },
  
  {
    id: 1,
    nombre: 'Axel',
    apellido: 'Oviedo',
    urlImagen: '/fotos/axel.png',
    instagramUsername: 'axelov_',
  },

  {
    id: 2,
    nombre: 'Debora',
    apellido: 'Chamorro',
    urlImagen: '/fotos/debora.png',
    instagramUsername: 'debora_chamorrooo',
  },
  {
    id: 3,
    nombre: 'Mily',
    apellido: 'Goiris',
    urlImagen: '/fotos/mily.png',
    instagramUsername: 'mily_.goirisss',
  },
  {
    id: 4,
    nombre: 'Karen',
    apellido: 'Duarte',
    urlImagen: '/fotos/karen.png',
    instagramUsername: 'karen06.1',
  },
  
  {
    id: 5,
    nombre: 'Agustin',
    apellido: 'Escobar',
    urlImagen: '/fotos/agustin.png',
    instagramUsername: 'agusss.e01',
  },
  {
    id: 6,
    nombre: 'Magui',
    apellido: 'Romero',
    urlImagen: '/fotos/magui.png',
    instagramUsername: 'ma.gui.romero',
  },
  {
    id: 7,
    nombre: 'Alex',
    apellido: 'Valenti',
    urlImagen: '/fotos/chulo.png',
    instagramUsername: 'alex_valenti10',
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
