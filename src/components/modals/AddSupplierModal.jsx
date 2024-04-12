/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function AddSupplierModal({ close, open }) {
  const [formData, setFormData] = useState({
    supplierId: "",
    name: "",
    address: "",
    contact: "",
    products: [],
  });

  const [newProduct, setNewProduct] = useState({
    product_name: "",
    price_per_unit: "",
  });

  const addProduct = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      products: [...prevFormData.products, newProduct],
    }));
    setNewProduct({ product_name: "", price_per_unit: "" });
    alert("Product added successfully!\n\n");
  };

  const removeProduct = (index) => {
    const updatedProducts = [...formData.products];
    updatedProducts.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      products: updatedProducts,
    }));
  };

  const handleProductNameChange = (e) => {
    setNewProduct({
      ...newProduct,
      product_name: e.target.value,
    });
  };

  const handlePricePerUnitChange = (e) => {
    setNewProduct({
      ...newProduct,
      price_per_unit: e.target.value,
    });
  };

  const discardChanges = () => {
    setFormData({
      supplierId: "",
      name: "",
      address: "",
      contact: "",
      products: [],
    });
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
        className={`absolute w-[22%] h-[85%] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl text-slate-500 font-semibold py-2 inline-block">
          Add New Supplier
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
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Supplier Name"
              />
            </div>

            <div className="flex">
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter address"
              />
            </div>

            <div className="flex">
              <input
                type="text"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter contact"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="productName"
                className="inline-block text-gray-700 text-sm font-bold mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                id="productName"
                value={newProduct.product_name}
                onChange={handleProductNameChange}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product name"
              />

              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              >
                Price per Unit
              </label>
              <input
                type="number"
                name="price_per_unit"
                id="price"
                value={newProduct.price_per_unit}
                onChange={handlePricePerUnitChange}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price per unit"
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
              Add Supplier
            </button>
          </div>
        </form>
      </div>
      {/* Display added products */}
      <div
        className={`mt-[3.2rem] bg-white w-[20%] rounded-lg p-4 ml-[64%] inset-1 ${
          formData.products.length === 0 ? "hidden" : "block"
        }`}
      >
        <h2 className="text-gray-700 text-lg font-bold mb-2">Added Products</h2>
        {formData.products.map((product, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <span>{product.product_name}</span>
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
