import { useState } from "react";
import AddProductModal from "../../components/modals/AddProductModal";
import CategoryModal from "../../components/modals/CategoryModal";
export default function Inventory() {
  const [Popen, setPOpen] = useState(false);
  const [Copen, setCOpen] = useState(false);

  return (
    <div className="">
      <div className=" bg-slate-100 p-2 rounded-lg m-2">
        <h1 className="p-2 font-bold text-lg">Overall Inventory</h1>
        <div className="flex justify-evenly items-stretch">
          <div className="w-[25%] p-2 rounded-lg bg-white mx-2">
            <h1 className="text-blue-400">Categories</h1>
            <p>14</p>
            <button
              onClick={() => {
                setCOpen(true);
              }}
              className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-blue-400 hover:text-white  transition-colors duration-300"
            >
              View All
            </button>
            <CategoryModal close={() => setCOpen(false)} open={Copen} />
          </div>
          <div className="w-[25%] p-2 rounded-lg bg-white mx-2">
            <h1 className="text-yellow-400">Total Products</h1>
            <p>
              Products: <span>221</span>
            </p>
            <p>
              Worth: <span>$25000</span>
            </p>
          </div>
          <div className="w-[25%] p-2 rounded-lg bg-white mx-2">
            <h1 className="text-purple-400">Top Selling</h1>
            <p>
              Products: <span>221</span>
            </p>
            <p>
              Cost: <span>$25000</span>
            </p>
          </div>
          <div className="w-[25%] p-2 rounded-lg bg-white mx-2">
            <h1 className="text-red-400">Low Stocks</h1>
            <p>
              Low: <span>21</span>
            </p>
            <p>
              Not available: <span>30</span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 rounded-lg bg-slate-100 m-2">
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          Top Selling Stock
        </h1>
        <button
          onClick={() => {
            setPOpen(true);
          }}
          className="inline-block float-right ml-5 my-2 py-1 px-3 border rounded-md font-medium bg-slate-200 hover:bg-blue-400 hover:text-white  transition-colors duration-300"
        >
          Add Products
        </button>
        <AddProductModal close={() => setPOpen(false)} open={Popen} />
        <div className="px-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border-b-2 py-1">Products</th>
                <th className="border-b-2 py-1">Buying Price</th>
                <th className="border-b-2 py-1">Quantity</th>
                <th className="border-b-2 py-1">Threshold Value</th>
                <th className="border-b-2 py-1">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">Out of stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">Out of stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">Out of stock</td>
              </tr>
              <tr>
                <td className="border-b-2 py-1">Hand Wash</td>
                <td className="border-b-2 py-1">$196</td>
                <td className="border-b-2 py-1">
                  43 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">
                  12 <span>Packs</span>
                </td>
                <td className="border-b-2 py-1">In-stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
