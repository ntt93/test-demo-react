//class component
//function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "An", age: "16" },
      { id: 2, name: "Anh", age: "69" },
      { id: 3, name: "Ban", age: "28" },
    ],
  };

  handleAddNewUser = (userObj) => {
    // console.log(userObj);
    this.setState({ listUsers: [userObj, ...this.state.listUsers] });
  };

  //JSX
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
