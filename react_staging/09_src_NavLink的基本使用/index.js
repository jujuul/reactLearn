/*
 * @Author: your name
 * @Date: 2021-02-28 18:01:04
 * @LastEditTime: 2021-03-07 17:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\react_staging\src\index.js
 */
// 引入react核心库
import React from "react";
// 引入reactDOM
import ReactDOM from "react-dom";
//
import { BrowserRouter } from "react-router-dom";
// 引入App组件
import App from "./App";
// 渲染App组件到页面
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
