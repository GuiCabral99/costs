import styles from "../../styles/Form/Btn.module.css";

export default function Btn({ text }) {
  return (
    <div>
      <button className={styles.btn_container}>{text}</button>
    </div>
  );
}
