import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    return (
      <div className="row">
        {this.props.users.map((userObj) => {
          return (
            <div key={userObj.id} className="card">
              <a rel="noreferrer" href={userObj.html_url} target="_blank">
                <img
                  src={userObj.avatar_url}
                  style={{ width: "100px" }}
                  alt="avatar"
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
