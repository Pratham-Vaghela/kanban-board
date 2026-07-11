import styles from "./Column.module.scss";

function Column({title, children}){
    return (
    <section className={styles.column}>
        <h2>{title}</h2>
        {children}
    </section>
    );
}

export default Column