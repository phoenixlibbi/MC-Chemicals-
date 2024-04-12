import { useState } from "react";
import reactLogo from "./../../assets/react.svg";
import "./login.css";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout/AppLayout";
export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (loginInfo.username === "admin" && loginInfo.password === "admin") {
      AppLayout(true);
      navigate("/adminDashboard");
    } else navigate("/dashboard");
  }

  return (
    <div className="flex justify-evenly items-center bg-slate-200 h-[100vh]">
      <span className="flex flex-col items-center">
        <img src={reactLogo} alt="Logo" className="logo" />
        <h1 className="text-4xl text-slate-900">MC Chemicals</h1>
      </span>
      <span className=" flex flex-col w-[25vw] h-[60vh] rounded-lg shadow-lg">
        <span className="text-2xl text-slate-900 py-4 text-center">
          Welcome back,
        </span>
        <form onSubmit={handleSubmit} className="flex flex-col px-8 py-6">
          <label htmlFor="username" className="text-lg text-slate-400 mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginInfo.username}
            onChange={(e) =>
              setLoginInfo({
                ...loginInfo,
                username: e.target.value,
              })
            }
            required
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <label
            htmlFor="password"
            className="text-lg text-slate-400 mt-4 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({
                ...loginInfo,
                password: e.target.value,
              })
            }
            required
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 mt-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </span>
    </div>
  );
}
