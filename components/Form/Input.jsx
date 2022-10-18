import styles from "../../styles/Form/Input.module.css";

export default function Input({
  name,
  type,
  placeholder,
  value,
  text,
  onChange,
}) {
  return (
    <div className={styles.input_div}>
      <label htmlFor={name}>{text} </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
