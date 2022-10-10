import { RefObject, useEffect, useRef } from 'react';

export type TUseInfiniteScroll = {
  checkIntersect: ([entry]: any, observer: IntersectionObserver) => void;
};

export type TInfiniteScroll = {
  ref: RefObject<HTMLDivElement>;
};

export default function useInfiniteScroll({ checkIntersect }: TUseInfiniteScroll): TInfiniteScroll {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref.current) {
      observer = new IntersectionObserver(checkIntersect, {
        root: null,
        rootMargin: '1px',
        threshold: 0.1,
      });
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, [checkIntersect]);

  return { ref };
}
