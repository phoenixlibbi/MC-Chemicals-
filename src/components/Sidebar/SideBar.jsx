import reactlogo from "./../../assets/react.svg";
import NavLinks from "../NavLinks";
import "./sidebar.css";
import { TbReportSearch } from "react-icons/tb";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { PiSignOutLight } from "react-icons/pi";

export default function SideBar(admin = false) {
  return (
    <div className={`bg-slate-100 p-2 h-full ${admin == true ? "hidden" : ""}`}>
      <span className="flex flex-col self-center">
        <img src={reactlogo} alt="MC LOGO" className="h-[80px] logo ml-14" />
        <h1 className="text-3xl font-bold text-slate-700 ml-1 text-center mt-2">
          Mc Chemicals
        </h1>
      </span>
      <ul>
        <NavLinks to="dashboard">
          <div className="inline-block px-2">
            <TbReportSearch />
          </div>
          Dashboard
        </NavLinks>
        <NavLinks to="Sale">
          <div className="inline-block px-2">
            <AiFillDollarCircle />
          </div>
          Sale
        </NavLinks>
        <NavLinks to="production">
          <div className="inline-block px-2">
            <MdOutlineProductionQuantityLimits />
          </div>
          Production
        </NavLinks>
        <NavLinks to="inventory">
          <div className="inline-block px-2">
            <MdOutlineInventory />
          </div>
          Inventory
        </NavLinks>
        <NavLinks to="customers">
          <div className="inline-block px-2">
            <AiOutlineUser />
          </div>
          Customers
        </NavLinks>
        <NavLinks to="suppliers">
          <div className="inline-block px-2">
            <BiSolidUserDetail />
          </div>
          Suppliers
        </NavLinks>
        <div className="inline-block mt-20 w-full">
          <NavLinks to="logout">
            <div className="inline-block px-2">
              <PiSignOutLight />
            </div>
            Log out
          </NavLinks>
        </div>
      </ul>
    </div>
  );
}
