import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  fotos: string[];
  indiceInicial: number;
  onCerrar: () => void;
}

export const Lightbox = ({ fotos, indiceInicial, onCerrar }: LightboxProps) => {
  const [indice, setIndice] = useState(indiceInicial);
  const [fadeIn, setFadeIn] = useState(true);
  const touchStartX = useRef(0);

  const cambiarFoto = useCallback((nuevoIndice: number) => {
    setFadeIn(false);
    window.setTimeout(() => {
      setIndice(nuevoIndice);
      setFadeIn(true);
    }, 120);
  }, []);

  const anterior = useCallback(
    () => cambiarFoto((indice - 1 + fotos.length) % fotos.length),
    [cambiarFoto, fotos.length, indice]
  );
  const siguiente = useCallback(
    () => cambiarFoto((indice + 1) % fotos.length),
    [cambiarFoto, fotos.length, indice]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') siguiente();
      if (e.key === 'Escape') onCerrar();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [anterior, siguiente, onCerrar]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    if (fotos.length < 2) return;
    const next = new Image();
    next.src = fotos[(indice + 1) % fotos.length];
    const prev = new Image();
    prev.src = fotos[(indice - 1 + fotos.length) % fotos.length];
  }, [fotos, indice]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? siguiente() : anterior();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/93"
      onClick={onCerrar}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
    >
      <button
        type="button"
        onClick={onCerrar}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-red-600/50 text-white text-xl hover:bg-red-600/30 hover:border-red-500 transition-colors focus:outline-none"
        aria-label="Cerrar"
      >
        ✕
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <span className="neon-text-red text-sm font-bold tracking-widest">
          {indice + 1} <span className="text-gray-600">/</span> {fotos.length}
        </span>
      </div>

      <div
        className="relative flex items-center justify-center max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={indice}
          src={fotos[indice]}
          alt={`Foto ${indice + 1}`}
          className="max-w-[92vw] max-h-[82vh] object-contain rounded-xl transition-opacity duration-150"
          style={{
            opacity: fadeIn ? 1 : 0,
            boxShadow: '0 0 40px rgba(255,26,26,0.2), 0 0 80px rgba(255,26,26,0.08)',
          }}
          draggable={false}
          decoding="async"
        />

        {fotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                anterior();
              }}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl font-thin leading-none hover:text-red-400 transition-colors duration-150 focus:outline-none select-none"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)' }}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                siguiente();
              }}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl font-thin leading-none hover:text-red-400 transition-colors duration-150 focus:outline-none select-none"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)' }}
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      {fotos.length > 1 && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {fotos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                cambiarFoto(i);
              }}
              className={`rounded-full transition-all duration-200 focus:outline-none ${
                i === indice ? 'w-5 h-2 bg-red-500' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Ir a foto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};
