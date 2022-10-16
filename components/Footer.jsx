import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/Fa";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100048711021225"
            target="_blanc"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gui_cabral_99/" target="_blanc">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/guilherme-cabral-966aa7231/"
            target="_blanc"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>
        <span>Costs</span> &copy; 2022.
      </p>
    </footer>
  );
}
