import React, { Component } from "react";
import axios from "axios";

export default class index extends Component {
  search = () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const {
      keyWordElement: { value: keyWord },
    } = this;
    // 发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      (res) => {
        console.log("成功了", res.data);
      },
      (err) => {
        console.log("成功了", err);
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="请输入关键词点击搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
