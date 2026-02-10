import { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';

interface RRPPCardProps {
  name: string;
  photoUrl: string;
  instagramUsername: string;
  instagramPostUrl?: string; // URL de post específico (opcional)
  location: string;
  className?: string;
  isFirstImage?: boolean;
}

export const RRPPCard = ({
  name,
  photoUrl,
  instagramUsername,
  instagramPostUrl,
  location,
  className = '',
  isFirstImage = false
}: RRPPCardProps) => {
  // Si hay una URL de post específica, usarla; sino, usar el perfil del usuario
  const instagramUrl = instagramPostUrl || `https://www.instagram.com/${instagramUsername}`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Siempre prevenir la navegación por defecto y mostrar el modal
    // El modal actuará como "página intermedia" con botón que permite
    // usar custom URL schemes desde el click del usuario
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isInstagramBrowser = /Instagram/.test(navigator.userAgent);

    setIsModalOpen(false);

    if (isInstagramBrowser) {
      // Dentro del navegador de Instagram
      // Intentar abrir usando window.open sin target para que Instagram lo maneje
      // Instagram debería detectar que es una URL de Instagram y abrir en la app
      try {
        const opened = window.open(instagramUrl);
        if (!opened) {
          // Si window.open falla, intentar con location
          window.location.href = instagramUrl;
        }
      } catch {
        window.location.href = instagramUrl;
      }
    } else if (isAndroid) {
      // Android: usar intent para abrir directamente en la app
      const intentUrl = `intent://${instagramUrl.replace(/^https?:\/\//, '')}#Intent;package=com.instagram.android;scheme=https;end`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      // iOS: usar la URL web, el sistema lo manejará
      window.location.href = instagramUrl;
    } else {
      // Desktop: abrir en nueva pestaña
      window.open(instagramUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div
        className={`
          bg-black/40 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-1.5 sm:p-2
          transition-all duration-300
          hover:scale-[1.02] sm:hover:scale-105 hover:bg-black/50
          border border-transparent hover:border-gray-700
          active:scale-[0.98]
          ${className}
        `}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Foto circular del RRPP */}
          <div className="flex-shrink-0">
            <img
              src={photoUrl}
              alt={name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gray-700"
              loading={isFirstImage ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={isFirstImage ? "high" : "low"}
            />
          </div>

          {/* Nombre y ubicación clickeable centrado */}
          <a
            href={instagramUrl}
            onClick={handleClick}
            rel="noopener"
            className="
              flex-1 text-center
              flex flex-col items-center justify-center
              hover:text-blue-400
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
              rounded px-2 py-1
            "
          >
            <span className="text-white font-semibold text-xl sm:text-2xl md:text-3xl break-words">
              {name}
            </span>
            <span className="text-gray-400 text-sm sm:text-base md:text-lg mt-0.5">
              {location}
            </span>
          </a>
        </div>
      </div>

      {/* Modal de confirmación - Fuera del card */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        profileName={name}
      />
    </>
  );
};
