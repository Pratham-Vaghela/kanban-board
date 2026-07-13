import Column from "../Column/Column";
import styles from "./Board.module.scss";
import TaskCard from "../TaskCard/TaskCard";

function Board({tasks, onDelete, onEdit, onDragStart, onDrop}){
    const columns = [
    { id: "todo", title: "Todo" },
    { id: "in-progress", title: "In Progress" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
    ];

    return (
        <section className={styles.board}>

            {columns.map((column) => {
                const columnTasks = tasks.filter((task) => task.status === column.id);

                return (
                  <Column key={column.id}  column={column} onDrop={onDrop}>
                    {columnTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onDragStart={onDragStart}
                      />
                    ))}
                  </Column>
                );
            })}
        </section>
    );
}

export default Board