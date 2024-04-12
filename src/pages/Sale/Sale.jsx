/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Sale() {
  const [customerType, setCustomerType] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [customerProducts, setCustomerProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // Sample data for existing customers
  const existingCustomers = [
    { id: 1, name: "Customer 1", type: "Regular" },
    { id: 2, name: "Customer 2", type: "Existing" },
    { id: 3, name: "Customer 3", type: "Regular" },
    { id: 4, name: "Customer 4", type: "Regular" },
    { id: 5, name: "Customer 5", type: "Existing" },
    { id: 6, name: "Customer 6", type: "Regular" },
    { id: 7, name: "Customer 7", type: "Existing" },
    { id: 8, name: "Customer 8", type: "Regular" },
    { id: 9, name: "Customer 9", type: "Regular" },
    { id: 10, name: "Customer 10", type: "Existing" },
  ];

  // Sample data for products
  const products = [
    {
      id: 1,
      name: "Product 1",
      defaultPrice: 10.99,
      units: ["kg", "liter", "bottle", "tank"],
    },
    {
      id: 2,
      name: "Product 2",
      defaultPrice: 8.49,
      units: ["kg", "box", "piece"],
    },
    {
      id: 3,
      name: "Product 3",
      defaultPrice: 15.99,
      units: ["kg", "liter", "bottle"],
    },
    {
      id: 4,
      name: "Product 4",
      defaultPrice: 5.99,
      units: ["kg", "box", "piece"],
    },
    {
      id: 5,
      name: "Product 5",
      defaultPrice: 12.99,
      units: ["kg", "liter", "bottle"],
    },
    {
      id: 6,
      name: "Product 6",
      defaultPrice: 9.99,
      units: ["kg", "box", "piece"],
    },
    {
      id: 7,
      name: "Product 7",
      defaultPrice: 18.99,
      units: ["kg", "liter", "bottle", "tank"],
    },
    {
      id: 8,
      name: "Product 8",
      defaultPrice: 6.49,
      units: ["kg", "box", "piece"],
    },
    {
      id: 9,
      name: "Product 9",
      defaultPrice: 11.99,
      units: ["kg", "liter", "bottle"],
    },
    {
      id: 10,
      name: "Product 10",
      defaultPrice: 7.99,
      units: ["kg", "box", "piece"],
    },
  ];

  const handleCustomerTypeChange = (e) => {
    setCustomerType(e.target.value);
    setCustomerName(""); // Reset customer name when changing customer type
  };

  const handleProductChange = (e) => {
    const productId = e.target.value;
    setSelectedProduct(productId);
    const selectedProductData = products.find(
      (product) => product.id === parseInt(productId)
    );
    setPrice(selectedProductData ? selectedProductData.defaultPrice : "");
    setUnit(""); // Reset unit when changing product
  };

  const handleAddProduct = () => {
    const productData = {
      productId: selectedProduct,
      productName: products.find(
        (product) => product.id === parseInt(selectedProduct)
      ).name,
      quantity: quantity,
      unit: unit,
      price: price,
    };
    setCustomerProducts([...customerProducts, productData]);
    setTotalPrice(totalPrice + parseFloat(price) * parseInt(quantity));
    setQuantity("");
    setUnit("");
    setPrice("");
    setSelectedProduct("");
  };

  const handleDiscard = () => {
    setCustomerProducts([]);
    setTotalPrice(0);
    setCustomerType("");
    setCustomerName("");
    setSelectedProduct("");
    setQuantity("");
    setUnit("");
    setPrice("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };
  return (
    <div className={`flex ${products.length === 0} ? '' : 'justify-evenly'`}>
      <div className="h-[97%] bg-slate-100 w-[50%] m-3 rounded-lg">
        <h1 className="text-2xl font-semibold text-blue-400 pt-3 px-3">
          Daily Sale
        </h1>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="customerType"
                className="block mb-2 font-semibold"
              >
                Customer Type:
              </label>
              <select
                id="customerType"
                value={customerType}
                onChange={handleCustomerTypeChange}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              >
                <option value="Regular">Regular</option>
                <option value="Existing">Existing</option>
              </select>
            </div>
            {customerType === "Existing" ? (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="customerName"
                  className="block mb-2 font-semibold"
                >
                  Customer Name:
                </label>
                <select
                  id="customerName"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    setCustomerProducts([]);
                    setTotalPrice(0);
                    setSelectedProduct("");
                    setQuantity("");
                    setUnit("");
                    setPrice("");
                  }}
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                >
                  <option value="">Select</option>
                  {existingCustomers
                    .filter((customer) => customer.type === customerType)
                    .map((customer) => (
                      <option key={customer.id} value={customer.name}>
                        {customer.name}
                      </option>
                    ))}
                </select>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleDiscard}
                className="bg-blue-500 h-9 inline-block hover:bg-blue-700 mt-8 ml-2  text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
              >
                New Customer
              </button>
            )}
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="product" className="block mb-2 font-semibold">
                Product:
              </label>
              <select
                id="product"
                value={selectedProduct}
                onChange={handleProductChange}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              >
                <option value="">Select</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="quantity" className="block mb-2 font-semibold">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                placeholder="Enter Quantity"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="unit" className="block mb-2 font-semibold">
                Unit:
              </label>
              <select
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              >
                <option value="">Select</option>
                {selectedProduct &&
                  products
                    .find((product) => product.id === parseInt(selectedProduct))
                    .units.map((unitOption) => (
                      <option key={unitOption} value={unitOption}>
                        {unitOption}
                      </option>
                    ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="price" className="block mb-2 font-semibold">
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                placeholder="Enter Price"
              />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <button
                type="button"
                onClick={handleAddProduct}
                className="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Product
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Total Price:</label>
            <span className="shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100">
              Total Price: ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleDiscard}
              type="button"
              className="bg-gray-200 hover:bg-red-400 hover:text-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Discard
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Print
            </button>
          </div>
        </form>
      </div>
      <div
        className={` w-[40%] ${
          customerProducts.length === 0 ? "hidden" : "block"
        }`}
      >
        <h1 className="text-2xl font-semibold text-blue-400 py-3 px-3">
          Products
        </h1>
        <div className="bg-white rounded-lg shadow-md p-5">
          {customerProducts.map((product, index) => (
            <div key={index} className="border-b border-gray-200 py-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">
                  {product.productName}
                </span>
                <div className="flex flex-col items-end">
                  <span className="text-gray-600 mb-1">
                    Quantity: {product.quantity}
                  </span>
                  <span className="text-gray-600 mb-1">
                    Unit: {product.unit}
                  </span>
                  <span className="text-blue-500">
                    Price: $
                    {parseFloat(product.price) * parseInt(product.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
