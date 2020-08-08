import React, { Component } from "react";
import { toast } from "react-toastify";
class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("DPMAccessToken");
    localStorage.removeItem("DPMRefreshToken");
    window.location.assign("/login");
  }
  render() {
    return null;
  }
}
export default Logout;
