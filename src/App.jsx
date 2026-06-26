import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>Portefólio pessoal</p>

        <h1 className={styles.title}>João Costa</h1>

        <p className={styles.description}>
          Programador web focado na criação de aplicações modernas,
          acessíveis e bem estruturadas.
        </p>
      </section>
    </main>
  );
}