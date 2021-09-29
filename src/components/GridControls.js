import "./GridControls.css";

const GridControls = (props) => {

    const submitHandler = () => {
        props.onShuffle();
    }

    return <div className="grid-control">
        <button type='submit' onClick={submitHandler}>Shuffle!</button>
    </div>;
}

export default GridControls;