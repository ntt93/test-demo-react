import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = { isShowListUser: true };
  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    //destructuring array/object
    const { listUsers } = this.props; //object
    // const listUsers = this.props.listUsers;
    return (
      <div className="display-infor-container">
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

        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              {this.state.isShowListUser && (
                <div className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div style={{ color: "orange", paddingTop: "20px" }}>
                    My age is {user.age}
                  </div>
                  <hr />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
