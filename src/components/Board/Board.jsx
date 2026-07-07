import Column from "../Column/Column";

function Board(){
    const columns = [
        "Todo",
        "In Progress",
        "Review",
        "Done",
    ];

    return (
        <section>
            {columns.map((title) => (<Column key={title} title={title}/>))}
        </section>
    );
}

export default Board