import React, { Component } from "react";
import PubSub from 'pubsub-js'
import axios from "axios";

export default class Search extends Component {
  search = () => {
    console.log('search组件发布消息了');
    // 获取用户的输入(连续解构赋值+重命名)
    const {
      keyWordElement: { value: keyWord },
    } = this;
    // 发送通知前通知List更新状态
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      (res) => {
        // 请求成功后通知List更新状态
        // this.props.updateAppState({ users: res.data.items, isLoading: false });
        PubSub.publish('atguigu', { users: res.data.items, isLoading: false })
      },
      (err) => {
        // 请求失败后通知List更新状态
        // this.props.updateAppState({ isLoading: false, err:err.message });
        PubSub.publish('atguigu', { isLoading: false, err: err.message })
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
