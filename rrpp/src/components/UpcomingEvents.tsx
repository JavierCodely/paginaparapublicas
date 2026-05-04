// ─── Editá esta lista con tus próximos eventos ───────────────────────────────
// imagen:    ruta del flyer (opcional). Colocá el archivo en public/eventos/
//            Ejemplo: imagen: '/eventos/noche-roja.webp'
// activo:    true  → vigente (neon rojo)
//            false → finalizado (gris)
// destacado: true  → muestra badge "★ DESTACADO"
// ─────────────────────────────────────────────────────────────────────────────

interface Evento {
  id: number;
  nombre: string;
  fecha: { dia: string; mes: string; año: string };
  descripcion: string;
  genero: string;
  tags: string[];
  activo: boolean;
  imagen?: string;
  destacado?: boolean;
}

const EVENTOS: Evento[] = [
  {
    id: 1,
    nombre: 'ONLY FUNK',
    fecha: { dia: '02', mes: 'MAY', año: '2026' },
    descripcion:
      'Una noche de puro FUNK con los mejores 2 DJ´s de la zona en vivo',
    genero: 'FUNK · ARROCHA FUNK',
    tags: ['🎧 DJ en Vivo', '🍹 CONSERVADORA FREE', '🎫 Entrada Limitada'],
    activo: false,
    imagen: '/flyers/only.webp',
    destacado: true,
    // ← pegá la ruta de tu flyer, ej: '/eventos/latin-fever.webp'
  }
];

export const UpcomingEvents = () => {
  return (
    <div className="w-full space-y-5 sm:space-y-6">

      {/* ── Encabezado ── */}
      <div className="text-center">
        <span className="inline-block bg-red-500/10 border border-red-500/35 text-red-400 text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-4">
          Agenda
        </span>
        <div>
          <h2 className="neon-text-red neon-pulse-red text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] leading-none">
            PRÓXIMOS
          </h2>
          <h3 className="neon-text-red text-xl sm:text-2xl font-bold uppercase tracking-[0.3em] opacity-75 mt-1">
            EVENTOS
          </h3>
        </div>
      </div>

      {/* ── Cards de eventos ── */}
      <div className="space-y-4 sm:space-y-5">
        {EVENTOS.map((evento) => {
          const pasado = !evento.activo;
          const tieneImagen = !!evento.imagen;

          return (
            <div
              key={evento.id}
              className={`
                relative border neon-border-red rounded-2xl overflow-hidden
                bg-black/60 backdrop-blur-sm
                transition-all duration-300 hover:scale-[1.01]
                ${pasado ? 'opacity-50 grayscale' : 'hover:bg-black/70'}
                ${evento.destacado && !pasado ? 'ring-1 ring-red-500/45' : ''}
              `}
            >

              {/* ── BANNER CON FLYER (si hay imagen) ── */}
              {tieneImagen && (
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img
                    src={evento.imagen}
                    alt={`Flyer ${evento.nombre}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: 'inset 0 -2px 30px rgba(255,26,26,0.18), inset 2px 0 15px rgba(255,26,26,0.06), inset -2px 0 15px rgba(255,26,26,0.06)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h4
                      className="text-white font-black text-xl sm:text-2xl uppercase tracking-[0.08em] leading-none"
                      style={{ textShadow: '0 0 25px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)' }}
                    >
                      {evento.nombre}
                    </h4>
                    <p className="neon-text-red text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1.5">
                      {evento.genero}
                    </p>
                  </div>
                  {evento.destacado && !pasado && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="bg-red-600 text-white text-[9px] font-black tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                        style={{ boxShadow: '0 0 10px rgba(255,26,26,0.6)' }}
                      >
                        ★ DESTACADO
                      </span>
                    </div>
                  )}
                  {pasado && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gray-800 text-gray-400 text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-gray-600">
                        FINALIZADO
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* ── CUERPO ── */}
              <div className="flex items-stretch">

                {/* Columna fecha */}
                <div className="flex-shrink-0 w-[60px] sm:w-[72px] bg-red-500/10 border-r border-red-500/20 flex flex-col items-center justify-center py-5 px-1 gap-0.5">
                  <span className="neon-text-red text-2xl sm:text-3xl font-black leading-none tabular-nums">
                    {evento.fecha.dia}
                  </span>
                  <span className="text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5">
                    {evento.fecha.mes}
                  </span>
                  <div className="w-6 h-px bg-red-500/30 my-1" />
                  <span className="text-gray-600 text-[9px] sm:text-[10px] font-medium tabular-nums">
                    {evento.fecha.año}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0 p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2">

                  {/* Nombre y género — solo si NO hay imagen */}
                  {!tieneImagen && (
                    <>
                      <h4 className="text-white font-black text-lg sm:text-xl uppercase tracking-[0.06em] leading-tight truncate pr-16">
                        {evento.nombre}
                      </h4>
                      <p className="text-red-400/90 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                        {evento.genero}
                      </p>
                    </>
                  )}

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {evento.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {evento.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-red-500/10 border border-red-500/20 text-gray-400 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Badges sin imagen */}
                {!tieneImagen && (
                  <div className="absolute top-0 right-0">
                    {evento.destacado && !pasado && (
                      <div className="bg-red-600 text-white text-[9px] font-black tracking-[0.18em] uppercase px-3 py-1 rounded-bl-xl">
                        ★ DESTACADO
                      </div>
                    )}
                    {pasado && (
                      <div className="bg-gray-700 text-gray-400 text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-bl-xl">
                        FINALIZADO
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!pasado && <div className="h-px w-full neon-line-red opacity-20" />}
            </div>
          );
        })}
      </div>

    </div>
  );
};
