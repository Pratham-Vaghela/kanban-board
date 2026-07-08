import styles from './TaskCard.module.scss';    

function TaskCard({task}){
    return (
      <article className={styles.TaskCard}>
        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <span>{task.priority}</span>
      </article>
    );
}

export default TaskCard;