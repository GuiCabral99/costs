import { useState } from "react";
import { useRouter } from "next/router";

import Input from "./Input";
import Select from "./Select";
import Btn from "./Btn";

import styles from "../../styles/Form/Form.module.css";

export default function Form() {
  const [project, setProject] = useState({}); // useState com as informações dos projetos
  const [category, setCategory] = useState([]);
  const router = useRouter();

  // Criando projeto no backend em formato json
  function createPost(project) {
    project.cost = 0;
    project.services = [];
    fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(project),
    })
      .then((res) => res.json)
      .then((data) => router.push("/projects")) //redirect
      .catch((err) => console.log(err));
  }

  // Mudando o valor do useState project atraves dos inputs project e budget
  const inputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  // Adicionando select/options no backend
  const selectCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  // submit
  const submit = (e) => {
    e.preventDefault();
    createPost(project);
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto:"
        placeholder="Insira o nome do projeto"
        name="project"
        onChange={inputChange}
        value={project.name}
      />
      <Input
        text="Orçamento do projeto:"
        placeholder="Insira o orçamento total"
        type="number"
        name="budget"
        onChange={inputChange}
        value={project.budget}
      />
      <Select
        name="category"
        labelText="Selecione a categoria: "
        onchange={selectCategory}
        value={project.category ? project.category.id : ""}
      />
      <Btn text="Criar projeto" />
    </form>
  );
}
