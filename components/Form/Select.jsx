import styles from "../../styles/Form/Select.module.css";

export default function Select({ name, value, text, labelText, options }) {
  return (
    <div className={styles.select_container}>
      <label htmlFor={name}>{labelText}</label>
      <select name={name} id={name}>
        <option disabled selected>
          Selecione a categoria
        </option>

        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
