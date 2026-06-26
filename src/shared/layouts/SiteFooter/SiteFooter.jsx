import Container from "../../ui/Container/Container.jsx";

import styles from "./SiteFooter.module.css";

const currentYear = new Date().getFullYear();

export default function SiteFooter({ content }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          © {currentYear} {content.owner}. {content.rights}
        </p>
      </Container>
    </footer>
  );
}
