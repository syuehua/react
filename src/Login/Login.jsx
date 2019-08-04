import React from "react";
import { Input } from "antd";

export class Login extends React.Component {
  state = {
    account: "",
    password: ""
  };
  onChange = e => {
    this.setState({
      account: ""
    });
  };
  render() {
    return (
      <>
        <Input
          id="account"
          placeholder="input with clear icon"
          allowClear
          onChange={this.onChange}
          value={this.state.account}
        />
      </>
    );
  }
}

export default Login;
