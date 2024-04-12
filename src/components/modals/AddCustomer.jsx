import { useState } from "react";
import Button from "../Button";

// eslint-disable-next-line react/prop-types
export default function AddCustomer({ close, open }) {
  const [formData, setFormData] = useState({
    customerId: "", // New field for customer ID
    name: "",
    address: "",
    contact: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const generateCustomerId = () => {
  //   // Logic to generate a unique customer ID, for example:
  //   const customerId = Math.floor(100000 + Math.random() * 900000);
  //   setFormData({
  //     ...formData,
  //     customerId: customerId,
  //   });
  // };

  const discardChanges = () => {
    setFormData({
      customerId: "",
      name: "",
      address: "",
      contact: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div
      className={`inset-1 fixed transition-all duration-300 w-[100%] h-[100%] ${
        open ? "visible bg-black/20" : "invisible"
      } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={`absolute w-[25%] h-[65%] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          Add New Customer
        </h1>

        <Button set={close}>close</Button>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-3 bg-white rounded-lg"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Customer Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter customer name"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
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
              <label
                htmlFor="contact"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contact
              </label>
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
          </div>

          <div className="flex justify-between mt-4">
            <Button set={discardChanges}>Discard</Button>
            <Button type="primary" btntype="submit" set={handleSubmit}>
              Add Customer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
