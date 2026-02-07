import { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';

interface RRPPCardProps {
  name: string;
  photoUrl: string;
  instagramUsername: string;
  location: string;
  className?: string;
  isFirstImage?: boolean;
}

export const RRPPCard = ({
  name,
  photoUrl,
  instagramUsername,
  location,
  className = '',
  isFirstImage = false
}: RRPPCardProps) => {
  const instagramUrl = `https://www.instagram.com/${instagramUsername}`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Detectar si estamos en el navegador de Instagram
    const isInstagramBrowser = /Instagram/.test(navigator.userAgent);
    
    // Si NO estamos en Instagram browser, mostrar modal
    // Si estamos en Instagram browser, dejar que navegue directamente
    if (!isInstagramBrowser) {
      e.preventDefault();
      setIsModalOpen(true);
    }
    // Si es Instagram browser, no hacemos preventDefault() 
    // y el enlace navega directamente
  };

  const handleConfirm = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    setIsModalOpen(false);

    // Solución simplificada basada en los cambios de Instagram 2024-2026
    if (isAndroid) {
      // Android: Ya no usar intent:// (bloqueado desde oct 2024)
      // Usar URL web directa que abrirá en navegador o preguntará por la app
      window.location.href = instagramUrl;
    } else if (isIOS) {
      // iOS: Usar URL web directa
      // iOS manejará automáticamente si quiere abrir en la app
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
