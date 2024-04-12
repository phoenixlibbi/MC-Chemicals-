/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddUserModal from "../../components/modals/AddUserModal";

export default function AdminDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [updateUserModalOpen, setUpdateUserModalOpen] = useState(false);

  // Function to open Add User Modal
  const openAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  // Function to open Update User Modal
  const openUpdateUserModal = () => {
    // setSelectedUser(user);
    setUpdateUserModalOpen(true);
  };

  // Function to close Modals
  const closeModal = () => {
    setAddUserModalOpen(false);
    setUpdateUserModalOpen(false);
    setSelectedUser(null);
  };

  // Function to handle deleting user
  const deleteUser = (userId) => {
    // Filter out the user with the provided userId
    const updatedUsers = users.filter((user) => user.id !== userId);
    // Update the users state with the filtered users
    setUsers(updatedUsers);
    console.log("Deleting user with ID:", userId);
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "1234567890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "9876543210",
    },
    // Add more users as needed
  ]);

  // Sample monthly summary data for all users
  const monthlySummaryDataAllUsers = {
    totalSales: 10000,
    totalProfit: 5000,
    totalRevenue: 15000,
    totalCost: 10000,
  };

  // Sample user data including email and password
  const userData = {
    user1: {
      email: "user1@example.com",
      password: "password1",
      summary: {
        totalSales: 5000,
        totalProfit: 2500,
        totalRevenue: 7500,
        totalCost: 5000,
      },
    },
    user2: {
      email: "user2@example.com",
      password: "password2",
      summary: {
        totalSales: 7000,
        totalProfit: 3000,
        totalRevenue: 10000,
        totalCost: 7000,
      },
    },
    // Add more users as needed
  };

  // Function to handle user selection from dropdown
  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    setSelectedUser(userData[selectedUserId]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Summary Dashboard */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          {/* Display summary for all users */}
          <div className="p-3 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold mb-3">
              Monthly Summary - All Users
            </h2>
            <div className="p-3 border border-gray-200 rounded-md">
              <p className="mb-2">
                Total Sales: ${monthlySummaryDataAllUsers.totalSales}
              </p>
              <p className="mb-2">
                Total Profit: ${monthlySummaryDataAllUsers.totalProfit}
              </p>
              <p className="mb-2">
                Total Revenue: ${monthlySummaryDataAllUsers.totalRevenue}
              </p>
              <p className="mb-2">
                Total Cost: ${monthlySummaryDataAllUsers.totalCost}
              </p>
            </div>
          </div>
          {/* Select user dropdown */}
          <div className="mt-3">
            <label htmlFor="userSelect" className="mr-2">
              Select User:
            </label>
            <select id="userSelect" onChange={handleUserSelect}>
              <option value="">--Select User--</option>
              {Object.keys(userData).map((userId) => (
                <option key={userId} value={userId}>
                  {userData[userId].email}
                </option>
              ))}
            </select>
          </div>
          {/* Display user summary if user is selected */}
          {selectedUser && (
            <div className="mt-5">
              <h2 className="text-xl font-semibold mb-3">
                Monthly Summary - Selected User
              </h2>
              <div className="p-3 border border-gray-200 rounded-md">
                <p className="mb-2">Email: {selectedUser.email}</p>
                <p className="mb-2">Password: {selectedUser.password}</p>
                <p className="mb-2">
                  Total Sales: ${selectedUser.summary.totalSales}
                </p>
                <p className="mb-2">
                  Total Profit: ${selectedUser.summary.totalProfit}
                </p>
                <p className="mb-2">
                  Total Revenue: ${selectedUser.summary.totalRevenue}
                </p>
                <p className="mb-2">
                  Total Cost: ${selectedUser.summary.totalCost}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* User Management */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">User Management</h2>
          <div className="p-3 border border-gray-200 rounded-md">
            {/* Add User Button */}
            <button
              onClick={openAddUserModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Add User
            </button>
            {/* Add User Modal */}
            <AddUserModal open={addUserModalOpen} close={closeModal} />

            {/* Render User List */}
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">ID</th>
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Contact</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2">{user.id}</td>
                    <td className="py-2">{user.name}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">{user.contact}</td>
                    <td className="py-2">
                      {/* Update User Button */}
                      <button
                        onClick={openUpdateUserModal}
                        className="text-blue-500 mr-2"
                      >
                        Update
                      </button>
                      {/* Delete User Button */}
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Update User Modal */}
            <AddUserModal open={updateUserModalOpen} close={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
