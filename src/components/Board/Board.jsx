import Column from "../Column/Column";
import styles from "./Board.module.scss";
import TaskCard from "../TaskCard/TaskCard";
import { useState } from "react";

function Board(){
    const columns = [
    { id: "todo", title: "Todo" },
    { id: "in-progress", title: "In Progress" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
    ];

    const [Tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn React",
      description: "Understand components and props",
      priority: "High",
      status: "todo",
    },
    {
      id: "2",
      title: "Learn SCSS",
      description: "Practice variables and mixins",
      priority: "Medium",
      status: "todo",
    },
    {
      id: "3",
      title: "Build Board Layout",
      description: "Create responsive layout",
      priority: "High",
      status: "in-progress",
    },
    {
      id: "4",
      title: "Review Code",
      description: "Refactor components",
      priority: "Low",
      status: "review",
    },
    {
      id: "5",
      title: "Setup Project",
      description: "Initialize Vite project",
      priority: "Low",
      status: "done",
    },
    ])

    return (
        <section className={styles.board}>

            {columns.map((column) => {
                const columnTasks = Tasks.filter((task) => task.status === column.id);

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