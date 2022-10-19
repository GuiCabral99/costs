import { useEffect, useState } from "react";

import Input from "./Input";
import Select from "./Select";
import Btn from "./Btn";

import styles from "../../styles/Form/Form.module.css";

export default function Form() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto:"
        placeholder="Insira o nome do projeto"
        name="project"
      />
      <Input
        text="Orçamento do projeto:"
        placeholder="Insira o orçamento total"
        type="number"
        name="budget"
      />
      <Select
        name="category"
        labelText="Selecione a categoria: "
        options={categories}
      />
      <Btn text="Criar projeto" />
    </form>
  );
}
