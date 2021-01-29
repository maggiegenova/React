import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  //Version 1
  //   componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  //   }

  render() {
    const { user } = this.props;

    if (!user) {
      //we can not find any user, we will return null, so the component doesn't show anything
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //pull data from a component
  //ownProps is a reference to the props that are about to be send to the component
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps
  // , { fetchUser } //version 1
)(UserHeader);
