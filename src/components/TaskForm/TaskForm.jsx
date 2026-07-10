import styles from "./TaskForm.module.scss"

function TaskForm({ errors, formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={onChange}
        className={errors.title ? styles.errorInput : ""}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={onChange}
        className={errors.description ? styles.errorInput : ""}
      ></textarea>

      <select name="status" value={formData.status} onChange={onChange}>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Review">Review</option>
        <option value="Done">Done</option>
      </select>

      <select name="priority" value={formData.priority} onChange={onChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button className={styles.addBtn}>Add</button>
    </form>
  );
}

export default TaskForm;