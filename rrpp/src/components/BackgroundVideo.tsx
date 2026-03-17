interface BackgroundVideoProps {
  imageUrl: string;
}

export const BackgroundVideo = ({ imageUrl }: BackgroundVideoProps) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <img
        src={imageUrl}
        alt="Fondo"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        decoding="async"
        fetchPriority="low"
      />
      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};
