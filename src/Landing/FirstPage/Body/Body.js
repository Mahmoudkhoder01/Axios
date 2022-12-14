import { Fragment, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import classes from './Body.module.css';


const Body = () => {
  const [imagess, setImagess] = useState([]);

  useEffect(() => {
    axios.get("http://45.9.190.133:6339/avh/api/getTopNews")
      .then(res => {
        setImagess(res.data);
      }).catch(err => {
        console.log('Something wrong');
      })
  }
  );

  // const renderData = (imagess) => {
  //   const result = [];
  //   for (let i = 0; i < imagess.map.length; i++) {
  //     let Data = imagess.filter((post,index) => index < 1).map((post, index) => {
  //       return (
  //         <div key={index} style={{ marginTop: "3rem", marginLeft: "5rem" }} >
  //           <img src={post.image} className={classes.img1} />
  //           <h4 style={{ color: "white" }} >{post.whiteTitle}</h4>
  //           <h4 style={{ color: "lightgreen" }} >{post.greenTitle}</h4>
  //           <p style={{ color: "#686868" }}>{post.description}</p>
  //         </div >
  //       )
  //     })
  //     result.push(Data)
  //   }
  //   return result
  // }




  return (
    <Fragment>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {imagess && imagess.slice(3, 4).map((post, index) => {
            return (
              <div key={index} style={{ marginTop: "3rem", marginLeft: "5rem" }}>
                <img src={post.image} className={classes.img1} />
                <h4 style={{ color: "white" }} >{post.whiteTitle}</h4>
                <h4 style={{ color: "lightgreen" }} >{post.greenTitle}</h4>
                <p style={{ color: "#686868" }} className={classes.firstp} >{post.description}</p>
              </div>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {imagess && imagess.slice(1, 2).map((post, index) => {
            return (
              <div key={index} style={{ marginTop: "3rem", marginLeft: "5rem" }}>
                <img src={post.image} className={classes.img1} />
                <h4 style={{ color: "white" }} className={classes.secondImage} >{post.whiteTitle}</h4>
                <h4 style={{ color: "lightgreen" }} >{post.greenTitle}</h4>
                <p style={{ color: "#686868"}} className={classes.secondp} >{post.description}</p>
              </div>
            )
          })}
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        {imagess && imagess.slice(4, 5).map((post, index) => {
          return (
            <div key={index} style={{ marginTop: "3rem", marginLeft: "5rem" }}>
              <img src={post.image} style={{ width: "90% !important" }} />
              <h4 style={{ color: "white", width: "86% !important" }} >{post.whiteTitle}</h4>
              <h4 style={{ color: "lightgreen" }} >{post.greenTitle}</h4>
              <p style={{ color: "#686868", width: "80% !important" }}>{post.description}</p>
            </div>
          )
        })}
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {imagess && imagess.slice(0, 1).map((post, index) => {
            return (
              <div key={index} style={{ marginTop: "3rem", marginLeft: "5rem" }}>
                <img src={post.image} className={classes.img1} />
                <h4 style={{ color: "white" }} >{post.whiteTitle}</h4>
                <h4 style={{ color: "lightgreen" }} >{post.greenTitle}</h4>
                <p style={{ color: "#686868", width: "80% !important" }}>{post.description}</p>
              </div>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {imagess && imagess.slice(2, 3).map((post, index) => {
            return (
              <div key={index} style={{ marginTop: "3rem", marginLeft: "5rem" }}>
                <img src={post.image} className={classes.img1} />
                <h4 style={{ color: "white" }} >{post.whiteTitle}</h4>
                <h4 style={{ color: "lightgreen" }} >{post.greenTitle}</h4>
                <p style={{ color: "#686868", width: "80% !important" }}>{post.description}</p>
              </div>
            )
          })}
        </Grid>
      </Grid>
    </Fragment>
  );
};


export default Body;
