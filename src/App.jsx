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

  const [editingTask, setEditingTask] = useState(null);

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

  function handleEdit(id){
    setIsModalOpen(true);
    const editTask = Tasks.find((task) => task.id === id)
    setEditingTask(editTask)
    setFormData(editTask)
    // console.log(editTask);
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


    if(editingTask){
        setTasks((prev) => 
          prev.map((task) => 
            task.id === editingTask.id ? {...task, ...formData} : task))
    } else{
        const newTask = {
          id : crypto.randomUUID(),
          ...formData,
        }
    
        setTasks((prev) => [...prev, newTask])
    }

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
        <Board
        tasks={Tasks} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
        />
      </main>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <TaskForm
            errors={errors}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isEditing={editingTask}
          />
        </Modal>
      )}
    </div>
  );
}

export default App