import React, { useState } from "react";
import UserList from "./Components/UserList";
import EditUserForm from "./Components/Forms";
function App() {
  const usersData = [
    {
      id: 1,
      name: "John Doe",
      username: "johnDoe",
      email: "johnDoe@email.com",
    },
    {
      id: 2,
      name: "Wilbert Smith",
      username: "wilbertSmith",
      email: "wilbertSmith@email.com",
    },
    { id: 3, name: "Ben Ten", username: "benten", email: "benten@email.com" },
  ];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    console.log("asdasdasd");
  };

  return (
    <div className="container mx-auto grid grid-cols-2  mt-36">
      <div>
        <div className="flex-large  p-10">
          <div>
            <h2 className="text-2xl mb-5">
              {editing ? "EDIT USER" : "NEW USER"}
            </h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
      </div>
      <div>
        <UserList users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
  );
}

export default App;
