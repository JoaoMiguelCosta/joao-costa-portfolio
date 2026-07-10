import FeedbackPage from "../../shared/ui/FeedbackPage/FeedbackPage.jsx";

import useErrorPage from "./useErrorPage.js";

import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  const errorPage = useErrorPage();

  return (
    <div className={styles.page}>
      <FeedbackPage {...errorPage} />
    </div>
  );
}
