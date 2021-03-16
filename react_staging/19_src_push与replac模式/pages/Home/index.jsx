import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../component/MyNavLink'
import News from './News/index'
import Message from './Message/index'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink replace to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink replace to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
