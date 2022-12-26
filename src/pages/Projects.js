import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
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
