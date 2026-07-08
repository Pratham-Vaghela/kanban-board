import styles from "./Column.module.scss";

function Column({title}){
    return (
    <section className={styles.column}>
        <h1>{title}</h1>
    </section>
    );
}

export default Column