import Input from "./Input";
import Select from "./Select";
import Btn from "./Btn";

import styles from "../../styles/Form/Form.module.css";

export default function Form() {
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
        text="opção1"
        labelText="Selecione a categoria: "
      />
      <Btn text="Criar projeto" />
    </form>
  );
}
