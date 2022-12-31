import { useState, useEffect } from "react";

function Resume(props) {
  // create state to hold projects
  const [resume, setResume] = useState(null);

  useEffect(()=>{
    async function getResumeData() {
      const response = await fetch("./resume.json");
      const data = await response.json();
      setResume(data);
    }
    getResumeData()
  }, [])

  const loaded = () => {
    return resume.map((resume) => (
      <div>
        <div className="symbolDiv">
            <img className="symbol" src="https://img.icons8.com/color/512/javascript.png"/>
            <img className="symbol" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png"/>
            <img className="symbol" src="https://img.icons8.com/stickers/512/css3.png"/>
            <img className="symbol" src="https://img.icons8.com/fluency/512/python.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/react-native.png"/>
            <img className="symbol" src="https://img.icons8.com/ios/512/express-js.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/bootstrap.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/sass.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/nodejs.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/git.png"/>
            <img className="symbol" src="https://img.icons8.com/ios-filled/512/github.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/visual-studio-code-2019.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/mongodb.png"/>
            <img className="symbol" src="https://img.icons8.com/color/512/heroku.png"/>
            <img className="symbol" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"/>
        </div>
        <div>
            
            <a href="https://i.imgur.com/Gw4MJfS.png" target="_blank">
              <img className= "resumeDoc" src="https://i.imgur.com/Gw4MJfS.png"/>  
            </a>
            
        </div>
      </div>
    ));
  };

  return resume ? loaded() : <h1>Loading...</h1>;
}

export default Resume;
