import { useState } from "react";
import AddCustomer from "../../components/modals/AddCustomer";
export default function Customers() {
  const [COpen, setCOpen] = useState(false);

  const sampleData = [
    {
      name: "John Doe",
      id: "C001",
      address: "123 Main Street",
      contact: "+1234567890",
      order: "Pending",
      totalSale: "$100",
    },
    {
      name: "Jane Smith",
      id: "C002",
      address: "456 Elm Street",
      contact: "+1987654321",
      order: "Completed",
      totalSale: "$150",
    },
    {
      name: "Alice Johnson",
      id: "C003",
      address: "789 Oak Street",
      contact: "+1122334455",
      order: "Delivered",
      totalSale: "$200",
    },
    // Add more sample data as needed
  ];

  return (
    <div className="">
      <div className=" bg-slate-100 p-2 rounded-lg m-2">
        <h1 className="p-2 font-bold text-lg inline-block">
          Customers Overview
        </h1>

        <div className="w-[30%] inline-block p-2 rounded-lg bg-white mx-2">
          <div className="flex justify-evenly">
            <div>
              <span className="text-blue-400"> Customers:</span> <span>14</span>
            </div>
            <div>
              <span className="text-purple-400">Total Sale:</span>{" "}
              <span>24233$</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 rounded-lg bg-slate-100 m-2">
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          All Customers
        </h1>
        <button
          onClick={() => {
            setCOpen(true);
          }}
          className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-blue-400 hover:text-white  transition-colors duration-300"
        >
          Add New Customer
        </button>
        <AddCustomer close={() => setCOpen(false)} open={COpen} />
        <div className="px-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border-b-2 py-1">Name</th>
                <th className="border-b-2 py-1">ID</th>
                <th className="border-b-2 py-1">Address</th>
                <th className="border-b-2 py-1">Contact</th>
                <th className="border-b-2 py-1">order</th>
                <th className="border-b-2 py-1">Total Sale</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-400 py-1">{row.name}</td>
                  <td className="border-b border-gray-400 py-1">{row.id}</td>
                  <td className="border-b border-gray-400 py-1">
                    {row.address}
                  </td>
                  <td className="border-b border-gray-400 py-1">
                    {row.contact}
                  </td>
                  <td className="border-b border-gray-400 py-1">{row.order}</td>
                  <td className="border-b border-gray-400 py-1">
                    {row.totalSale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
