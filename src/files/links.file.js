const LinkFile = (props) => 
{
    return (
        <div className="link">
            <a href="#home">{props.home}</a>
            <a href="#home">{props.about}</a>
            <a href="#home">{props.donate}</a>
            <a href="#home">{props.contact}</a>
            <a className="get-started" href="#home">{props.getStarted}</a>
        </div>
    )
}
export default LinkFile