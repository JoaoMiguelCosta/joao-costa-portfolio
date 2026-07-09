import IconFrame from "../../../../../../shared/ui/IconFrame/IconFrame.jsx";

import styles from "./ResourceGroup.module.css";

export default function ResourceGroup({ title, links, isExternal = false }) {
  return (
    <div className={styles.resourceGroup}>
      <h3 className={styles.resourceTitle}>{title}</h3>

      <div className={styles.resourceLinks}>
        {links.map((link) => (
          <a
            className={styles.resourceLink}
            href={link.href}
            download={link.download || undefined}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            key={link.id}
            aria-label={link.ariaLabel}
          >
            <IconFrame src={link.icon} size={20} />

            <span className={styles.resourceLinkLabel}>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
