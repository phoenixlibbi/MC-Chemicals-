/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../index.css";
export default function NavLinks({ children, to }) {
  return (
    <li className="mt-4 hover:cursor-pointer rounded-lg text-semibold bg-slate-200 flex justify-start px-2 items-center text-lg py-1 text-slate-900 font-semibold hover:text-white hover:bg-blue-400 mx-2 w-[90%]">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
