import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const inputDir = './public/fotos';
const outputDir = './public/fotos';

async function compressImages() {
  try {
    const files = await readdir(inputDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Encontrados ${pngFiles.length} archivos PNG para convertir a WebP\n`);

    let totalBefore = 0;
    let totalAfter = 0;

    for (const file of pngFiles) {
      const inputPath = join(inputDir, file);
      const outputFileName = file.replace('.png', '.webp');
      const outputPath = join(outputDir, outputFileName);

      console.log(`Procesando: ${file} → ${outputFileName}...`);

      const inputStats = await stat(inputPath);
      totalBefore += inputStats.size;

      // Convertir a WebP con alta calidad pero excelente compresión
      await sharp(inputPath)
        .resize(400, 400, {
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: 85,
          effort: 6
        })
        .toFile(outputPath);

      const outputStats = await stat(outputPath);
      totalAfter += outputStats.size;

      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`  ✓ ${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB (${reduction}% reducción)\n`);
    }

    console.log('✨ Conversión completada!');
    console.log(`\nTotal ANTES: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total DESPUÉS: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reducción total: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
    console.log('\nAhora actualiza las referencias en el código de .png a .webp');
  } catch (error) {
    console.error('Error:', error);
  }
}

compressImages();
