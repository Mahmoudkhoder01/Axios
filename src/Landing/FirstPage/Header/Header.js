import { Fragment } from "react";
import"./Header.css";
import { NavLink } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {

  const back = { backgroundImage: `url(${process.env.PUBLIC_URL + "/imgN.png"})` };

  return (
    <Fragment>
      <div className='bg-img' style={back}>
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid" style={{ position: "relative", top: "2rem" }}>
              <a className="navbar-brand" href="/">
                <img
                  className="Logo-type"
                  src={
                    process.env.PUBLIC_URL +
                    "/download.png"
                  }
                  alt=""
                ></img>
              </a>
              <div className="collapse navbar-collapse links" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="s"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      BUSINESS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      INVEST
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/news">
                      NEWS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CAREERS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="header-div">
            <p style={{ color: "grey", fontSize: "2rem" }}>NEWS CENTER</p>
            <p className="p-2"><span style={{ color: "white" }}>TOP</span> <span style={{ color: "#85ffbd" }}>NEWS</span></p>
          </div>
        </div>
      </div>
      {/* <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    color:'black',
                    fontSize: '20px',
                    justifyContent:'end'
                }}>
                    <div className={classes.navlink}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            ABOUT
                        </NavLink>
                    </div>
                    <div className={classes.navlink}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            BUSINESS
                        </NavLink>
                    </div>
                    <div className={classes.navlink}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            INVEST
                        </NavLink>
                    </div>
                    <div className={classes.navlink}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            NEWS
                        </NavLink>
                    </div>
                    <div className={classes.navlink}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            CAREERS
                        </NavLink>
                    </div>
                    <div className={classes.navlink}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            CONTACT
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" />
                    <Route exact path="/about" />
                    <Route exact path="/contact"/>
                </Routes>
            </BrowserRouter> */}
    </Fragment>
  );
};



export default Header;



