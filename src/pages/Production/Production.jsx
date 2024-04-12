/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AddProductModal from "../../components/modals/AddProductModal";

export default function Production() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [customerProducts, setCustomerProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  // Sample data for products
  const products = [
    {
      id: 1,
      name: "Hydrochloric Acid",
      defaultPrice: 10.99,
      quantity: 50, // in liters
      unit: "liters",
    },
    {
      id: 2,
      name: "Sodium Hydroxide",
      defaultPrice: 8.49,
      quantity: 100, // in kg
      unit: "kg",
    },
    {
      id: 3,
      name: "Acetic Acid",
      defaultPrice: 15.99,
      quantity: 25, // in liters
      unit: "liters",
    },
    {
      id: 4,
      name: "Sulfuric Acid",
      defaultPrice: 5.99,
      quantity: 30, // in liters
      unit: "liters",
    },
    {
      id: 5,
      name: "Ethanol",
      defaultPrice: 12.99,
      quantity: 50, // in liters
      unit: "liters",
    },
    {
      id: 6,
      name: "Methanol",
      defaultPrice: 9.99,
      quantity: 40, // in liters
      unit: "liters",
    },
    {
      id: 7,
      name: "Ammonium Hydroxide",
      defaultPrice: 18.99,
      quantity: 15, // in liters
      unit: "liters",
    },
    {
      id: 8,
      name: "Potassium Hydroxide",
      defaultPrice: 6.49,
      quantity: 20, // in kg
      unit: "kg",
    },
    {
      id: 9,
      name: "Nitric Acid",
      defaultPrice: 11.99,
      quantity: 35, // in liters
      unit: "liters",
    },
    {
      id: 10,
      name: "Hydrogen Peroxide",
      defaultPrice: 7.99,
      quantity: 60, // in liters
      unit: "liters",
    },
  ];

  const handleProductChange = (e) => {
    const productId = e.target.value;
    setSelectedProduct(productId);
    const selectedProductData = products.find(
      (product) => product.id === parseInt(productId)
    );
    setPrice(selectedProductData ? selectedProductData.defaultPrice : "");
    setUnit(selectedProductData ? selectedProductData.unit : ""); // Set unit based on selected product
    setQuantity(selectedProductData ? selectedProductData.quantity : ""); // Set default quantity based on selected product
  };

  const handleProduction = () => {
    setOpen(true);
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

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...customerProducts];
    const removedProduct = updatedProducts.splice(index, 1)[0];
    setCustomerProducts(updatedProducts);
    setTotalPrice(
      totalPrice -
        parseFloat(removedProduct.price) * parseInt(removedProduct.quantity)
    );
  };

  const handleDiscard = () => {
    setCustomerProducts([]);
    setTotalPrice(0);
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
    <div className={`flex`}>
      <div className="h-[97%] bg-slate-100 w-[50%] m-3 rounded-lg">
        <h1 className="text-2xl font-semibold text-blue-400 pt-3 px-3">
          Daily Sale
        </h1>
        <form onSubmit={handleSubmit} className="p-5">
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
        className={`w-[40%] ${
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
                <div className="flex flex-col justify-start">
                  <span className="font-semibold text-lg text-blue-600">
                    {product.productName}
                  </span>
                  <div className="flex flex-col items-start">
                    <div>
                      <span className="text-blue-400">Quantity:</span>{" "}
                      {product.quantity} {product.unit}
                    </div>
                    <div>
                      <span className="text-purple-500">Price: </span>${" "}
                      {parseFloat(product.price) * parseInt(product.quantity)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveProduct(index)}
                  className="text-red-500 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-3 flex justify-between items-center text-blue-500 font-bold text-lg">
            <div>Total Price: ${totalPrice.toFixed(2)}</div>
            <button
              onClick={handleProduction}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Make Product
            </button>
            <AddProductModal
              open={open}
              close={() => {
                setOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
