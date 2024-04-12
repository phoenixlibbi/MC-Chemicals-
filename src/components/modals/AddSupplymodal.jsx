/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function AddSupplyModal({ close, open }) {
  const [formData, setFormData] = useState({
    supplierId: "",
    products: [],
  });

  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const suppliers = [
    { id: "1", name: "Supplier 1" },
    { id: "2", name: "Supplier 2" },
    { id: "3", name: "Supplier 3" },
  ];

  const addProduct = () => {
    if (selectedProduct && quantity) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        products: [
          ...prevFormData.products,
          { product_name: selectedProduct, quantity: quantity },
        ],
      }));
      setSelectedProduct("");
      setQuantity("");
      alert("Product added successfully!\n\n");
    } else {
      alert("Please select a product and enter quantity.");
    }
  };

  const discardChanges = () => {
    setFormData({
      supplierId: "",
      products: [],
    });
  };

  const removeProduct = (index) => {
    const updatedProducts = [...formData.products];
    updatedProducts.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      products: updatedProducts,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div
      className={`fixed transition-all duration-300 w-full h-full ${
        open ? "visible bg-black/20" : "invisible"
      } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={`absolute w-[22%] h-[65%] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl text-slate-500 font-semibold py-2 inline-block">
          Add New Supply
        </h1>
        <button
          onClick={close}
          className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-red-400 hover:text-white  transition-colors duration-300"
        >
          Close
        </button>

        <form className="max-w-md mx-auto p-3 bg-white rounded-lg">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex">
              <label
                htmlFor="supplierSelect"
                className="w-full text-gray-700 text-sm font-bold mb-2"
              >
                Select Supplier
              </label>
              <select
                id="supplierSelect"
                value={formData.supplierId}
                onChange={(e) =>
                  setFormData({ ...formData, supplierId: e.target.value })
                }
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.id} value={supplier.id}>
                    {supplier.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="productSelect"
                className="inline-block text-gray-700 text-sm font-bold mb-2"
              >
                Select Product
              </label>
              <select
                id="productSelect"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                {/* Render options dynamically based on your products list */}
                {/* Example: */}
                <option value="Product 1">Product 1</option>
                <option value="Product 2">Product 2</option>
                <option value="Product 3">Product 3</option>
              </select>

              <label
                htmlFor="quantity"
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter quantity"
              />
            </div>
            <button
              type="button"
              onClick={addProduct}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={discardChanges}
              className="bg-gray-200 hover:bg-red-400 hover:text-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Discard
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Done
            </button>
          </div>
        </form>
      </div>
      {/* Display added products */}
      <div
        className={`mt-[7.1rem] bg-white w-[20%] rounded-lg p-4 ml-[64%] inset-1 ${
          formData.products.length === 0 ? "hidden" : "block"
        }`}
      >
        <h2 className="text-gray-700 text-lg font-bold mb-2">Added Products</h2>
        {formData.products.map((product, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <span>{product.product_name}</span>
            <span>Quantity: {product.quantity}</span>
            <button
              type="button"
              onClick={() => removeProduct(index)}
              className="text-red-600 ml-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
