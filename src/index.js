/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.7.0";

//  Firebase


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>

    <Route path="/signup" exact component={Signup} 
    // props={childProps}
    />

      {/* LOGIN */}
    <Route path="/login" exact component={Login} />
      {/* LOGIN */}
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
