import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import MyNavLink from "./component/MyNavLink"
import Test from './pages/Test'

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
              <MyNavLink to="/atguigu/about">About</MyNavLink>
              <MyNavLink to="/atguigu/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/atguigu/about" component={About} />
                  <Route path="/atguigu/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
