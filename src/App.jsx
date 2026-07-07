import Header from "./components/Header/header"
import Sidebar from "./components/sidebar/Sidebar"
import Board from "./components/Board/Board"
function App() {
  return (
    <>
    <Header/>

    <main>
      <Sidebar/>
      <Board/>
    </main>
    </>
  );
}

export default App