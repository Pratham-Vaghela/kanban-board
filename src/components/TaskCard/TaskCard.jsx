import styles from './TaskCard.module.scss';    

function TaskCard({task, onDelete}){
    return (
      <article
        className={`${styles.TaskCard} ${styles[task.priority.toLowerCase()]}`}
      >
        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <span>{task.priority.toUpperCase()}</span>
        <button type="button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </article>
    );
}

export default TaskCard;