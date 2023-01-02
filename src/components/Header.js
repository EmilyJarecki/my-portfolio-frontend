import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <nav className="headerNav" style={navStyle}>
        <Link to="/">
          <div className="navOption" text-decoration="none">
            HOME
          </div>
        </Link>
        <Link to="/about">
          <div className="navOption">ABOUT</div>
        </Link>
        <Link to="/resume">
          <div className="navOption">RESUME</div>
        </Link>
        <Link to="/projects">
          <div className="navOption">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
