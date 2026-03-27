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
  isAndroid
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  // Si es Android, usar intent URL para abrir directamente en la app
  const finalUrl = isAndroid
    ? `intent://${instagramUrl.replace(/^https?:\/\//, '')}#Intent;package=com.instagram.android;scheme=https;end`
    : instagramUrl;

  const hasWhatsApp = Boolean(whatsappUrl);

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-black/40 border border-red-600/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl backdrop-blur-md"
        onClick={handleModalClick}
      >
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 text-center">
          {profileName}
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 text-center leading-relaxed">
          ¿Cómo querés contactar?
        </p>

        <div className="flex flex-col gap-3">
          {/* Botón Instagram */}
          <a
            href={finalUrl}
            target={isAndroid ? undefined : "_blank"}
            rel={isAndroid ? undefined : "noopener noreferrer"}
            onClick={onClose}
            className="
              w-full py-3 px-6 rounded-full
              bg-red-600 hover:bg-red-500
              text-white font-semibold text-lg
              transition-all duration-200
              transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-red-600/50
              text-center block
            "
          >
            Instagram
          </a>

          {/* Botón WhatsApp */}
          <a
            href={hasWhatsApp ? whatsappUrl : undefined}
            onClick={hasWhatsApp ? onClose : (e) => e.preventDefault()}
            className={`
              w-full py-3 px-6 rounded-full text-lg font-semibold text-center block
              transition-all duration-200
              ${
                hasWhatsApp
                  ? 'bg-green-500 hover:bg-green-600 text-white transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/50'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }
            `}
            aria-disabled={!hasWhatsApp}
          >
            WhatsApp
          </a>

          <button
            onClick={handleCancel}
            className="
              w-full py-3 px-6 rounded-full
              bg-gray-700 hover:bg-gray-600
              text-white font-medium text-base
              transition-all duration-200
            "
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
