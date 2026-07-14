import styles from './TaskCard.module.scss';
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

function TaskCard({task, onDelete, onEdit, onDragStart, setDragedTaskId, onTaskDrop}){
    return (
      <article
        className={`${styles.TaskCard} ${styles[task.priority.toLowerCase()]}`}
        draggable
        onDragStart={() => {onDragStart(task.id)}}
        onDragEnd={() => setDragedTaskId(null)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          e.stopPropagation();          
          onTaskDrop(task.id);
        }}
      >
        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <span>{task.priority.toUpperCase()}</span>
        <div className={styles.taskBtns}>

          <button type="button" onClick={() => onDelete(task.id)}>
            <CiTrash className={styles.deleteBtn}/>
          </button>
          <button type="button" onClick={() => onEdit(task.id)}>
            <CiEdit className={styles.editBtn}/>
          </button>
        </div>
      </article>
    );
}

export default TaskCard;