import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <Link href="/new_project">
        <a>Criar projetos</a>
      </Link>
      <div className={styles.imagem}>
        <Image src="/img/savings.svg" width="350" height="350" alt="cofre" />
      </div>
    </section>
  );
}
