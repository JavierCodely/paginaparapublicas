interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  profileName: string;
}

export const ConfirmModal = ({ isOpen, onClose, onConfirm, profileName }: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] border-2 border-gray-700 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 text-center">
          {profileName}
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 text-center leading-relaxed">
          Se abrirá la app de Instagram con el perfil seleccionado ¿deseas continuar?
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="
              w-full py-3 px-6 rounded-full
              bg-gradient-to-r from-pink-500 to-pink-600
              hover:from-pink-600 hover:to-pink-700
              text-white font-semibold text-lg
              transition-all duration-200
              transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-pink-500/50
            "
          >
            Continuar
          </button>

          <button
            onClick={onClose}
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
