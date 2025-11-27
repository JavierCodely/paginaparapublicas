import { useEffect, useState, useRef } from 'react';

interface BackgroundVideoProps {
  videoUrl: string;
}

export const BackgroundVideo = ({ videoUrl }: BackgroundVideoProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Esperar a que todas las imágenes se carguen
    const handleLoad = () => {
      console.log('Página cargada, mostrando video');
      setTimeout(() => {
        setShouldLoad(true);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      const video = videoRef.current;

      console.log('Intentando reproducir video');

      const handleLoadedData = () => {
        console.log('Video cargado, duración:', video.duration);
      };

      const handleEnded = () => {
        console.log('Video terminó, reiniciando...');
        video.currentTime = 0;
        video.play().catch((error) => {
          console.error('Error al reiniciar video:', error);
        });
      };

      const handleError = (e: Event) => {
        console.error('Error en el video:', e);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('error', handleError);

      video.play().catch((error) => {
        console.error('Error al reproducir video:', error);
      });

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('error', handleError);
      };
    }
  }, [shouldLoad]);

  console.log('BackgroundVideo renderizado, shouldLoad:', shouldLoad);

  if (!shouldLoad) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};
