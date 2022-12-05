const SideFile = (props) => {
    return (
        <div className="sidefile-container">
           <p>{props.text1}</p>
           <div className="text-container">
           <h1>{props.largeText}</h1>
           </div>
           <div className="button-container">
           <button>{props.button}</button>
           </div>
         
        </div>
    )
}
export default SideFile