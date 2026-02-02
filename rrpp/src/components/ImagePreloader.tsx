import type { RRPPData } from '../data/rrppData';

interface ImagePreloaderProps {
  rrppData: RRPPData[];
}

export const ImagePreloader = ({ rrppData }: ImagePreloaderProps) => {
  return (
    <div className="hidden" aria-hidden="true">
      {rrppData.map((rrpp) => (
        <img
          key={`preload-${rrpp.id}`}
          src={rrpp.urlImagen}
          alt=""
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
};
