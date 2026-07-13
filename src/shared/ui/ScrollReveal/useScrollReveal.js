import { useEffect, useRef, useState } from "react";

const OBSERVER_OPTIONS = {
  threshold: 0.12,
  rootMargin: "0px 0px -10% 0px",
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isIntersectionObserverSupported() {
  return typeof window !== "undefined" && "IntersectionObserver" in window;
}

export default function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(
    () => prefersReducedMotion() || !isIntersectionObserverSupported(),
  );

  useEffect(() => {
    if (isVisible) {
      return undefined;
    }

    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, OBSERVER_OPTIONS);

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}
