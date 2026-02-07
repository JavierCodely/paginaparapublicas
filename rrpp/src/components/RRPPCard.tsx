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
    const isInstagramBrowser = /Instagram/.test(navigator.userAgent);

    setIsModalOpen(false);

    // Función auxiliar para abrir URL con múltiples estrategias
    const openUrl = (url: string) => {
      // Estrategia 1: Intentar window.open
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      // Estrategia 2: Si window.open falla, crear un enlace temporal
      if (!newWindow || newWindow.closed) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    // Si estamos en el navegador interno de Instagram, usar URL directa web
    if (isInstagramBrowser) {
      // Instagram browser: abrir la URL web directamente
      // El navegador de Instagram manejará esto y preguntará si quiere abrir en la app
      openUrl(instagramUrl);
    } else if (isAndroid) {
      // Android fuera de Instagram: usar intent
      const intentUrl = `intent://instagram.com/_u/${instagramUsername}/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(instagramUrl)};end`;
      openUrl(intentUrl);
    } else if (isIOS) {
      // iOS: intentar URL scheme y usar fallback
      const appUrl = `instagram://user?username=${instagramUsername}`;
      
      // Crear un enlace temporal para el esquema de la app
      const link = document.createElement('a');
      link.href = appUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fallback: si la app no se abre, abrir en navegador
      setTimeout(() => {
        openUrl(instagramUrl);
      }, 1500);
    } else {
      // Desktop: abrir en nueva pestaña
      openUrl(instagramUrl);
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
