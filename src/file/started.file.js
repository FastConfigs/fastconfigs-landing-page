const Started = (props) => {
    return (
        <div className="text-sub-design">
            <small className="small-text">{props.text}</small>
            <h2 className="digital-h2">{props.digital}</h2>
            <button className="btn-btn-started" value={props.getStarted}>{props.getStarted}</button>
        </div>
    )
}
export default Started