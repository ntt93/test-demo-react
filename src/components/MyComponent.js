//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "An", age: "16" },
      { id: 2, name: "Anh", age: "69" },
      { id: 3, name: "Ban", age: "28" },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
