import { useCallback, useEffect, useRef, useState } from "react";

export default function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((currentState) => !currentState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key !== "Escape") {
        return;
      }

      closeMenu();
      triggerRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (
        panelRef.current?.contains(event.target) ||
        triggerRef.current?.contains(event.target)
      ) {
        return;
      }

      closeMenu();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [closeMenu, isMenuOpen]);

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    triggerRef,
    panelRef,
  };
}
