import ActiveLink from "./Activelink";
import styles from "./navlink.module.scss";

export default function Navlink() {
  return (
    <nav className={styles.nav}>
      <ActiveLink activeClasName={styles.active} href="/">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink activeClasName={styles.active} href="/series">
        <a>Séries</a>
      </ActiveLink>
      <ActiveLink activeClasName={styles.active} href="/sobre">
        <a>Sobre</a>
      </ActiveLink>
    </nav>
  );
}
