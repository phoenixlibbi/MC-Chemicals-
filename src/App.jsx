import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/inventory/Inventory";
import Suppliers from "./pages/suppliers/Suppliers";
import Sale from "./pages/Sale/Sale";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Customers from "./pages/customers/Customers";
import AppLayout from "./components/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import Production from "./pages/Production/Production";
// eslint-disable-next-line no-unused-vars
import SupplierDetails from "./pages/suppliers/SupplierDetails";
import AdminDashboard from "./pages/Admin Pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="production" element={<Production />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="supplyDetails" element={<SupplierDetails />} />
          <Route path="customers" element={<Customers />} />
          <Route path="Sale" element={<Sale />} />
        </Route>
        <Route path="adminDashboard" element={<AdminDashboard />} />
        <Route path="logout" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
