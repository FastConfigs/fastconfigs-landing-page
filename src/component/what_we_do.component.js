import ProjectDone from "../file/what_we_do.file";
const OurProject = ({ img, text, description }) => {
  const project = [
    { text, img, description, id: 1 },
    { text, img, description, id: 2 },
    { text, img, description, id: 3 },
  ];

  return (
    <div>
      <div className="project-class-sub-flex">
        <div className="project-class">
          <div className="project-sub-class">
            <ProjectDone
              project={project}
              img="./image/arrow.png"
              text="Future Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            />
          </div>
        </div>
        <div className="project-class">
          <div className="project-sub-class">
            <ProjectDone
              project={project.filter((myId) => (myId.id = 2))}
              img="./image/light.png"
              text="Big Ideas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            />
          </div>
        </div>
        <div className="project-class">
          <div className="project-sub-class">
            <ProjectDone
              project={project.filter((myId) => (myId.id = 3))}
              img="./image/brainlight.png"
              text="Creative Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurProject;
