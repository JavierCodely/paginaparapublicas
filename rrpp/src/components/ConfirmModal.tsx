import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileName: string;
  instagramUrl: string;
  whatsappUrl?: string;
  isAndroid: boolean;
}

export const ConfirmModal = ({
  isOpen,
  onClose,
  profileName,
  instagramUrl,
  whatsappUrl,
  isAndroid,
}: ConfirmModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const finalUrl = isAndroid
    ? `intent://${instagramUrl.replace(/^https?:\/\//, '')}#Intent;package=com.instagram.android;scheme=https;end`
    : instagramUrl;

  const hasWhatsApp = Boolean(whatsappUrl);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-black/40 border border-red-600/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="contact-modal-title" className="text-white text-xl sm:text-2xl font-bold mb-4 text-center">
          {profileName}
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 text-center leading-relaxed">
          ¿Cómo querés contactar?
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={finalUrl}
            target={isAndroid ? undefined : '_blank'}
            rel={isAndroid ? undefined : 'noopener noreferrer'}
            onClick={onClose}
            className="
              w-full py-3 px-6 rounded-full
              bg-red-600 hover:bg-red-500
              text-white font-semibold text-lg
              transition-transform duration-200
              hover:scale-105 active:scale-95
              shadow-lg hover:shadow-red-600/50
              text-center block
            "
          >
            Instagram
          </a>

          {hasWhatsApp ? (
            <a
              href={whatsappUrl}
              onClick={onClose}
              className="
                w-full py-3 px-6 rounded-full text-lg font-semibold text-center block
                transition-transform duration-200
                bg-green-500 hover:bg-green-600 text-white
                hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/50
              "
            >
              WhatsApp
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="w-full py-3 px-6 rounded-full text-lg font-semibold text-center bg-gray-700 text-gray-400 cursor-not-allowed"
            >
              WhatsApp
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="
              w-full py-3 px-6 rounded-full
              bg-gray-700 hover:bg-gray-600
              text-white font-medium text-base
              transition-colors duration-200
            "
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
