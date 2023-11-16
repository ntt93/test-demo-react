import React from "react";

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
      <div>
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
            <div>
              {this.state.isShowListUser && (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
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
