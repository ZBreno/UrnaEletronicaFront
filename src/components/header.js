import styles from "@/styles/Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className="navbar  navbar-expand-lg bg-primary" data-bs-theme="dark">
         
            <div className="container-fluid">
                
              <a href="/" className={styles.titleNavBar}>
                <p>Urna eletrônica</p>
              </a>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={styles.ul}>
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>
                  <li>
                    <Link href="/vote/">Votar</Link>
                  </li>
                  <li>
                    <Link href="/report/">Ver relatorio</Link>
                  </li>
                </ul>
              </div>
            </div>
        
        </nav>
      </header>
    </>
  );
}
