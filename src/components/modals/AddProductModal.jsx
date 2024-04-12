import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddProductModal({ close, open }) {
  const [formData, setFormData] = useState({
    productName: "",
    productId: "",
    category: "",
    buyingPrice: "",
    quantity: "",
    unit: "",
    expiryDate: "",
    thresholdValue: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const discardChanges = () => {
    setFormData({
      productName: "",
      productId: "",
      category: "",
      buyingPrice: "",
      quantity: "",
      unit: "",
      expiryDate: "",
      thresholdValue: "",
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
        className={`absolute w-[40%] h-[75%] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          Add New Product
        </h1>
        <button
          onClick={close}
          className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-red-400 hover:text-white  transition-colors duration-300"
        >
          close
        </button>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-3 bg-white rounded-lg"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="pName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                id="pName"
                value={formData.productName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label
                htmlFor="pId"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Product ID
              </label>
              <input
                type="text"
                name="productId"
                id="pId"
                value={formData.productId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product ID"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="grocery">Grocery</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="bPrice"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Buying Price
              </label>
              <input
                type="number"
                name="buyingPrice"
                id="bPrice"
                value={formData.buyingPrice}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter buying price"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter quantity"
              />
            </div>

            <div>
              <label
                htmlFor="unit"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Unit
              </label>
              <input
                type="text"
                name="unit"
                id="unit"
                value={formData.unit}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter unit"
              />
            </div>

            <div>
              <label
                htmlFor="threshold"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Threshold
              </label>
              <input
                type="number"
                name="thresholdValue"
                id="threshold"
                value={formData.thresholdValue}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter threshold"
              />
            </div>

            <div>
              <label
                htmlFor="supplier"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                id="supplier"
                value={formData.supplier}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter supplier"
              />
            </div>
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
