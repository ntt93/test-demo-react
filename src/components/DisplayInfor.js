import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowListUser: true };
  }

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };

  render() {
    //destructuring array/object
    const { listUsers } = this.props; //object
    // const listUsers = this.props.listUsers;
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>

        {listUsers.map((user, index) => {
          return (
            // <div>
            //   {this.state.isShowListUser && (
            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
              <div>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
              </div>
              <div>
                <button onClick={() => this.props.handleDeleteUser(user.id)}>
                  Delete
                </button>
              </div>
              <hr />
            </div>
            //   )}
            // </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
