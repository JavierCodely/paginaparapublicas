import { memo } from 'react';

interface RRPPCardProps {
  name: string;
  photoUrl: string;
  location: string;
  isFirstImage?: boolean;
  onContact: () => void;
}

export const RRPPCard = memo(function RRPPCard({
  name,
  photoUrl,
  location,
  isFirstImage = false,
  onContact,
}: RRPPCardProps) {
  return (
    <div
      className="
        bg-black/40 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-1.5 sm:p-2
        transition-transform duration-300
        hover:scale-[1.02] sm:hover:scale-105 hover:bg-black/50
        border border-red-600/50 hover:border-red-500
        active:scale-[0.98]
      "
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onContact}
          className="flex-shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          aria-label={`Contactar a ${name}`}
        >
          <img
            src={photoUrl}
            alt={name}
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-red-600/50 hover:border-red-500 transition-colors duration-200"
            loading={isFirstImage ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={isFirstImage ? 'high' : 'low'}
          />
        </button>

        <button
          type="button"
          onClick={onContact}
          className="
            flex-1 text-center
            flex flex-col items-center justify-center
            hover:text-blue-400
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
            rounded px-2 py-1
          "
        >
          <span className="text-white font-semibold text-xl sm:text-2xl md:text-3xl break-words">
            {name}
          </span>
          <span className="text-gray-400 text-sm sm:text-base md:text-lg mt-0.5">
            {location}
          </span>
        </button>
      </div>
    </div>
  );
});
