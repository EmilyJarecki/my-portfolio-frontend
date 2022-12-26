import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("./about.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="About">
      <section className="imageSec">
        <img className="myPic" src="https://i.imgur.com/t8x9rrO.jpeg" />
      </section>
      <h2 className="bio">This is {about.name}</h2>

        <p className="bio">
           Emily Jarecki is a Chicago-based Software Engineer studying at General Assembly's Software Engineering Immersive.  
        </p>
        <p className="bio">Before making the leap, she was self-teaching herself HTML, CSS, and Python.</p>
        <p className="bio">She does not like talking about herself in third person.</p>
        <p className="bio"><strong>Contact her instead.</strong></p>
      
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
