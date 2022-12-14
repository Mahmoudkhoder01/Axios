import { Fragment, useState } from "react";
import classes from "./Container.module.css";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Container = () => {

    const [body, setBody] = useState([]);

    useEffect(() => {
        axios.get("http://45.9.190.133:6339/avh/api/avhNews")
            .then(res => {
                setBody(res.data);
                console.log(res.data);
            }).catch(err => {
                console.log('Something wrong');
            })
    }
    );


    return (
        <Fragment>
            <div className={classes.container}>
                <img src={body.coverImage} alt="photo" className={classes.coverPhoto} />
                <div>
                    <div className={classes.navdiv}>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid" style={{ position: "relative", top: "2rem" }}>
                                <a className="navbar-brand" href="s">
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
                                    <ul className="navbar-nav" style={{ marginLeft: "20.2rem" }}>
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
                    </div>
                </div>
                <div className={classes.headerDiv}>
                    <p style={{ color: "grey", fontSize: "2rem" }}>NEWS CENTER</p>
                    <p className={classes.p2}><span style={{ color: "white" }}>{body.whiteTitle}</span> 
                    <br/><span style={{ color: "#85ffbd" }}>{body.greenTitle}</span></p>
                </div>
            </div>
            <div className={classes.bodyContainer}>
                <div className={classes.author}>
                    <p>
                    <img src={body.authorImage} style={{color:"#686868",float: "left", height: "2rem",marginRight:"1rem"}} alt="Author Image"/>
                        <span style={{color:"#686868"}}>Author</span>
                        <span style={{marginLeft: "50rem",color:"#686868",marginTop:"2rem", fontSize:"17px"}}>
                            SHAR THIS ARTICLE  
                            <span> <FontAwesomeIcon icon={faFacebook} className={classes.icons} />
                                   <FontAwesomeIcon icon={faTwitter} className={classes.icons}/>
                                   <FontAwesomeIcon icon={faInstagram} className={classes.icons}/>
                                   <FontAwesomeIcon icon={faLinkedin} className={classes.icons}/>
                            </span>
                        </span>
                        <br/><span style={{fontWeight:"bold", color:"white"}}>{body.authorName}</span>
                    </p>
                       <p className={classes.pDesctiption}>{body.description}</p>
                </div>
                <div>
                    <img src={body.largeImage} className={classes.LargePhoto} />
                    <p className={classes.pDesctiption}>
                        {body.newsBody}
                    </p>
                </div>
            </div>
        </Fragment>
    )
};

export default Container;