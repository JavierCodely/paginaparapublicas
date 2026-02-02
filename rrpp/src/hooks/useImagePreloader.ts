import { useEffect, useState } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const imagePromises: Promise<void>[] = [];

    // Crear promesas para cada imagen
    imageUrls.forEach((url) => {
      const promise = new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolver incluso en error para no bloquear
        img.src = url;
      });
      imagePromises.push(promise);
    });

    // Esperar a que todas las imágenes se carguen
    Promise.all(imagePromises).then(() => {
      if (isMounted) {
        setImagesPreloaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return imagesPreloaded;
};
