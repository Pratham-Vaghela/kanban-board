import Header from "./components/Header/header"
import Sidebar from "./components/sidebar/Sidebar"
import Board from "./components/Board/Board"
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.app}>
      <Header/>

      <main className={styles.main}>
        <Sidebar/>
        <Board/>
      </main>
    </div>
  );
}

export default App