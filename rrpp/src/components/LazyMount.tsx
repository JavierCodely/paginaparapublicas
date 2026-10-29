import { useEffect, useRef, useState, type ReactNode } from 'react';

interface LazyMountProps {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

/** Monta el contenido solo cuando se acerca al viewport. */
export const LazyMount = ({
  children,
  rootMargin = '500px',
  minHeight = '160px',
}: LazyMountProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className="w-full">
      {visible ? children : <div style={{ minHeight }} aria-hidden />}
    </div>
  );
};
