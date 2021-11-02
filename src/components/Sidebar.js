import React, { Component } from "react";
import SidebarRow from "./SidebarRow";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userAction";

import {
  AcademicCapIcon,
  AnnotationIcon,
  BookOpenIcon,
  CalendarIcon,
  CodeIcon,
  CollectionIcon,
  DocumentAddIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

export class Sidebar extends Component {
  Logoutfunc = () => {
    this.props.logoutUser();
  };
  redirectUrl = (urlParams) => {
    let actionUrl = window.location.href;
    console.log(urlParams);
    if (actionUrl.split("/")[actionUrl.split("/").length - 1] !== "") {
      actionUrl.split("/")[actionUrl.split("/").length - 1] = urlParams;
    } else {
      actionUrl += urlParams;
    }
    window.location.href = actionUrl;
  };
  render() {
    const {
      user: {
        credentials: { handle, imageUrl },
        authenticated,
      },
    } = this.props;
    return (
      <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        {authenticated && (
          <div onClick={() => this.redirectUrl("profile")} title="profile">
            <Link to="/profile"><SidebarRow src={imageUrl} title={handle} /></Link>
          </div>
        )}
        <Link to="/" title="all screams">
          <SidebarRow Icon={CollectionIcon} title="All Screams" />
        </Link>
        {authenticated && (
          <Link to="/postScream" title="post scream">
            <SidebarRow Icon={DocumentAddIcon} title="Post Scream" />
          </Link>
        )}
        {authenticated && (
          <Link to="/authorScreams" title="your screams">
            <SidebarRow Icon={AnnotationIcon} title="My Screams" />
          </Link>
        )}
        <Link to="/upcomingContest" title="contest watcher">
          <SidebarRow Icon={CalendarIcon} title="Upcoming Contest" />
        </Link>
        <Link to="/careerOpportunities" title="career">
          <SidebarRow Icon={AcademicCapIcon} title="Career Opportunities" />
        </Link>
        <Link to="/studyResources" title="study resources">
          <SidebarRow Icon={BookOpenIcon} title="Study Resources" />
        </Link>
        <Link to="/codingProblems" title="coding problems">
          <SidebarRow Icon={CodeIcon} title="Coding Problems" />
        </Link>
        {authenticated ? (
          <div onClick={this.Logoutfunc} title="logout">
            <SidebarRow Icon={LogoutIcon} title="Logout" />
          </div>
        ) : (
          <div onClick={() => (this.redirectUrl("login"))} title="login">
            <Link to="/login"><SidebarRow Icon={LoginIcon} title="Login" /></Link>
          </div>
        )}
      </div>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Sidebar);
