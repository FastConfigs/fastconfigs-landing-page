const ProjectDone = (props) => {
  return (
    <div className="project-description-flex">
     
        <img src={props.img} alt="mage" />
        <div className="h2-text">
          <h2>{props.text}</h2>
          <div className ="border">
          <p></p>
            </div>
         
          <small>{props.description}</small>
        </div>
        
        
      
      </div>
  );
};
export default ProjectDone;
