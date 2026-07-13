import useScrollReveal from "./useScrollReveal.js";

import styles from "./ScrollReveal.module.css";

export default function ScrollReveal({
  as: Component = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  const revealClassName = [styles.reveal, isVisible ? styles.visible : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={ref}
      className={revealClassName}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  );
}
