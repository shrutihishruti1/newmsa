import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import SubmitForm from "./stories/SubmitForm/SubmitForm";
import { Redirect, Route, Switch } from "react-router";
import { HomePage } from './stories/Pages/HomePage/HomePage';
import { SubmitPage } from './stories/Pages/SubmitPage/SubmitPage';
import { Footer } from "./stories/Footer/Footer";
//import MSAHeader from "./stories/MSAHeader/MSAHeader";
import { MSAHeader } from "./stories/MSAHeader/MSAHeader";
import { useQuery } from "@apollo/client";
import { Self } from "./api/__generated__/Self";
import { SELF } from "./api/queries";



function App() {
  const { loading, error, data } = useQuery<Self>(SELF);
  return (

    <div className="App">
      <MSAHeader user={data?.self} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          path="/home"
         // render={() => <FeedPage pageTitle="MSA Projects 2021" />}
        />
        <Route path="/submit">
          <SubmitForm />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
  // return (
  //   <div className="App">
  //     <MSAHeader />
  //     <Switch>
  //       <Route path="/home" component={HomePage} />
  //       <Route path="/submit" component={SubmitPage} />
  //     </Switch>
  //     <Footer />
  //   </div>
  // ); 

  //<SubmitForm />
  
}

export default App;