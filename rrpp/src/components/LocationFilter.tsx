import type { Ubicacion } from '../data/rrppData';

interface LocationFilterProps {
  ubicaciones: Ubicacion[];
  selectedUbicacion: Ubicacion | null;
  onSelectUbicacion: (ubicacion: Ubicacion | null) => void;
}

export const LocationFilter = ({ ubicaciones, selectedUbicacion, onSelectUbicacion }: LocationFilterProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {/* Botones de ubicaciones */}
        {ubicaciones.map((ubicacion) => (
          <button
            key={ubicacion}
            onClick={() => onSelectUbicacion(ubicacion)}
            className={`
              px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium text-sm sm:text-base
              transition-all duration-200
              ${
                selectedUbicacion === ubicacion
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }
            `}
          >
            {ubicacion}
          </button>
        ))}
      </div>
    </div>
  );
};
