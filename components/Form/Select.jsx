import { useState, useEffect } from "react";

import styles from "../../styles/Form/Select.module.css";

export default function Select({ name, labelText, onchange, value }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.select_container}>
      <label htmlFor={name}>{labelText}</label>
      <select name={name} id={name} onChange={onchange} value={value || ""}>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
