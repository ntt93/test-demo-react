//class component
//function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "An", age: "16" },
//       { id: 2, name: "Anh", age: "69" },
//       { id: 3, name: "Ban", age: "28" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     // console.log(userObj);
//     this.setState({ listUsers: [userObj, ...this.state.listUsers] });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId); //xóa id trùng với id truyền vào, giữ những id khác
//     this.setState({ listUsers: listUsersClone });
//   };
//   //JSX
//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "An", age: "16" },
    { id: 2, name: "Anh", age: "69" },
    { id: 3, name: "Ban", age: "28" },
  ]);

  const handleAddNewUser = (userObj) => {
    // console.log(userObj);
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId); //xóa id trùng với id truyền vào, giữ những id khác
    setListUsers(listUsersClone);
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};
export default MyComponent;
