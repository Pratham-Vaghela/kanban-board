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
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="review">Review</option>
        <option value="done">Done</option>
      </select>

      <select name="priority" value={formData.priority} onChange={onChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className={styles.addBtn}>Add</button>
    </form>
  );
}

export default TaskForm;