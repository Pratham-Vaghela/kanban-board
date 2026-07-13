import styles from "./Column.module.scss";

function Column({column, children, onDrop}){
    return (
    <section 
    className={styles.column}
    onDragOver={(e) => e.preventDefault()}
    onDrop={() => onDrop(column.id)}
    >
        <h2>{column.title}</h2>
        {children}
    </section>
    );
}

export default Column