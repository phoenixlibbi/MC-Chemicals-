/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function SupplierDetails() {
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [searchDate, setSearchDate] = useState("");

  // Sample data for 5 suppliers
  const sampleData = [
    {
      supplier_id: 101,
      name: "ABC Suppliers",
      supplies: [
        {
          order_date: "2024-03-21",
          supply_date: "2024-03-23",
          supply_status: "Pending",
          payment_status: "Pending",
          balance: 400.0,
          products: [
            {
              product_id: "P001",
              product_name: "Widget A",
              quantity: 100,
              price_per_unit: 5.0,
              total_price: 500.0,
            },
            {
              product_id: "P002",
              product_name: "Widget B",
              quantity: 50,
              price_per_unit: 8.0,
              total_price: 400.0,
            },
          ],
        },
        {
          order_date: "2024-03-21",
          supply_date: "2024-03-23",
          supply_status: "Pending",
          payment_status: "Pending",
          balance: 400.0,
          products: [
            {
              product_id: "P001",
              product_name: "Widget A",
              quantity: 100,
              price_per_unit: 5.0,
              total_price: 500.0,
            },
            {
              product_id: "P002",
              product_name: "Widget B",
              quantity: 50,
              price_per_unit: 8.0,
              total_price: 400.0,
            },
            {
              product_id: "P002",
              product_name: "Widget B",
              quantity: 50,
              price_per_unit: 8.0,
              total_price: 400.0,
            },
            {
              product_id: "P002",
              product_name: "Widget B",
              quantity: 50,
              price_per_unit: 8.0,
              total_price: 400.0,
            },
          ],
        },
        {
          order_date: "2024-03-21",
          supply_date: "2024-03-23",
          supply_status: "Pending",
          payment_status: "Pending",
          balance: 400.0,
          products: [
            {
              product_id: "P001",
              product_name: "Widget A",
              quantity: 100,
              price_per_unit: 5.0,
              total_price: 500.0,
            },
            {
              product_id: "P002",
              product_name: "Widget B",
              quantity: 50,
              price_per_unit: 8.0,
              total_price: 400.0,
            },
          ],
        },
        // Add more supplies if needed
      ],
    },
    // Add data for other suppliers similarly
  ];

  // Function to handle supplier selection
  const handleSupplierChange = (event) => {
    const supplierId = parseInt(event.target.value);
    const supplier = sampleData.find(
      (supplier) => supplier.supplier_id === supplierId
    );
    setSelectedSupplier(supplier);
  };

  // Function to handle date search
  const handleDateSearch = () => {
    // Implement your search logic here
    console.log("Searching for date:", searchDate);
  };

  return (
    <div className="m-2 rounded-lg bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Supplier Details</h1>
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="mb-2 sm:mb-0">
          <label htmlFor="supplierSelect" className="mr-2">
            Select Supplier:
          </label>
          <select
            id="supplierSelect"
            onChange={handleSupplierChange}
            className="mr-4 p-2 rounded-lg"
          >
            <option value="">Select a Supplier</option>
            {sampleData.map((supplier) => (
              <option key={supplier.supplier_id} value={supplier.supplier_id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="mr-2 p-2 rounded-lg"
          />
          <button
            onClick={handleDateSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display supply details for selected supplier */}
      {selectedSupplier && (
        <div>
          <h2 className="text-xl font-bold mb-2">
            {selectedSupplier.name} Supply History
          </h2>
          <div className="flex flex-wrap justify-start gap-4">
            {selectedSupplier.supplies.map((supply, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 mb-4 flex-grow-0 flex-shrink-0 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-2">{`Supply Date: ${supply.supply_date}`}</h3>
                <p className="mb-2">{`Order Date: ${supply.order_date}`}</p>
                <p>{`Supply Status: ${supply.supply_status}`}</p>
                <p>{`Payment Status: ${supply.payment_status}`}</p>
                <p>{`Balance: $${supply.balance}`}</p>
                <div className="mt-4 flex flex-wrap">
                  {supply.products.map((product, index) => (
                    <div key={index} className="m-2 p-2 border rounded-lg">
                      <h4 className="text-md font-semibold">
                        {product.product_name}
                      </h4>
                      <p>Quantity: {product.quantity}</p>
                      <p>Price per Unit: ${product.price_per_unit}</p>
                      <p>Total Price: ${product.total_price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
