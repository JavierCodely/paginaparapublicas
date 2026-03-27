import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIR = './public/Galeria';

async function convertirGaleria() {
  const archivos = await readdir(DIR);
  const imagenes = archivos.filter(f =>
    /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f) && !f.endsWith('.webp')
  );

  console.log(`\n📸 ${imagenes.length} imágenes encontradas en public/Galeria/\n`);

  let totalAntes = 0;
  let totalDespues = 0;
  const nuevoNombres = [];

  for (const archivo of imagenes) {
    const inputPath  = join(DIR, archivo);
    const sinExt     = basename(archivo, extname(archivo));
    const outputName = sinExt + '.webp';
    const outputPath = join(DIR, outputName);

    const statsAntes = await stat(inputPath);
    totalAntes += statsAntes.size;

    await sharp(inputPath)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(outputPath);

    const statsDespues = await stat(outputPath);
    totalDespues += statsDespues.size;

    const reduccion = ((1 - statsDespues.size / statsAntes.size) * 100).toFixed(1);
    console.log(`✓ ${archivo}`);
    console.log(`  ${(statsAntes.size/1024).toFixed(0)} KB → ${(statsDespues.size/1024).toFixed(0)} KB  (${reduccion}% menos)\n`);

    nuevoNombres.push(outputName);

    // Borrar el original
    await unlink(inputPath);
  }

  console.log('─'.repeat(50));
  console.log(`Total ANTES:   ${(totalAntes/1024/1024).toFixed(2)} MB`);
  console.log(`Total DESPUÉS: ${(totalDespues/1024/1024).toFixed(2)} MB`);
  console.log(`Ahorro total:  ${((1 - totalDespues/totalAntes)*100).toFixed(1)}%`);
  console.log('\n✅ Conversión completada. Nuevos nombres:');
  nuevoNombres.forEach(n => console.log(`  '${n}',`));
}

convertirGaleria().catch(console.error);
