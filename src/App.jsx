import Header from "./components/Header/header"
import Sidebar from "./components/sidebar/Sidebar"
import Board from "./components/Board/Board"
import styles from "./App.module.scss";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/TaskForm/TaskForm";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    title : "",
    description : "",
    status : "Todo",
    priority : "High",
  });

  const [Tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn React",
      description: "Understand components and props",
      priority: "High",
      status: "todo",
    },
    {
      id: "2",
      title: "Learn SCSS",
      description: "Practice variables and mixins",
      priority: "Medium",
      status: "todo",
    },
    {
      id: "3",
      title: "Build Board Layout",
      description: "Create responsive layout",
      priority: "High",
      status: "in-progress",
    },
    {
      id: "4",
      title: "Review Code",
      description: "Refactor components",
      priority: "Low",
      status: "review",
    },
    {
      id: "5",
      title: "Setup Project",
      description: "Initialize Vite project",
      priority: "Low",
      status: "done",
    },
  ]);

  function handleChange(e){
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name] : value,
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!formData.title.trim()){
      alert("Tiitle is required")
      return;
    }
  }

  return (
    <div className={styles.app}>
      <Header onAddTask={() => setIsModalOpen(true)} />

      <main className={styles.main}>
        <Sidebar />
        <Board tasks={Tasks}/>
      </main>

      {isModalOpen && (
        <Modal>
          <TaskForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
}

export default App