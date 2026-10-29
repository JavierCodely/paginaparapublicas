import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GALERIA_FOTOS, GALERIA_BASE_PATH } from '../data/galeriaFotos';
import { Lightbox } from './Lightbox';

const MAX_FOTOS = 12;
const SLIDE_INTERVALO = 3000;
const FADE_DURACION = 900;

function getClases(index: number, total: number): string {
  if (total === 1) return 'col-span-3 row-span-3';
  return index === 0 ? 'col-span-2 row-span-2' : '';
}

const URLS = GALERIA_FOTOS.slice(0, MAX_FOTOS).map(
  (n) => `${GALERIA_BASE_PATH}${encodeURIComponent(n)}`
);

export const Galeria = () => {
  const [lightboxIndice, setLightboxIndice] = useState<number | null>(null);
  const [curIdx, setCurIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const fadingRef = useRef(false);
  const pausadoRef = useRef(false);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const avanzar = useCallback(() => {
    if (fadingRef.current || pausadoRef.current || URLS.length < 2) return;
    fadingRef.current = true;
    const next = (curIdx + 1) % URLS.length;
    setPrevIdx(curIdx);
    setCurIdx(next);
    window.setTimeout(() => {
      setPrevIdx(null);
      fadingRef.current = false;
    }, FADE_DURACION + 50);
  }, [curIdx]);

  useEffect(() => {
    if (URLS.length < 2) return;
    const img = new Image();
    img.src = URLS[(curIdx + 1) % URLS.length];
  }, [curIdx]);

  useEffect(() => {
    const el = slideshowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        pausadoRef.current = !entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (URLS.length < 2) return;
    const id = window.setInterval(avanzar, SLIDE_INTERVALO);
    return () => window.clearInterval(id);
  }, [avanzar]);

  const celdas = useMemo(() => {
    const totalCeldas =
      URLS.length === 0 ? 6 : Math.min(Math.ceil(URLS.length / 3) * 3, MAX_FOTOS);
    return Array.from({ length: totalCeldas }, (_, i) => ({
      url: URLS[i] ?? null,
      index: i,
    }));
  }, []);

  const cerrarLightbox = useCallback(() => setLightboxIndice(null), []);

  if (URLS.length === 0) return null;

  return (
    <section className="space-y-3 sm:space-y-4">
      <div className="text-center">
        <h3 className="neon-text-red text-2xl sm:text-3xl font-black uppercase tracking-[0.22em]">
          NUESTRAS NOCHES
        </h3>
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-[0.35em] uppercase mt-1.5">
          Galería de Momentos
        </p>
      </div>

      <div
        ref={slideshowRef}
        className="relative w-full overflow-hidden rounded-xl border border-red-600/30 cursor-pointer bg-gray-950"
        style={{ height: 'clamp(220px, 52vw, 380px)' }}
        onMouseEnter={() => {
          pausadoRef.current = true;
        }}
        onMouseLeave={() => {
          pausadoRef.current = false;
        }}
        role="button"
        tabIndex={0}
        aria-label="Abrir foto en pantalla completa"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setLightboxIndice(curIdx);
          }
        }}
        onClick={() => setLightboxIndice(curIdx)}
      >
        {prevIdx !== null && (
          <img
            src={URLS[prevIdx]}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0, transition: `opacity ${FADE_DURACION}ms ease-in-out` }}
            draggable={false}
            decoding="async"
          />
        )}

        <img
          key={curIdx}
          src={URLS[curIdx]}
          alt={`Slide ${curIdx + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1, transition: `opacity ${FADE_DURACION}ms ease-in-out` }}
          draggable={false}
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-3 left-0 right-0 px-4 flex flex-col gap-2 pointer-events-none">
          <div className="flex gap-1">
            {URLS.map((_, i) => (
              <div key={i} className="flex-1 h-[3px] rounded-full bg-white/20 overflow-hidden">
                {i === curIdx && (
                  <div
                    key={`bar-${curIdx}`}
                    className="h-full bg-red-500 rounded-full slide-progress"
                    style={{ animationDuration: `${SLIDE_INTERVALO}ms` }}
                  />
                )}
                {i < curIdx && <div className="h-full w-full bg-red-500/40 rounded-full" />}
              </div>
            ))}
          </div>
          <p className="neon-text-red text-[11px] font-bold tracking-widest text-right">
            {curIdx + 1} <span className="text-gray-500 font-normal">/ {URLS.length}</span>
          </p>
        </div>

        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-red-500/40 flex items-center justify-center">
          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
          </svg>
        </div>
      </div>

      <div className="collage-grid grid grid-cols-3 gap-1 sm:gap-1.5 rounded-xl overflow-hidden">
        {celdas.map(({ url, index }) => (
          <div
            key={index}
            className={`collage-cell relative overflow-hidden border border-gray-700/60 transition-colors duration-300
              ${getClases(index, URLS.length)}
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
                  decoding="async"
                  draggable={false}
                />
                <div className="collage-overlay absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-black/50 border border-red-500/60 flex items-center justify-center">
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

      {lightboxIndice !== null && (
        <Lightbox fotos={URLS} indiceInicial={lightboxIndice} onCerrar={cerrarLightbox} />
      )}
    </section>
  );
};
