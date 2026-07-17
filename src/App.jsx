import Header from "./components/Header/header"
import Sidebar from "./components/Sidebar/Sidebar"
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

  const [Tasks, setTasks] = useState(() => {
    try{
      const savedTasks = localStorage.getItem("kanban-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch(error){
      console.error("failed to load tasks", error);
      localStorage.removeItem("kanban-tasks")
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(Tasks));
  },[Tasks])

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
    localStorage.removeItem("Tasks")
  }

  function handleEdit(id){
    setIsModalOpen(true);
    const editTask = Tasks.find((task) => task.id === id)
    setEditingTask(editTask)
    setFormData(editTask)
    // console.log(editTask);
  }  
  
  const [draggedTaskId, setDragedTaskId] = useState(null)
  
  function handleDragTask(taskId){
    setDragedTaskId(taskId)
  }

  const [activeColumn, setActiveColumn] = useState(null)

  function handleDropColumn(columnId){
    setTasks((prev) =>
      prev.map((task) =>
        task.id === draggedTaskId ? { ...task, status: columnId } : task,
      ),
    );
  }

  function handleDragOver(columnId){
    setActiveColumn(columnId)
  }


  
  function handleTaskDrop(targetedTaskId){

     const draggedTask = Tasks.find((task) => task.id === draggedTaskId);
     const targetedTask = Tasks.find((task) => task.id === targetedTaskId);    

    if (!draggedTask || !targetedTask) {
      return;
    }
     
     if (draggedTask.status !== targetedTask.status) {
       return;
     }

    const updatedTasks = [...Tasks]
    const dragedTaskIndex = Tasks.findIndex((task) => task.id === draggedTaskId)
    const targetedTaskIndex = Tasks.findIndex((task) => task.id === targetedTaskId)

    const [movedTask] = updatedTasks.splice(dragedTaskIndex, 1);
    updatedTasks.splice(targetedTaskIndex, 0, movedTask)
    setTasks(updatedTasks)
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

  function handleClose(){
    setIsModalOpen(false);
    setFormData({
      title: "",
      description: "",
      status: "todo",
      priority: "high",
    });
  }  

  return (
    <div className={styles.app}>
      <Header onAddTask={() => setIsModalOpen(true)} />

      <main className={styles.main}>
        <Sidebar />
        <Board
        tasks={Tasks} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
        onDragStart={handleDragTask}
        onDrop={handleDropColumn}
        activeColumn={activeColumn}
        setActiveColumn={setActiveColumn}
        onDragOverColumn={handleDragOver}
        setDragedTaskId={setDragedTaskId}
        onTaskDrop={handleTaskDrop}
        />
      </main>

      {isModalOpen && (
        <Modal onClose={() => handleClose()}>
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