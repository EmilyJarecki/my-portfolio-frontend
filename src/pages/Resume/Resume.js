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
      <div className="body">        <div className="skills">
      <h1 className="experience">Technical Skills</h1>
      <div className="symbolDiv">
        <div>
          <img
            className="symbol javascript"
            src="https://img.icons8.com/color/512/javascript.png"
          />
          <p className="text-base">JavaScript</p>
        </div>
        <div>
          <img
            className="symbol html"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png"
          />
          <p className="text-base">HTML5</p>
        </div>
        <div>
          <img
            className="symbol css"
            src="https://img.icons8.com/stickers/512/css3.png"
          />
          <p className="text-base">CSS</p>
        </div>
        <div>
          <img
            className="symbol python"
            src="https://img.icons8.com/fluency/512/python.png"
          />
          <p className="text-base">Python</p>
        </div>
        <div>
          <img
            className="symbol react"
            src="https://img.icons8.com/color/512/react-native.png"
          />
          <p className="text-base">React</p>
        </div>
        <div>
          <img
            className="symbol express"
            src="https://img.icons8.com/nolan/512/express-js.png"
          />
          <p className="text-base">Express</p>
        </div>
        <div>
          <img
            className="symbol bootstrap"
            src="https://img.icons8.com/color/512/bootstrap.png"
          />
          <p className="text-base">Bootstrap</p>
        </div>
        <div>
          <img
            className="symbol sass"
            src="https://img.icons8.com/color/512/sass.png"
          />
          <p className="text-base">Sass</p>
        </div>
        <div>
          <img
            className="symbol nodejs"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-shadow-tal-revivo.png"
          />
          <p className="text-base">Node.js</p>
        </div>
        <div>
          <img
            className="symbol git"
            src="https://img.icons8.com/color/512/git.png"
          />
          <p className="text-base">Git</p>
        </div>
        <div>
          <img
            className="symbol github"
            src="https://img.icons8.com/color-glass/512/github--v2.png"
          />
          <p className="text-base">GitHub</p>
        </div>
        <div>
          <img
            className="symbol VS"
            src="https://img.icons8.com/color/512/visual-studio-code-2019.png"
          />
          <p className="text-base">VS Code</p>
        </div>
        <div>
          <img
            className="symbol mongodb"
            src="https://img.icons8.com/color/512/mongodb.png"
          />
          <p className="text-base">MongoDB</p>
        </div>
        <div>
          <img
            className="symbol heroku"
            src="https://img.icons8.com/color/512/heroku.png"
          />
          <p className="text-base">Heroku</p>
        </div>
        <div>
          <img
            className="symbol netlify"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
          />
          <p className="text-base">Netlify</p>
        </div>
        <div>
          <img
            className="symbol django"
            src="https://img.icons8.com/color/512/django.png"
          />
          <p className="text-base">Django</p>
        </div>
      </div>
    </div>
        <div className="timelineDiv">
          <h1 className="experience">Experience</h1>
          <br></br>
          <ul>
            <li>
              <div className="timelineEventBox">
                <h2>
                  GENERAL ASSEMBLY, <br></br>
                  <span className="jobName">Software Engineer Fellow</span>
                </h2>
                <p className="jobDescription">
                  A 12-week, <span className="emph">500+ hour</span> immersive
                  course on full-stack web development; designed and built{" "}
                  <span className="emph">3 full-stack</span> applications and{" "}
                  <span className="emph">1 client</span> application that
                  interacts with a third-party <span className="emph">API</span>
                  .
                </p>
                <h1 className="date">2023</h1>
              </div>
            </li>
            <li>
              <div className="timelineEventBox">
                <h2>
                  TRUE FOOD KITCHEN, <br></br>
                  <span className="jobName">Server</span>
                </h2>
                <p className="jobDescription">
                  Handled 8 tables at a time, facilitating communication between
                  approximately <span className="emph">40</span> clients and
                  kitchen staff, and oversaw the introduction of 30+ new food
                  and drink items per quarter.
                </p>
                <h1 className="date">2022</h1>
              </div>
            </li>
            <li>
              <div className="timelineEventBox">
                <h2>
                  CRATE & BARREL, <br></br>
                  <span className="jobName">Sales Associate</span>
                </h2>
                <p className="jobDescription">
                  Exceeded yearly expectations in sales KPI, upselling
                  approximately <span className="emph">$100,000</span> worth of
                  product yearly, notably developed a new system of operation
                  leading to an approximate
                  <span className="emph"> 140%</span> increase in order
                  completion and client satisfaction.
                </p>
                <h1 className="date">2022</h1>
              </div>
            </li>
            <li>
              <div className="timelineEventBox">
                <h2>
                  <br></br>
                  WILLIAM REED BUSINESS MEDIA, <br></br>
                  <span className="jobName">Editorial Intern</span>
                </h2>
                <p className="jobDescription">
                  Collaborated with Editor-in-Chief to publish content for 3
                  different <span className="emph">B2B news channels</span>{" "}
                  while seeking prospective opportunities.
                </p>
                <h1 className="date">2021</h1>
              </div>
            </li>
            <li>
              <div className="timelineEventBox">
                <h2>
                  FLOWER BOMB MEDIA, <br></br>
                  <span className="jobName">Editorial Intern</span>
                </h2>
                <p className="jobDescription">
                  Conceptualized and produced <span className="emph">30+</span>{" "}
                  articles for global fashion and entertainment magazine, New
                  Face Magazine, which produced
                  <span className="emph"> 17</span> issues that year and has{" "}
                  <span className="emph">64k+ followers</span> on social media,
                </p>
                <h1 className="date">2021</h1>
              </div>
            </li>
          </ul>
        </div>
        <div className="Education">
          <h1 className="experience">Education</h1>
          <br></br>
          <ul>
            <li>
              <div className="timelineEventBox">
                <h2>GENERAL ASSEMBLY</h2>
                <p className="jobDescription">Software Engineering Immersive</p>
                <h1 className="date">2023</h1>
              </div>
            </li>
            <li>
              <div className="timelineEventBox">
                <h2>UNIVERSITY OF ILLINOIS AT CHICAGO</h2>
                <p className="jobDescription">
                  Bachelor's in English; Professional Writing
                </p>
                <h1 className="date">2021</h1>
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