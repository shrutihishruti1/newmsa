import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import SubmitForm from "./stories/SubmitForm/SubmitForm";
import { Redirect, Route, Switch } from "react-router";
import { HomePage } from './stories/Pages/HomePage/HomePage';
import { SubmitPage } from './stories/Pages/SubmitPage/SubmitPage';
import { Footer } from "./stories/Footer/Footer";
import MSAHeader from "./stories/MSAHeader/MSAHeader";



function App() {
  return <SubmitForm />
  //(
  //   <div className="App">
  //     <MSAHeader />
  //     <Switch>
  //       <Route path="/home" component={HomePage} />
  //       <Route path="/submit" component={SubmitPage} />
  //     </Switch>
  //     <Footer />
  //   </div>
  // ); 
  
}

export default App;