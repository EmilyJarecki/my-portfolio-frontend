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
      <div className="projectDiv">
        <h1>{project.name}</h1>
        <img className="projectImg" src={project.image} />
        <img className="projectImg" src={project.image1} />
        <img className="projectImg" src={project.image2} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Website</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;