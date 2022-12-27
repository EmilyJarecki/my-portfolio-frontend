import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  useEffect(()=>{
    async function getProjectData() {
      const response = await fetch("./projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getProjectData()
  }, [])

  const loaded = () => {
    return projects.map((project) => (
      <section className="outerProject">
        <div className="individualProject">
          <div className="projectInfo">
            <h1 className="projectName">{project.name}</h1>
            <p className="projectDes">{project.description}</p>
            <a href={project.git} className="projectLink" target="_blank">
              <h4 className="projectLink">&lt;Github&gt;</h4>
            </a>
            <a href={project.live} className="projectLink" target="_blank">
              <h4 className="projectLink">&lt;Website&gt;</h4>
            </a>
          </div>

          <img className="projectImg" src={project.image} />
        </div>
      </section>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
