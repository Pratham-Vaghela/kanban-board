import Column from "../Column/Column";
import styles from "./Board.module.scss";
import TaskCard from "../TaskCard/TaskCard";

function Board({tasks}){
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
                    <Column key={column.id} title={column.title}>
                        {columnTasks.map((task) => (
                            <TaskCard key={task.id} task={task}/>
                        ))}
                    </Column>
                )
            })}
        </section>
    );
}

export default Board