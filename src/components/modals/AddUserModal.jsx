/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button";

export default function AddUserModal({ close, open }) {
  const [formData, setFormData] = useState({
    userName: "",
    contact: "",
    address: "",
    companyName: "",
    email: "",
    password: "",
    monthlyCharges: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const discardChanges = () => {
    setFormData({
      userName: "",
      contact: "",
      address: "",
      companyName: "",
      email: "",
      password: "",
      monthlyCharges: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    alert("User added successfully");
  };

  return (
    <div
      className={`inset-1 fixed transition-all duration-300 w-[100%] h-[100%] ${
        open ? "visible bg-black/20" : "invisible"
      } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={`absolute w-[25%] h-[90%] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          Add New User
        </h1>

        <Button set={close}>Close</Button>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-3 bg-white rounded-lg"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                name="userName"
                id="userName"
                value={formData.userName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter user name"
              />
            </div>

            <div>
              <input
                type="text"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter contact"
              />
            </div>

            <div>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter address"
              />
            </div>

            <div>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter email"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
              />
            </div>

            <div>
              <input
                type="text"
                name="monthlyCharges"
                id="monthlyCharges"
                value={formData.monthlyCharges}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter monthly charges"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Button set={discardChanges}>Discard</Button>
            <Button type="primary" btntype="submit" set={handleSubmit}>
              Add User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
