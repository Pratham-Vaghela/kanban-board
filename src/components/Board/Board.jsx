import Column from "../Column/Column";
import styles from "./board.module.scss"

function Board(){
    const columns = [
        "Todo",
        "In Progress",
        "Review",
        "Done",
    ];

    return (
        <section className={styles.board}>
            {columns.map((title) => (<Column key={title} title={title}/>))}
        </section>
    );
}

export default Board