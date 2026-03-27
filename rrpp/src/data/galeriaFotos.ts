// ═══════════════════════════════════════════════════════════════════════════
//  GALERÍA DE FOTOS DEL CLUB
// ═══════════════════════════════════════════════════════════════════════════
//
//  CÓMO AGREGAR FOTOS:
//  1. Copiá la imagen a la carpeta:  public/Galeria/
//  2. Agregá el nombre del archivo en el array de abajo
//     Ejemplo: si subiste  public/Galeria/fiesta-2025.webp
//              → escribís  'fiesta-2025.webp'
//
//  Formatos soportados: .webp · .jpg · .jpeg · .png
//  Recomendado: convertí las fotos a .webp para mejor rendimiento
//
//  El orden del array es el orden en que aparecen en el collage.
//  La PRIMERA foto siempre ocupa el espacio grande (2×2).
// ═══════════════════════════════════════════════════════════════════════════

export const GALERIA_FOTOS: string[] = [
  '050F56ED-C923-4C2B-854E-DBA38B7F1CF9.webp',
  '23CDC4DA-8A04-4699-BA4F-BC3507299D15.webp',
  '42829787-C5DB-4141-93E0-022D898414FF (1).webp',
  '6A069E92-17D7-4B55-A847-34D05534985A.webp',
  '7574E760-9140-4445-A008-44014CBE1A77.webp',
  '95FC7F6A-EC9D-40B9-9627-9434E6BF2C80.webp',
  'ADA9A07E-AD21-41BE-ACD5-96BAE3B7D06D (1).webp',
  'D5EE2E9B-2A53-4E7C-987F-847AAA0DBE4E.webp',
  'D6EA7563-972D-4300-A8DC-7046086603E4.webp',
  'Instagram.00_00_04_44.Imagen fija002.webp',
];

// Carpeta base dentro de public/ — no cambiar salvo que muevas la carpeta
export const GALERIA_BASE_PATH = '/Galeria/';
