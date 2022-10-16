import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <Image
              src="/img/costs_logo.png"
              width="30"
              height="30"
              alt="costs icone"
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="/company">
              <a>Empresa</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
