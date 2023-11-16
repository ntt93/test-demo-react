//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["ab", "bc", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor name="Hoi Dan IT" age="30" />
        <br />
        <DisplayInfor name="Eric" age={26} myInfor={myInfor} />
      </div>
    );
  }
}
export default MyComponent;
