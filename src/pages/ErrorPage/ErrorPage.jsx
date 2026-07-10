import FeedbackPage from "../../shared/ui/FeedbackPage/FeedbackPage.jsx";

import useErrorPage from "./useErrorPage.js";

import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  const errorPage = useErrorPage();

  return (
    <section className={styles.page} aria-labelledby="error-title">
      <FeedbackPage {...errorPage} />
    </section>
  );
}
