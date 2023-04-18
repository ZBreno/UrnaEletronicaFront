import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.containerText}>
          <p>
            <span>&#169;</span>Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
