import { lazy, Suspense, useCallback, useMemo, useState } from 'react';
import { RRPPCard } from './components/RRPPCard';
import { LocationFilter } from './components/LocationFilter';
import { EmptyState } from './components/EmptyState';
import { ConfirmModal } from './components/ConfirmModal';
import { LazyMount } from './components/LazyMount';
import { rrppData, ubicaciones } from './data/rrppData';
import type { RRPPData, Ubicacion } from './data/rrppData';

const UpcomingEvents = lazy(() =>
  import('./components/UpcomingEvents').then((m) => ({ default: m.UpcomingEvents }))
);
const ClubHistory = lazy(() =>
  import('./components/ClubHistory').then((m) => ({ default: m.ClubHistory }))
);

const IS_ANDROID = typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);

interface ContactoActivo {
  name: string;
  instagramUrl: string;
  whatsappUrl?: string;
}

function App() {
  const [selectedUbicacion, setSelectedUbicacion] = useState<Ubicacion | null>('Esperanza');
  const [contacto, setContacto] = useState<ContactoActivo | null>(null);

  const filteredRRPP = useMemo(
    () => (selectedUbicacion ? rrppData.filter((rrpp) => rrpp.ubicacion === selectedUbicacion) : rrppData),
    [selectedUbicacion]
  );

  const openContact = useCallback((rrpp: RRPPData) => {
    setContacto({
      name: `${rrpp.nombre} ${rrpp.apellido}`,
      instagramUrl: rrpp.instagramPostUrl || `https://www.instagram.com/${rrpp.instagramUsername}`,
      whatsappUrl: rrpp.whatsappUrl,
    });
  }, []);

  const closeContact = useCallback(() => setContacto(null), []);

  return (
    <div className="min-h-screen bg-black px-3 py-6 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">
          <p className="text-white text-md sm:text-base md:text-lg lg:text-xl text-center font-medium px-2 sm:px-4 max-w-xl leading-relaxed">
            CONSEGUI TU INGRESO QR CON NUESTROS PUBLICAS💖
          </p>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          <LocationFilter
            ubicaciones={ubicaciones}
            selectedUbicacion={selectedUbicacion}
            onSelectUbicacion={setSelectedUbicacion}
          />

          <div className="w-full space-y-2 sm:space-y-3 md:space-y-4">
            {filteredRRPP.length > 0 ? (
              filteredRRPP.map((rrpp, index) => (
                <RRPPCard
                  key={rrpp.id}
                  name={`${rrpp.nombre} ${rrpp.apellido}`}
                  photoUrl={rrpp.urlImagen}
                  location={rrpp.ubicacion}
                  isFirstImage={index < 3}
                  onContact={() => openContact(rrpp)}
                />
              ))
            ) : (
              <EmptyState ubicacion={selectedUbicacion!} />
            )}
          </div>

          <div className="pt-2 sm:pt-4">
            <p className="text-white text-xs sm:text-sm text-center px-4">
              Hace click en el nombre para contactar via Instagram o whatsapp para conseguir tu entrada qr
            </p>
          </div>

          <div className="flex items-center gap-4 w-full py-1">
            <div className="flex-1 h-px neon-line-red opacity-40" />
            <span className="neon-text-red text-sm font-bold tracking-[0.5em] select-none flex-shrink-0 opacity-70">
              ◆ ◆ ◆
            </span>
            <div className="flex-1 h-px neon-line-red opacity-40" />
          </div>

          <LazyMount minHeight="420px">
            <Suspense fallback={null}>
              <UpcomingEvents />
            </Suspense>
          </LazyMount>

          <LazyMount minHeight="800px">
            <Suspense fallback={null}>
              <ClubHistory />
            </Suspense>
          </LazyMount>

          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 pb-2">
            <img
              src="/sponsor/logoizquierdo.webp"
              alt="Sponsor izquierdo"
              width={160}
              height={160}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/sponsor/logomedio.webp"
              alt="Sponsor centro"
              width={176}
              height={176}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/sponsor/logoderecho.webp"
              alt="Sponsor derecho"
              width={160}
              height={160}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={Boolean(contacto)}
        onClose={closeContact}
        profileName={contacto?.name ?? ''}
        instagramUrl={contacto?.instagramUrl ?? ''}
        whatsappUrl={contacto?.whatsappUrl}
        isAndroid={IS_ANDROID}
      />
    </div>
  );
}

export default App;
