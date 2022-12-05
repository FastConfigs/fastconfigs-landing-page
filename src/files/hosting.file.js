const HostionFile = (props) => {
    return (
        <div className="image">
            <div className="size-image">
                <img src={props.heroku} alt="heroku" />
                <img src={props.netlify} alt="netlify" />
            </div>
        </div>
    )
}

export default HostionFile
