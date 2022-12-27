import { useState, useEffect } from "react";

function About(props) {  const [about, setAbout] = useState(null);

useEffect(()=>{
  async function getAboutData() {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  }
  getAboutData()
}, [])

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
