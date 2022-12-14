import { Fragment } from "react";
import Header from "./FirstPage/Header/Header";
import Body from "./FirstPage/Body/Body";
import { Routes,Route } from "react-router-dom";
import Container from "./SecondPage/Container";

const LandingPage = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<><Header /><Body /></>} />
        <Route  path='/news' element={<Container />} />
      </Routes>
    </Fragment>
  );
};

export default LandingPage;
