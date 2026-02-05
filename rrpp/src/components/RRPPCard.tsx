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
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    // Detectar si estamos en el navegador interno de Instagram
    const isInstagramBrowser = navigator.userAgent.includes('Instagram');

    setIsModalOpen(false);

    // Si estamos en el navegador interno de Instagram
    if (isInstagramBrowser) {
      if (isAndroid) {
        // Android + Instagram browser: usar intent para forzar apertura en la app
        const intentUrl = `intent://instagram.com/_u/${instagramUsername}/#Intent;package=com.instagram.android;scheme=https;end`;
        window.location.href = intentUrl;
      } else if (isIOS) {
        // iOS + Instagram browser: usar el esquema de URL de Instagram
        window.location.href = `instagram://user?username=${instagramUsername}`;
      } else {
        // Desktop dentro de Instagram (raro pero posible)
        window.location.href = instagramUrl;
      }
    } else if (isAndroid) {
      // Android fuera de Instagram: usar intent
      const intentUrl = `intent://instagram.com/_u/${instagramUsername}/#Intent;package=com.instagram.android;scheme=https;end`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      // iOS fuera de Instagram: usar URL scheme
      const appUrl = `instagram://user?username=${instagramUsername}`;
      window.location.href = appUrl;

      // Fallback: si la app no se abre en 1.5 segundos, abrir en navegador
      setTimeout(() => {
        window.location.href = instagramUrl;
      }, 1500);
    } else {
      // Desktop: abre en nueva pestaña
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
