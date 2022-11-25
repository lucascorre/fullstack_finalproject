import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import classes from "./AppLayout.module.scss";

const AppLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={classes.AppContainer}>
      <div className={classes.headerContainer}>
        <Navbar/>
      </div>
      <div className={classes.contentContainer}>
        {children}
      </div>
      <div className={classes.footerContainer}>
        <Footer/>
      </div>
    </div>
  )
}

export default AppLayout