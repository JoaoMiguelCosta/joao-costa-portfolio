import styles from "./SkillCard.module.css";

export default function SkillCard({ skill, labels, variant = "applied" }) {
  const isLearningCard = variant === "learning";
  const hasFewAppliedTools = variant === "applied" && skill.tools.length <= 3;
  const hasSingleTool = skill.tools.length === 1;

  const cardClassName = [styles.card, isLearningCard ? styles.learning : null]
    .filter(Boolean)
    .join(" ");

  const toolListClassName = [
    styles.toolList,
    isLearningCard ? styles.learningToolList : null,
    hasFewAppliedTools ? styles.singleColumnToolList : null,
    hasSingleTool ? styles.singleToolList : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <h4 className={styles.title}>{skill.title}</h4>

      <p className={styles.description}>{skill.description}</p>

      <div className={styles.contentGroup}>
        <p className={styles.groupLabel}>{labels.tools}</p>

        <ul className={toolListClassName} aria-label={skill.toolsAriaLabel}>
          {skill.tools.map((tool) => (
            <li className={styles.tool} key={tool.id}>
              <span className={styles.iconFrame} aria-hidden="true">
                <img
                  className={styles.icon}
                  src={tool.icon}
                  alt=""
                  width="32"
                  height="32"
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span className={styles.toolName}>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contentGroup}>
        <p className={styles.groupLabel}>{labels.concepts}</p>

        <ul className={styles.conceptList} aria-label={skill.conceptsAriaLabel}>
          {skill.concepts.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
