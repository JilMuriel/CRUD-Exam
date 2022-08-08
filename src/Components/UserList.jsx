import React from "react";

const UserList = (props) => {
  return (
    <div className="p-10 border shadow h-full">
      <h2 className="text-2xl mb-5">USER LIST</h2>

      {props.users.length > 0 ? (
        props.users.map((user) => (
          <table className="table-auto w-full p-10">
            <thead>
              <tr>
                <th className="w-10 tracking-wide text-left">ID</th>
                <th className="w-40 tracking-wide text-left">Name</th>
                <th className="w-50 tracking-wide text-left">UserName</th>
                <th className="w-40 tracking-wide text-left">Email</th>
                <th className="w-10 tracking-wide text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white" space-x-3 key={user.id}>
                <td className="tracking-wide text-left pb-3">{user.id}</td>
                <td className="tracking-wide text-left pb-3">{user.name}</td>
                <td className="tracking-wide text-left pb-3">
                  {user.username}
                </td>

                <td className="tracking-wide text-left pb-3">{user.email}</td>
                <td className="tracking-wide text-left pb-3">
                  <div className="flex">
                    <button
                      class="bg-transparent text-sm mr-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => {
                        props.editRow(user);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      class="bg-transparent text-sm hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                      onClick={() => props.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p className="text-lg">No user to display.</p>
      )}
    </div>
  );
};

export default UserList;
