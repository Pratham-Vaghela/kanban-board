import styles from "./Column.module.scss";

function Column({title, children}){
    return (
    <section className={styles.column}>
        <h1>{title}</h1>
        {children}
    </section>
    );
}

export default Column