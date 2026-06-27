import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import styles from "./SkillsSection.module.css";

export default function SkillsSection({ content }) {
  return (
    <section
      className={styles.section}
      id="competencias"
      aria-labelledby="skills-title"
    >
      <Container>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            titleId="skills-title"
            description={content.description}
          />
        </div>

        <div className={styles.skillsGrid}>
          {content.items.map((skill) => (
            <article className={styles.skillGroup} key={skill.id}>
              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <ul
                className={styles.technologyList}
                aria-label={`Tecnologias de ${skill.title}`}
              >
                {skill.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
