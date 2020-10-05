import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </BrowserRouter>
  );
}
