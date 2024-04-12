import salesIcon from "./../../assets/icons/sales.png";
import profitIcon from "./../../assets/icons/profits.png";
import costsIcon from "./../../assets/icons/costs.png";
import revenueIcon from "./../../assets/icons/revenue.png";
import purchaseIcon from "./../../assets/icons/purchase.png";
import cancelIcon from "./../../assets/icons/cancel.png";
import exchangeIcon from "./../../assets/icons/exchange.png";
import suppliersIcon from "./../../assets/icons/suppliers.png";
import categoriesIcon from "./../../assets/icons/categories.png";
import recPkg from "./../../assets/icons/rec_pkg.png";
import items from "./../../assets/icons/items.png";
import BarAnimation from "./../../components/barChart";
import PieChartWithCustomizedLabel from "../../components/YesterdayPieChart";
import { useState } from "react";
import TopSellingModal from "./../../components/modals/TopSellingModal";
import LowQuantityModal from "../../components/modals/LowQuantityModal";
import Button from "../../components/Button";

export default function Dashboard() {
  const [Topopen, setTopOpen] = useState(false);
  const [Lowopen, setLowOpen] = useState(false);

  return (
    <div className="grid grid-cols-[5fr_3fr] gap-4 p-5 bg-white">
      <div className="bg-slate-100 rounded-lg row-[span_12_/_span_12]">
        <span className="text-xl p-3 inline-block font-semibold ">
          Sales Overview
        </span>
        <div className="flex justify-evenly items-stretch">
          <div className="basis-1/5 h-[7.3rem]">
            <img src={salesIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>$234</span>
              <span>Sales</span>
            </div>
          </div>
          <div className="basis-1/5 h-[7.3rem]">
            <img src={profitIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>$234</span>
              <span>Profit</span>
            </div>
          </div>
          <div className="basis-1/5 h-[7.3rem]">
            <img src={revenueIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>$234</span>
              <span>Revenue</span>
            </div>
          </div>
          <div className="basis-1/5 h-[7.3rem]">
            <img src={costsIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>$234</span>
              <span>Cost</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg row-[span_12_/_span_12]">
        <span className="text-xl p-3 inline-block font-semibold ">
          Inventory Summary
        </span>
        <div className="flex justify-evenly">
          <div className="basis-1/2 h-[7.3rem]">
            <img src={items} alt="sales" className="h-10 ml-[5.5rem] mt-2" />
            <div className="flex flex-col m-3 text-lg text-center">
              <span>$234</span>
              <span>Total Items</span>
            </div>
          </div>
          <div className="basis-1/1 h-[7.3rem]">
            <img src={recPkg} alt="sales" className="h-10 ml-12 mt-2" />
            <div className="flex flex-col m-3 text-lg text-center">
              <span>$234</span>
              <span>To be received</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg row-[span_12_/_span_12]">
        <span className="text-xl p-3 inline-block font-semibold ">
          Purchase Overview
        </span>
        <div className="flex justify-evenly">
          <div className="basis-1/5 h-[7.3rem]">
            <img src={purchaseIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>34</span>
              <span>Purchase</span>
            </div>
          </div>
          <div className="basis-1/5 h-[7.3rem]">
            <img src={costsIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>$2234</span>
              <span>Cost</span>
            </div>
          </div>
          <div className="basis-1/5 h-[7.3rem]">
            <img src={cancelIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>4</span>
              <span>Cancel</span>
            </div>
          </div>
          <div className="basis-1/5 h-[7.3rem]">
            <img src={exchangeIcon} alt="sales" className="h-10 ml-14 mt-2" />
            <div className="flex justify-around m-4 text-lg">
              <span>$1234</span>
              <span>return</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg row-[span_12_/_span_12]">
        <span className="text-xl p-3 inline-block font-semibold ">
          Products Summary
        </span>
        <div className="flex justify-evenly items-stretch">
          <div className="basis-1/1 h-[7.3rem]">
            <img
              src={categoriesIcon}
              alt="sales"
              className="h-10 ml-[4.2rem] mt-2"
            />
            <div className="flex  flex-col text-center justify-around m-4 text-lg">
              <span>14</span>
              <span>No. of Categories</span>
            </div>
          </div>
          <div className="basis-1/1 h-[7.3rem]">
            <img src={suppliersIcon} alt="sales" className="h-14 ml-[3.5rem]" />
            <div className="flex flex-col text-center  justify-around m-3 text-lg">
              <span>34</span>
              <span>No. of Suppliers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-10 row-[span_12_/_span_12]">
        <h1 className="text-xl text-slate-500 font-semibold pl-5 pb-4">
          Monthly Sale & Purchase
        </h1>
        <BarAnimation />
      </div>

      <div className="bg-slate-100 rounded-lg row-[span_6_/_span_6]">
        <h1 className="text-xl text-slate-500 font-semibold pt-5 pl-5">
          Yesterday Sale
        </h1>
        <PieChartWithCustomizedLabel />
      </div>
      <div className="bg-slate-100 rounded-lg row-[span_10_/_span_10]">
        <span className="text-xl p-3 inline-block font-semibold ">Balance</span>
        <div className="flex justify-evenly items-stretch">
          <div className="basis-1/1 h-[7.3rem]">
            <img
              src={categoriesIcon}
              alt="sales"
              className="h-10 ml-[2.8rem] mt-2"
            />
            <div className="flex  flex-col text-center justify-around m-4 text-lg">
              <span>14</span>
              <span>Net Payable</span>
            </div>
          </div>
          <div className="basis-1/1 h-[7.3rem]">
            <img src={suppliersIcon} alt="sales" className="h-14 ml-[3.5rem]" />
            <div className="flex flex-col text-center  justify-around m-3 text-lg">
              <span>34</span>
              <span>Net Receiveable</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg row-[span_12_/_span_12] p-4">
        <h1 className="text-xl text-slate-500 font-semibold pl-5 py-3 inline-block">
          Top Selling Stock
        </h1>
        <Button set={setTopOpen} type="primary">
          View All
        </Button>

        <TopSellingModal close={() => setTopOpen(false)} open={Topopen} />
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border-b-2 py-1">Name</th>
              <th className="border-b-2 py-1">Sold Quantity</th>
              <th className="border-b-2 py-1">Remaining Quantity</th>
              <th className="border-b-2 py-1">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b-2 py-1">The Sliding Mr. Bones</td>
              <td className="border-b-2 py-1">Malcolm Lockyer</td>
              <td className="border-b-2 py-1">1961</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">The Eagles</td>
              <td className="border-b-2 py-1">1972</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Shining Star</td>
              <td className="border-b-2 py-1">Earth, Wind, and Fire</td>
              <td className="border-b-2 py-1">1975</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">The Eagles</td>
              <td className="border-b-2 py-1">1972</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">The Eagles</td>
              <td className="border-b-2 py-1">1972</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
            <tr>
              <td className="border-b-2 py-1">Witchy Woman</td>
              <td className="border-b-2 py-1">The Eagles</td>
              <td className="border-b-2 py-1">1972</td>
              <td className="border-b-2 py-1">$196</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-slate-100 rounded-lg row-[span_8_/_span_8] p-3">
        <h1 className="text-xl text-slate-500 font-semibold py-3 inline-block">
          Low Quantity Stocks
        </h1>

        <Button set={setLowOpen} type="primary">
          View All
        </Button>
        <LowQuantityModal close={() => setLowOpen(false)} open={Lowopen} />
        <div className="flex self-center">
          <div className="mr-auto">
            <div className="text-md font-semibold">Hand Wash</div>
            <div className="">Remaining Quantity: 10 Packets</div>
          </div>
          <div className="py-2 pr-4">
            <button className="border rounded-xl bg-red-200 px-1 py-0">
              Low
            </button>
          </div>
        </div>
        <div className="flex self-center">
          <div className="mr-auto">
            <div className="text-md font-semibold">Hand Wash</div>
            <div className="">Remaining Quantity: 10 Packets</div>
          </div>
          <div className="py-2 pr-4">
            <button className="border rounded-xl bg-red-200 px-1 py-0">
              Low
            </button>
          </div>
        </div>
        <div className="flex self-center">
          <div className="mr-auto">
            <div className="text-md font-semibold">Hand Wash</div>
            <div className="">Remaining Quantity: 10 Packets</div>
          </div>
          <div className="py-2 pr-4">
            <button className="border rounded-xl bg-red-200 px-1 py-0">
              Low
            </button>
          </div>
        </div>
        <div className="flex self-center">
          <div className="mr-auto">
            <div className="text-md font-semibold">Hand Wash</div>
            <div className="">Remaining Quantity: 10 Packets</div>
          </div>
          <div className="py-2 pr-4">
            <button className="border rounded-xl bg-red-200 px-1 py-0">
              Low
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
