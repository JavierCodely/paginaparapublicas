import { Galeria } from './Galeria';

// Poné el nombre de tu archivo de video en public/videos/
// Ejemplo: si el archivo es public/videos/club.mp4 → ponés "club.mp4"
const VIDEO_FILE = 'background.mp4';

const STATS = [
  { num: '22+', label: 'Años' },
  { num: '500+', label: 'Eventos' },
  { num: '∞', label: 'Recuerdos' },
];

const TAGS = ['🎤 DJs', '🎵 Músicos', '💃 Artistas', '📸 Fotógrafos', '🎬 Productores'];

export const ClubHistory = () => {
  return (
    <div className="w-full space-y-8 sm:space-y-12 mt-4 sm:mt-8 pb-8">

      {/* ── DIVISOR NEON ── */}
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 h-px neon-line-red opacity-55" />
        <span className="neon-text-red neon-pulse-red text-sm font-bold tracking-[0.5em] select-none flex-shrink-0">◆ ◆ ◆</span>
        <div className="flex-1 h-px neon-line-red opacity-55" />
      </div>

      {/* ── HISTORIA DEL CLUB ── */}
      <section className="border neon-border-red rounded-2xl p-4 sm:p-6 md:p-8 bg-black/55 backdrop-blur-sm">

        <div className="text-center mb-5 sm:mb-7">
          <span className="inline-block bg-red-500/10 border border-red-500/35 text-red-400 text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-4">
            Puerto Esperanza, Misiones
          </span>
          <h2 className="neon-text-red neon-pulse-red text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.1em] leading-none mb-2">
            22 AÑOS
          </h2>
          <h3 className="neon-text-red text-lg sm:text-2xl font-bold uppercase tracking-[0.25em] opacity-80">
            DE HISTORIA
          </h3>
        </div>

        <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          <p>
            Desde el corazón de{' '}
            <strong className="text-white">Puerto Esperanza, Misiones</strong>, nacimos
            con una sola misión: crear las noches más únicas de la región.
          </p>
          <p>
            Con más de{' '}
            <strong className="neon-text-red">22 años</strong> encendiendo las noches. De generación
            en generación, nuestras noches dejaron huellas imborrables en la memoria de
            todos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-5 border-t border-gray-700/40">
          {STATS.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="neon-text-red neon-pulse-red text-2xl sm:text-3xl font-black leading-none">
                {num}
              </div>
              <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.18em] mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECCIÓN CON VIDEO DE FONDO (desde NUESTRAS NOCHES) ── */}
      <div className="relative rounded-2xl overflow-hidden">

        {VIDEO_FILE && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={`/videos/${VIDEO_FILE}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 space-y-8 sm:space-y-10 p-4 sm:p-6 md:p-8">

          {/* ── COLLAGE DE FOTOS ── */}
          <Galeria />

          {/* ── NUEVOS TALENTOS ── */}
          <section>
            <div className="border neon-border-red rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-black/50 backdrop-blur-sm flex flex-col gap-3 sm:gap-4">
              <div>
                <span className="inline-block bg-red-500/10 border border-red-500/35 text-red-400 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3">
                  Siempre buscamos
                </span>
                <h3 className="neon-text-red neon-pulse-red text-2xl sm:text-3xl font-black uppercase tracking-[0.1em] leading-tight">
                  NUEVOS TALENTOS
                </h3>
              </div>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Estamos siempre en la búsqueda de{' '}
                <strong className="text-white">nuevos talentos</strong>, tanto locales de{' '}
                <strong className="neon-text-red">Puerto Esperanza</strong> como de toda
                la zona de <strong className="text-white">Misiones</strong>.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Creemos en el potencial de la gente de nuestra tierra. Si tenés ganas de
                ser parte de nuestro equipo,{' '}
                <strong className="text-white">¡queremos conocerte!</strong>
              </p>

              <div className="flex flex-wrap gap-1.5 mt-1">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="bg-red-500/10 border border-red-500/25 text-red-400 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── FOOTER FINAL ── */}
          <div className="flex items-center justify-center py-2">
            <p className="neon-text-red text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold opacity-60">
              Puerto Esperanza · Misiones · Desde 2002
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
