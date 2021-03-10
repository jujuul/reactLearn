import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* 在react中，靠路由链接切换不同的组件--编写路由链接 */}
              <NavLink activeClassName="demo" className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="demo" className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
