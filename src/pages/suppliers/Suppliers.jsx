import { useState } from "react";
import AddSupplierModal from "../../components/modals/AddSupplierModal";
import AddSupplyModal from "../../components/modals/AddSupplymodal";
// eslint-disable-next-line no-unused-vars
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Suppliers() {
  const [SupplierOpen, setSupplierOpen] = useState(false);
  const [SupplyOpen, setSupplyOpen] = useState(false);
  const navigate = useNavigate();

  const sampleData = [
    {
      name: "Supplier A",
      id: "S001",
      address: "123 Main Street",
      contact: "+1234567890",
      product: "Product X",
      balance: "$5000",
      business: "$10000",
    },
    {
      name: "Supplier B",
      id: "S002",
      address: "456 Elm Street",
      contact: "+1987654321",
      product: "Product Y",
      balance: "$7000",
      business: "$12000",
    },
    {
      name: "Supplier C",
      id: "S003",
      address: "789 Oak Street",
      contact: "+1122334455",
      product: "Product Z",
      balance: "$6000",
      business: "$11000",
    },
    {
      name: "Supplier D",
      id: "S004",
      address: "321 Pine Street",
      contact: "+9988776655",
      product: "Product X",
      balance: "$4500",
      business: "$9000",
    },
    {
      name: "Supplier E",
      id: "S005",
      address: "543 Cedar Street",
      contact: "+5544332211",
      product: "Product Y",
      balance: "$8000",
      business: "$14000",
    },
    {
      name: "Supplier F",
      id: "S006",
      address: "876 Birch Street",
      contact: "+3322114455",
      product: "Product Z",
      balance: "$3500",
      business: "$8000",
    },
    {
      name: "Supplier G",
      id: "S007",
      address: "135 Maple Street",
      contact: "+9988776655",
      product: "Product X",
      balance: "$6000",
      business: "$11000",
    },
    {
      name: "Supplier H",
      id: "S008",
      address: "246 Pine Street",
      contact: "+1122334455",
      product: "Product Y",
      balance: "$7500",
      business: "$13000",
    },
    {
      name: "Supplier I",
      id: "S009",
      address: "357 Cedar Street",
      contact: "+5544332211",
      product: "Product Z",
      balance: "$4000",
      business: "$7500",
    },
    {
      name: "Supplier J",
      id: "S010",
      address: "468 Birch Street",
      contact: "+3322114455",
      product: "Product X",
      balance: "$6500",
      business: "$12000",
    },
  ];

  const handleSupplydetail = () => {
    navigate("/SupplyDetails");
  };

  return (
    <div className="">
      <div className=" bg-slate-100 p-2 rounded-lg m-2">
        <h1 className="p-2 font-bold text-lg inline-block">
          Suppliers Overview
        </h1>

        <div className="w-[50%] inline-block p-2 rounded-lg bg-white mx-2">
          <div className="flex justify-evenly items-center">
            <div>
              <span className="text-blue-400"> Suppliers:</span> <span>14</span>
            </div>
            <div>
              <span className="text-purple-400">Total Purchased:</span>{" "}
              <span>24233$</span>
            </div>
            <button
              onClick={handleSupplydetail}
              className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-blue-400 hover:text-white  transition-colors duration-300"
            >
              Supply Details
            </button>
            <button
              onClick={() => {
                setSupplyOpen(true);
              }}
              className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-blue-400 hover:text-white  transition-colors duration-300"
            >
              Add Supply
            </button>
            <AddSupplyModal
              close={() => setSupplyOpen(false)}
              open={SupplyOpen}
            />
          </div>
        </div>
      </div>
      <div className="p-2 rounded-lg bg-slate-100 m-2">
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          All Suppliers
        </h1>
        <button
          onClick={() => {
            setSupplierOpen(true);
          }}
          className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-blue-400 hover:text-white  transition-colors duration-300"
        >
          Add New Supplier
        </button>
        <AddSupplierModal
          close={() => setSupplierOpen(false)}
          open={SupplierOpen}
        />
        <div className="px-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border-b-2 py-1">Name</th>
                <th className="border-b-2 py-1">ID</th>
                <th className="border-b-2 py-1">Address</th>
                <th className="border-b-2 py-1">Contact</th>
                <th className="border-b-2 py-1">Balance</th>
                <th className="border-b-2 py-1">Total Business</th>
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

                  <td className="border-b border-gray-400 py-1">
                    {row.balance}
                  </td>
                  <td className="border-b border-gray-400 py-1">
                    {row.business}
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
