import styles from "./Column.module.scss";

function Column({column, children, onDrop, onDragOverColumn, activeColumn, setActiveColumn}){
    return (
    <section 
    className={`${styles.column} ${activeColumn === column.id ? styles.active : ""}`}
    onDragOver={(e) => {
        e.preventDefault()
        onDragOverColumn(column.id)
    }
    }
    onDrop={(e) => {
        e.preventDefault()
        onDrop(column.id)
        setActiveColumn(null);
    }}
    >
        <h2>{column.title}</h2>
        {children}
    </section>
    );
}

export default Column