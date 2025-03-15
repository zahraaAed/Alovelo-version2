import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/white-logo-edit.png" alt="Alovelo Logo" width={150} height={50} />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/services">SERVICES</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
