import { RRPPCard } from './components/RRPPCard';
import { rrppData } from './data/rrppData';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-3 py-6 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">

          {/* Logo del club - círculo placeholder */}
          <img src="src/data/fotos/exodos.png" alt="Logo" className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-700" />

          {/* Nombre del club */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight px-2">
            Club Exodos
          </h1>

          {/* Texto descriptivo */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium px-2 sm:px-4 max-w-xl leading-relaxed">
            CONSEGUI TU INGRESO CON NUESTROS PUBLICAS💖
          </p>

          {/* Separador visual */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Lista de RRPP */}
          <div className="w-full space-y-2 sm:space-y-3 md:space-y-4">
            {rrppData.map((rrpp) => (
              <RRPPCard
                key={rrpp.id}
                name={`${rrpp.nombre} ${rrpp.apellido}`}
                photoUrl={rrpp.urlImagen}
                instagramUsername={rrpp.instagramUsername}
              />
            ))}
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
