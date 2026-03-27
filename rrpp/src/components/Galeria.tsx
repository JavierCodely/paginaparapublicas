import { useEffect, useRef, useState } from 'react';
import { GALERIA_FOTOS, GALERIA_BASE_PATH } from '../data/galeriaFotos';
import { Lightbox } from './Lightbox';

const MAX_FOTOS = 12;
const SLIDE_INTERVALO_MS = 2500;

function getClases(index: number, total: number): string {
  if (total === 1) return 'col-span-3 row-span-3';
  return index === 0 ? 'col-span-2 row-span-2' : '';
}

export const Galeria = () => {
  const fotos = GALERIA_FOTOS.slice(0, MAX_FOTOS);
  const urls  = fotos.map(nombre => `${GALERIA_BASE_PATH}${nombre}`);

  // ── Lightbox ──
  const [lightboxIndice, setLightboxIndice] = useState<number | null>(null);

  // ── Slideshow ──
  const [slideIndice, setSlideIndice] = useState(0);
  const pausado = useRef(false);

  useEffect(() => {
    if (urls.length < 2) return;
    const id = setInterval(() => {
      if (!pausado.current) {
        setSlideIndice(i => (i + 1) % urls.length);
      }
    }, SLIDE_INTERVALO_MS);
    return () => clearInterval(id);
  }, [urls.length]);

  // Celdas del collage con placeholders
  const totalCeldas = fotos.length === 0
    ? 6
    : Math.min(Math.ceil(fotos.length / 3) * 3, MAX_FOTOS);

  const celdas = Array.from({ length: totalCeldas }, (_, i) => ({
    url: urls[i] ?? null,
    index: i,
  }));

  if (urls.length === 0) return null;

  return (
    <section className="space-y-3 sm:space-y-4">

      {/* ── Título ── */}
      <div className="text-center">
        <h3 className="neon-text-red neon-pulse-red text-2xl sm:text-3xl font-black uppercase tracking-[0.22em]">
          NUESTRAS NOCHES
        </h3>
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-[0.35em] uppercase mt-1.5">
          Galería de Momentos
        </p>
      </div>

      {/* ── SLIDESHOW ── */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-red-600/30 cursor-pointer"
        style={{ height: 'clamp(220px, 52vw, 380px)' }}
        onMouseEnter={() => { pausado.current = true; }}
        onMouseLeave={() => { pausado.current = false; }}
        onClick={() => setLightboxIndice(slideIndice)}
      >
        {/* Capas de imágenes — crossfade */}
        {urls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Slide ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === slideIndice ? 1 : 0,
              transition: 'opacity 0.9s ease-in-out',
              zIndex: i === slideIndice ? 1 : 0,
            }}
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}

        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" style={{ zIndex: 2 }} />

        {/* Glow neon borde */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            zIndex: 2,
            boxShadow: 'inset 0 0 25px rgba(255,26,26,0.12)',
          }}
        />

        {/* Contador y barras de progreso */}
        <div className="absolute bottom-3 left-0 right-0 px-4 flex flex-col gap-2" style={{ zIndex: 3 }}>
          {/* Barras */}
          <div className="flex gap-1">
            {urls.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSlideIndice(i); }}
                className="flex-1 h-[3px] rounded-full overflow-hidden bg-white/20 focus:outline-none"
                aria-label={`Ir a foto ${i + 1}`}
              >
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{
                    width: i === slideIndice ? '100%' : i < slideIndice ? '100%' : '0%',
                    transition: i === slideIndice ? `width ${SLIDE_INTERVALO_MS}ms linear` : 'none',
                    opacity: i < slideIndice ? 0.4 : 1,
                  }}
                />
              </button>
            ))}
          </div>

          {/* Número */}
          <p className="neon-text-red text-[11px] font-bold tracking-widest text-right">
            {slideIndice + 1} <span className="text-gray-500 font-normal">/ {urls.length}</span>
          </p>
        </div>

        {/* Hint lupa */}
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-red-500/40 flex items-center justify-center backdrop-blur-sm"
          style={{ zIndex: 3 }}
        >
          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
          </svg>
        </div>
      </div>

      {/* ── COLLAGE GRID ── */}
      <div className="collage-grid grid grid-cols-3 gap-1 sm:gap-1.5 rounded-xl overflow-hidden">
        {celdas.map(({ url, index }) => (
          <div
            key={index}
            className={`
              collage-cell relative overflow-hidden
              border border-gray-700/60 transition-all duration-300
              ${getClases(index, fotos.length)}
              ${url ? 'cursor-pointer hover:border-red-500/70' : ''}
            `}
            onClick={() => url && setLightboxIndice(index)}
          >
            {url ? (
              <>
                <img
                  src={url}
                  alt={`Foto ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  draggable={false}
                />
                <div className="collage-overlay absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-black/50 border border-red-500/60 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-950 flex items-center justify-center">
                <span className="text-gray-800 text-2xl select-none">+</span>
              </div>
            )}
          </div>
        ))}
      </div>

   

      {/* Lightbox */}
      {lightboxIndice !== null && (
        <Lightbox
          fotos={urls}
          indiceInicial={lightboxIndice}
          onCerrar={() => setLightboxIndice(null)}
        />
      )}
    </section>
  );
};
