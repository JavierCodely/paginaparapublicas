interface EmptyStateProps {
  ubicacion: string;
}

export const EmptyState = ({ ubicacion }: EmptyStateProps) => {
  return (
    <div className="w-full bg-black/40 rounded-3xl p-8 sm:p-12 text-center border-2 border-gray-700">
      <div className="text-6xl sm:text-7xl mb-4">💖</div>
      <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
        Aún no contamos con RRPP en{' '}
        <span className="font-bold text-pink-400">{ubicacion}</span>
      </p>
      <p className="text-gray-300 text-base sm:text-lg mt-4">
        Si estás interesado en formar parte del equipo y eres de{' '}
        <span className="font-semibold">{ubicacion}</span>, ¡contáctanos!
      </p>
    </div>
  );
};
