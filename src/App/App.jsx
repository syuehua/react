import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

import Main from "../Main";
import Login from "../Login";

export class App extends React.Component {
  state = {
    page: "main"
  };

  OnClickchangePage = e => {
    console.log(e.key);
    this.setState({
      page: e.key
    });
  };
  render() {
    return (
      <>
        <Menu
          mode="horizontal"
          selectedKeys={[this.state.page]}
          onClick={this.OnClickchangePage}
        >
          <Menu.Item key="main">
            <Link to="/">
              <Icon type="home" />
              Main
            </Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">
              <Icon type="login" />
              Login
            </Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/login" componet={Main} />
          <Route path="/" exact componet={Login} />
        </Switch>
      </>
    );
  }
}

//export default App;
