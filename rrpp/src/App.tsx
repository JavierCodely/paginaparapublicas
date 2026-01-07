import { useState } from 'react';
import { RRPPCard } from './components/RRPPCard';
import { BackgroundVideo } from './components/BackgroundVideo';
import { LocationFilter } from './components/LocationFilter';
import { EmptyState } from './components/EmptyState';
import { rrppData, ubicaciones } from './data/rrppData';
import type { Ubicacion } from './data/rrppData';

function App() {
  const [selectedUbicacion, setSelectedUbicacion] = useState<Ubicacion | null>(null);

  // Filtrar RRPP por ubicación
  const filteredRRPP = selectedUbicacion
    ? rrppData.filter(rrpp => rrpp.ubicacion === selectedUbicacion)
    : rrppData;

  return (
    <div className="min-h-screen bg-[#1a1a1a] px-3 py-6 sm:p-6 md:p-8">
      {/* Video de fondo - se carga al final */}
      <BackgroundVideo videoUrl="/videos/background.mp4" />
      <div className="w-full max-w-2xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">

          {/* Logos de sponsors */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 -my-2 sm:-my-3">
            <img
              src="/sponsor/logoderecho.webp"
              alt="Sponsor Izquierdo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              fetchPriority="high"
              decoding="async"
            />
            <img
              src="/sponsor/logomedio.webp"
              alt="Sponsor Centro"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
              fetchPriority="high"
              decoding="async"
            />
            <img
              src="/sponsor/logoderecho.webp"
              alt="Sponsor Derecho"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Texto descriptivo */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium px-2 sm:px-4 max-w-xl leading-relaxed">
            CONSEGUI TU INGRESO CON NUESTROS PUBLICAS💖
          </p>

          {/* Separador visual */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Filtros de ubicación */}
          <LocationFilter
            ubicaciones={ubicaciones}
            selectedUbicacion={selectedUbicacion}
            onSelectUbicacion={setSelectedUbicacion}
          />

          {/* Lista de RRPP o mensaje vacío */}
          <div className="w-full space-y-2 sm:space-y-3 md:space-y-4 transition-opacity duration-200">
            {filteredRRPP.length > 0 ? (
              filteredRRPP.map((rrpp, index) => (
                <RRPPCard
                  key={`${rrpp.id}-${selectedUbicacion || 'all'}`}
                  name={`${rrpp.nombre} ${rrpp.apellido}`}
                  photoUrl={rrpp.urlImagen}
                  instagramUsername={rrpp.instagramUsername}
                  isFirstImage={index < 3}
                />
              ))
            ) : (
              <EmptyState ubicacion={selectedUbicacion!} />
            )}
          </div>

          {/* Footer opcional */}
          <div className="pt-6 sm:pt-8 pb-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center px-4">
              Hace click en el nombre para contactar via Instagram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
