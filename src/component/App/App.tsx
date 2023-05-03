import React, { Component, ReactNode } from "react";
import classes from "./app.scss";

export class App extends Component {
  override render(): ReactNode {
    return <div className={classes.first}>hello123</div>;
  }
}
