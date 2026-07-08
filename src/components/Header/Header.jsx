import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Kanban board</h1>
      <button>Add Task</button>
    </header>
  )
}

export default Header