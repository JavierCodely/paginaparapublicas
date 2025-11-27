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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const newWindow = window.open(instagramUrl, '_blank');
    setTimeout(() => {
      if (newWindow) {
        newWindow.location.reload();
      }
    }, 1000);
  };

  return (
    <div
      className={`
        bg-black/40 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-1.5 sm:p-2
        transition-all duration-300
        hover:scale-[1.02] sm:hover:scale-105 hover:bg-black/50
        border border-transparent hover:border-gray-700
        active:scale-[0.98]
        ${className}
      `}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Foto circular del RRPP */}
        <div className="flex-shrink-0">
          <img
            src={photoUrl}
            alt={name}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gray-700"
            loading="lazy"
          />
        </div>

        {/* Nombre clickeable centrado */}
        <a
          href={instagramUrl}
          onClick={handleClick}
          rel="noopener"
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
