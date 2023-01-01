import { useState, useEffect } from "react";

function Resume(props) {
  // create state to hold projects
  const [resume, setResume] = useState(null);

  useEffect(() => {
    async function getResumeData() {
      const response = await fetch("./resume.json");
      const data = await response.json();
      setResume(data);
    }
    getResumeData();
  }, []);

  const loaded = () => {
    return (
      <div className="parent">
        <div className="child1">
          <ul>
            <li>
              <div>
                <h1>General Assembly, Software Engineer Fellow</h1>
                <p>October 2022 - February 2023</p>
                <p>
                  A 12-week / 500+ hour immersive course on full-stack web
                  development;designed and built 3 full-stack applications and 1
                  client application that interacts with a third-party API.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>True Food Kitchen, Server</h1>
                <p>March 2022 - October 2022</p>
                <p>
                  Handled 8 tables at a time, facilitating communication between
                  approximately 40 clients and kitchen staff, and oversaw the
                  introduction of 30+ new food and drink items per quarter.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>Crate & Barrel, Sales Associate</h1>
                <p>June 2018 - April 2022</p>
                <p>
                  Exceeded yearly expectations in sales KP, upselling
                  approximately $100,000 worth of product yearly, notably
                  developed a new system of operation leading to an approximate
                  140% increase in order completion and client satisfaction.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>William Reed Business Media, Editorial Intern</h1>
                <p>May 2021 - August 2021</p>
                <p>
                  Collaborated with Editor-in-Chief to publish content for 3
                  different B2B news channels while seeking prospective
                  opportunities.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>Flower Bomb Media, Editorial Intern</h1>
                <p>December 2020 - May 2021</p>
                <p>
                  Conceptualized and produced 30+ articles for global fashion
                  and entertainment magazine, New Face Magazine, which produced
                  17 issues that year and has 64k+ followers on social media,
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return resume ? loaded() : <h1>Loading...</h1>;
}

export default Resume;
{
  /* <div className="symbolDiv">
          <img
            className="symbol javascript"
            src="https://img.icons8.com/color/512/javascript.png"
          />
          <img
            className="symbol html"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png"
          />
          <img
            className="symbol css"
            src="https://img.icons8.com/stickers/512/css3.png"
          />
          <img
            className="symbol python"
            src="https://img.icons8.com/fluency/512/python.png"
          />
          <img
            className="symbol react"
            src="https://img.icons8.com/color/512/react-native.png"
          />
          <img
            className="symbol express"
            src="https://img.icons8.com/ios/512/express-js.png"
          />
          <img
            className="symbol bootstrap"
            src="https://img.icons8.com/color/512/bootstrap.png"
          />
          <img
            className="symbol sass"
            src="https://img.icons8.com/color/512/sass.png"
          />
          <img
            className="symbol nodejs"
            src="https://img.icons8.com/color/512/nodejs.png"
          />
          <img
            className="symbol git"
            src="https://img.icons8.com/color/512/git.png"
          />
          <img
            className="symbol github"
            src="https://img.icons8.com/ios-filled/512/github.png"
          />
          <img
            className="symbol VS"
            src="https://img.icons8.com/color/512/visual-studio-code-2019.png"
          />
          <img
            className="symbol mongodb"
            src="https://img.icons8.com/color/512/mongodb.png"
          />
          <img
            className="symbol heroku"
            src="https://img.icons8.com/color/512/heroku.png"
          />
          <img
            className="symbol netlify"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
          />
        </div> */
}
{
  /* <div>
            <a href="https://i.imgur.com/Gw4MJfS.png" target="_blank">
              <img className= "resumeDoc" src="https://i.imgur.com/Gw4MJfS.png"/>  
            </a>
        </div> */
}
