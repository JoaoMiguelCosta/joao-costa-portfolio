import IconFrame from "../../../../../../shared/ui/IconFrame/IconFrame.jsx";

import styles from "./AboutEducation.module.css";

export default function AboutEducation({ education, className }) {
  return (
    <article className={className} aria-labelledby="about-education-title">
      <p className="u-eyebrow">{education.eyebrow}</p>

      <div className={styles.educationHeader}>
        <div>
          <h3 className={styles.educationTitle} id="about-education-title">
            {education.title}
          </h3>

          <p className={styles.educationMeta}>{education.institution}</p>
        </div>

        <span className={styles.educationPeriod}>{education.period}</span>
      </div>

      <p className={styles.educationDescription}>{education.description}</p>

      <a
        className={styles.educationLink}
        href={education.certificate.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={education.certificate.ariaLabel}
      >
        <IconFrame src={education.certificate.icon} size={20} />

        <span>{education.certificate.label}</span>
      </a>
    </article>
  );
}
