import styles from "./Header.module.scss";

function Header({onAddTask}) {
  return (
    <header className={styles.header}>
      <h1>Kanban board</h1>
      <button onClick={onAddTask}>Add Task</button>
    </header>
  )
}

export default Header