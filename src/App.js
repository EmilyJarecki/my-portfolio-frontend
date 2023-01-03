import "./App.css";
import "./components/Footer/Footer.css"
import "./pages/Home/Home.css"
import "./pages/Projects/Projects.css"
import "./pages/Resume/Resume.css"
import "./components/Header/Header.css"
import "./pages/About/About.css"

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

function App() {
  // URL should have YOUR HEROKU URL for your backend (will build later), make sure you include the trailing slash
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/resume" element={<Resume URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;