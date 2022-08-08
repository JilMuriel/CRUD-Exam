import React, { useState, useEffect } from "react";
import InputField from "./InputField";

const EditUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "", email: "" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <InputField
        label="Name"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Username"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        required
      />
      <button className="inline-block mt-10 mr-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        {props.editing ? "Update user" : "Add user"}
      </button>
      {props.editing && (
        <button
          onClick={resetAddUser}
          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
