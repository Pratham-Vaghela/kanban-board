import Header from "./components/Header/header"
import Sidebar from "./components/sidebar/Sidebar"
import Board from "./components/Board/Board"
import styles from "./App.module.scss";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/TaskForm/TaskForm";
import { useState, useEffect } from "react";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    title : "",
    description : "",
    status : "todo",
    priority : "high",
  });

  const [Tasks, setTasks] = useState([]);

  function handleChange(e){
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name] : value,
    }))
  }

  function handleDelete(id){
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id))
  }

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  function handleSubmit(e){
    e.preventDefault();

    const newErrors = {
      title: !formData.title.trim(),
      description: !formData.description.trim(),
    };

    setErrors(newErrors);

    if (newErrors.title || newErrors.description) { 
      return;
    }

    const newTask = {
      id : crypto.randomUUID(),
      ...formData,
    }

    setTasks((prev) => [...prev, newTask])

    setErrors({
      title: false,
      description: false,
    });

    setFormData({
      title: "",
      description: "",
      status: "todo",
      priority: "high",
    });


    setIsModalOpen(false)
  }
  useEffect(() => {
    console.log("Tasks updated:", Tasks);
  }, [Tasks]);

  return (
    <div className={styles.app}>
      <Header onAddTask={() => setIsModalOpen(true)} />

      <main className={styles.main}>
        <Sidebar />
        <Board tasks={Tasks} onDelete={handleDelete}/>
      </main>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <TaskForm
            errors={errors}
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