import { getUsers } from "./api";
import React from "react";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default UserList;
