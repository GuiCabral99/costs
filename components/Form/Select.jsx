import styles from "../../styles/Form/Select.module.css";

export default function Select({ name, value, text, labelText }) {
  return (
    <div className={styles.select_container}>
      <label htmlFor={name}>{labelText}</label>
      <select name={name} id={name}>
        <option disabled selected>
          Selecione a categoria
        </option>
        <option value={value}>{text}</option>
      </select>
    </div>
  );
}
