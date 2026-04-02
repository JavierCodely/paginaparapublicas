import { useCallback, useEffect, useRef, useState } from 'react';
import { GALERIA_FOTOS, GALERIA_BASE_PATH } from '../data/galeriaFotos';
import { Lightbox } from './Lightbox';

const MAX_FOTOS         = 12;
const SLIDE_INTERVALO   = 3000; // ms entre fotos
const FADE_DURACION     = 900;  // ms de la transición

function getClases(index: number, total: number): string {
  if (total === 1) return 'col-span-3 row-span-3';
  return index === 0 ? 'col-span-2 row-span-2' : '';
}

export const Galeria = () => {
  const fotos = GALERIA_FOTOS.slice(0, MAX_FOTOS);
  const urls  = fotos.map(n => `${GALERIA_BASE_PATH}${n}`);

  // ── Lightbox ──────────────────────────────────────────
  const [lightboxIndice, setLightboxIndice] = useState<number | null>(null);

  // ── Slideshow: solo 2 imágenes en el DOM ──────────────
  const [curIdx,  setCurIdx]  = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const fadingRef  = useRef(false);
  const pausadoRef = useRef(false);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const avanzar = useCallback(() => {
    if (fadingRef.current || pausadoRef.current || urls.length < 2) return;
    fadingRef.current = true;
    const next = (curIdx + 1) % urls.length;
    setPrevIdx(curIdx);
    setCurIdx(next);
    setTimeout(() => {
      setPrevIdx(null);
      fadingRef.current = false;
    }, FADE_DURACION + 50);
  }, [curIdx, urls.length]);

  // Precargar solo la siguiente imagen
  useEffect(() => {
    if (urls.length < 2) return;
    const img = new Image();
    img.src = urls[(curIdx + 1) % urls.length];
  }, [curIdx, urls]);

  // Pausar cuando el slideshow no es visible (ahorra batería y CPU)
  useEffect(() => {
    const el = slideshowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { pausadoRef.current = !entry.isIntersecting; },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Intervalo de avance
  useEffect(() => {
    if (urls.length < 2) return;
    const id = setInterval(avanzar, SLIDE_INTERVALO);
    return () => clearInterval(id);
  }, [avanzar, urls.length]);

  // Celdas del collage
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

      {/* Título */}
      <div className="text-center">
        <h3 className="neon-text-red text-2xl sm:text-3xl font-black uppercase tracking-[0.22em]">
          NUESTRAS NOCHES
        </h3>
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-[0.35em] uppercase mt-1.5">
          Galería de Momentos
        </p>
      </div>

      {/* ── SLIDESHOW ── */}
      <div
        ref={slideshowRef}
        className="relative w-full overflow-hidden rounded-xl border border-red-600/30 cursor-pointer bg-gray-950"
        style={{ height: 'clamp(220px, 52vw, 380px)' }}
        onMouseEnter={() => { pausadoRef.current = true; }}
        onMouseLeave={() => { pausadoRef.current = false; }}
        onClick={() => setLightboxIndice(curIdx)}
      >
        {/* Imagen anterior (fade out) */}
        {prevIdx !== null && (
          <img
            src={urls[prevIdx]}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0, transition: `opacity ${FADE_DURACION}ms ease-in-out` }}
            draggable={false}
            decoding="async"
          />
        )}

        {/* Imagen actual (visible) */}
        <img
          key={curIdx}
          src={urls[curIdx]}
          alt={`Slide ${curIdx + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1, transition: `opacity ${FADE_DURACION}ms ease-in-out` }}
          draggable={false}
          decoding="async"
        />

        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

        {/* Barras de progreso animadas por CSS */}
        <div className="absolute bottom-3 left-0 right-0 px-4 flex flex-col gap-2 pointer-events-none">
          <div className="flex gap-1">
            {urls.map((_, i) => (
              <div key={i} className="flex-1 h-[3px] rounded-full bg-white/20 overflow-hidden">
                {i === curIdx && (
                  <div
                    key={`bar-${curIdx}`}
                    className="h-full bg-red-500 rounded-full slide-progress"
                    style={{ animationDuration: `${SLIDE_INTERVALO}ms` }}
                  />
                )}
                {i < curIdx && (
                  <div className="h-full w-full bg-red-500/40 rounded-full" />
                )}
              </div>
            ))}
          </div>
          <p className="neon-text-red text-[11px] font-bold tracking-widest text-right">
            {curIdx + 1} <span className="text-gray-500 font-normal">/ {urls.length}</span>
          </p>
        </div>

        {/* Ícono lupa */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-red-500/40 flex items-center justify-center">
          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
          </svg>
        </div>
      </div>

      {/* ── COLLAGE ── */}
      <div className="collage-grid grid grid-cols-3 gap-1 sm:gap-1.5 rounded-xl overflow-hidden">
        {celdas.map(({ url, index }) => (
          <div
            key={index}
            className={`collage-cell relative overflow-hidden border border-gray-700/60 transition-colors duration-300
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

      <p className="text-gray-700 text-[9px] sm:text-[10px] text-center tracking-wider uppercase">
        Agregá fotos en <span className="text-gray-600">public/Galeria/</span> y el nombre en <span className="text-gray-600">src/data/galeriaFotos.ts</span>
      </p>

      {lightboxIndice !== null && (
        <Lightbox fotos={urls} indiceInicial={lightboxIndice} onCerrar={() => setLightboxIndice(null)} />
      )}
    </section>
  );
};
