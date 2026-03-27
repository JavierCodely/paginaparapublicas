import { useState } from 'react';
import { RRPPCard } from './components/RRPPCard';
import { LocationFilter } from './components/LocationFilter';
import { EmptyState } from './components/EmptyState';
import { ClubHistory } from './components/ClubHistory';
import { UpcomingEvents } from './components/UpcomingEvents';
import { rrppData, ubicaciones } from './data/rrppData';
import type { Ubicacion } from './data/rrppData';

function App() {
  const [selectedUbicacion, setSelectedUbicacion] = useState<Ubicacion | null>('Esperanza');

  const filteredRRPP = selectedUbicacion
    ? rrppData.filter(rrpp => rrpp.ubicacion === selectedUbicacion)
    : rrppData;

  return (
    <div className="min-h-screen bg-black px-3 py-6 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">

          {/* Texto descriptivo */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium px-2 sm:px-4 max-w-xl leading-relaxed">
            CONSEGUI TU INGRESO CON NUESTROS PUBLICAS💖
          </p>

          {/* Separador visual */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

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
                  instagramPostUrl={rrpp.instagramPostUrl}
                  whatsappUrl={rrpp.whatsappUrl}
                  location={rrpp.ubicacion}
                  isFirstImage={index < 3}
                />
              ))
            ) : (
              <EmptyState ubicacion={selectedUbicacion!} />
            )}
          </div>

          {/* Texto de ayuda */}
          <div className="pt-2 sm:pt-4">
            <p className="text-gray-600 text-xs sm:text-sm text-center px-4">
              Hace click en el nombre para contactar via Instagram
            </p>
          </div>

          {/* Divisor neon */}
          <div className="flex items-center gap-4 w-full py-1">
            <div className="flex-1 h-px neon-line-red opacity-40" />
            <span className="neon-text-red text-sm font-bold tracking-[0.5em] select-none flex-shrink-0 opacity-70">◆ ◆ ◆</span>
            <div className="flex-1 h-px neon-line-red opacity-40" />
          </div>

          {/* Próximos Eventos */}
          <UpcomingEvents />

          {/* Historia del Club, Collage, Video y Talentos */}
          <ClubHistory />

          {/* Logos de sponsors */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 pb-2">
            <img
              src="/sponsor/logoderecho.webp"
              alt="Sponsor Izquierdo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/sponsor/logomedio.webp"
              alt="Sponsor Centro"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/sponsor/logoderecho.webp"
              alt="Sponsor Derecho"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
