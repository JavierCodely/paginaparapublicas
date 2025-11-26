interface RRPPCardProps {
  name: string;
  photoUrl: string;
  instagramUsername: string;
  className?: string;
}

export const RRPPCard = ({
  name,
  photoUrl,
  instagramUsername,
  className = ''
}: RRPPCardProps) => {
  const instagramUrl = `https://www.instagram.com/${instagramUsername}`;

  return (
    <div
      className={`
        bg-black rounded-[50px] sm:rounded-[60px] md:rounded-[70px] p-2 sm:p-2.5
        transition-all duration-300
        hover:scale-[1.02] sm:hover:scale-105 hover:bg-[#1a1a1a]
        border border-transparent hover:border-gray-700
        active:scale-[0.98]
        ${className}
      `}
    >
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Foto circular del RRPP */}
        <div className="flex-shrink-0">
          <img
            src={photoUrl}
            alt={name}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-700"
            loading="lazy"
          />
        </div>

        {/* Nombre clickeable centrado */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 text-center
            text-white font-semibold text-xl sm:text-2xl md:text-3xl
            hover:text-blue-400
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
            rounded px-2 py-1
            break-words
          "
        >
          {name}
        </a>
      </div>
    </div>
  );
};
