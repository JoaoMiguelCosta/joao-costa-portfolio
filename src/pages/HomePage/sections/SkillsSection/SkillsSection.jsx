import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import SkillCard from "./components/SkillCard/SkillCard.jsx";

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

        <div className={styles.groups}>
          <section
            className={styles.group}
            aria-labelledby="applied-skills-title"
          >
            <h3 className={styles.groupTitle} id="applied-skills-title">
              {content.appliedTitle}
            </h3>

            <div className={styles.appliedGrid}>
              {content.appliedItems.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  labels={content.labels}
                />
              ))}
            </div>
          </section>

          <section
            className={styles.learningSection}
            aria-labelledby="learning-skills-title"
          >
            <div className={styles.learningHeader}>
              <h3 className={styles.groupTitle} id="learning-skills-title">
                {content.learningTitle}
              </h3>

              <p className={styles.learningDescription}>
                {content.learningDescription}
              </p>
            </div>

            <div className={styles.learningGrid}>
              {content.learningItems.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  labels={content.labels}
                  variant="learning"
                />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
