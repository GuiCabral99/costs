import Form from "../components/Form/Form";

import styles from "../styles/New_project.module.css";

export default function NewProject() {
  return (
    <div className={styles.new_project_container}>
      <div className={styles.content}>
        <h1>Criar projeto</h1>
        <p>Crie seu projeto para adicionar serviços</p>

        <Form />
      </div>
    </div>
  );
}
