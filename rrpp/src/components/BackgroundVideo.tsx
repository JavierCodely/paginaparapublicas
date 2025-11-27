import { useEffect, useState, useRef } from 'react';

interface BackgroundVideoProps {
  videoUrl: string;
}

export const BackgroundVideo = ({ videoUrl }: BackgroundVideoProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Cargar video después de un delay mínimo para priorizar contenido
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100); // Reducido de 500ms a 100ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      const video = videoRef.current;

      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {
          // Silenciar errores de reproducción automática
        });
      };

      video.addEventListener('ended', handleEnded);

      video.play().catch(() => {
        // Silenciar errores de reproducción automática
      });

      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        preload="metadata"
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};
