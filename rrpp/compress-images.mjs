import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const inputDir = './public/fotos';
const outputDir = './public/fotos-optimized';

async function compressImages() {
  try {
    const files = await readdir(inputDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Encontrados ${pngFiles.length} archivos PNG para optimizar\n`);

    for (const file of pngFiles) {
      const inputPath = join(inputDir, file);
      const outputPath = join(outputDir, file);

      console.log(`Procesando: ${file}...`);

      await sharp(inputPath)
        .resize(800, 800, {
          fit: 'cover',
          position: 'center'
        })
        .png({
          quality: 80,
          compressionLevel: 9,
          palette: true
        })
        .toFile(outputPath);

      const inputSize = (await sharp(inputPath).metadata()).size;
      const outputSize = (await sharp(outputPath).metadata()).size;
      const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`  ✓ ${file}: ${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB (${reduction}% reducción)\n`);
    }

    console.log('✨ Optimización completada!');
    console.log(`\nArchivos optimizados guardados en: ${outputDir}`);
    console.log('Para usarlos, reemplaza la carpeta public/fotos con public/fotos-optimized');
  } catch (error) {
    console.error('Error:', error);
  }
}

compressImages();
