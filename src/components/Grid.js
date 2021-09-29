import "./Grid.css";

const Grid = (props) => {

    const gridStyle = {
        backgroundColor: "rgb(31, 31, 31)",
        margin: "2rem auto",
        width: "50rem",
        maxWidth: "25rem",
        display: "grid",
        gridTemplateColumns: `repeat(${Math.sqrt(props.colors.length)}, 1fr)`,
        padding: "10px"
    }

    const gridItemStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(0, 0, 0, 0.8)",
        padding: "20px",
        fontSize: "30px",
        textAlign: "center"
    }

    return <div style={gridStyle}>
        {props.colors.map((color) => {
            return <div style={{...gridItemStyle, backgroundColor: color}} key={Math.random().toString()}>1</div>;
        })}
    </div>;
}

export default Grid;