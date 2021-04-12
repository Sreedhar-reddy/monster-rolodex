import React, { Component } from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let element;
    this.state.isLoggedIn
      ? (element = (
          <div>
            <UserGreeting />
            <LogoutButton onClick={this.handleLogoutClick} />
          </div>
        ))
      : (element = (
          <div>
            <GuestGreeting />
            <LoginButton onClick={this.handleLoginClick} />
          </div>
        ));
    return element;
  }
}
