import styles from "./IconFrame.module.css";

export default function IconFrame({ src, size = 20, className = "" }) {
  const frameClassName = [styles.frame, className].filter(Boolean).join(" ");

  return (
    <span
      className={frameClassName}
      aria-hidden="true"
      style={{ "--icon-size": `${size}px` }}
    >
      <img
        className={styles.icon}
        src={src}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
