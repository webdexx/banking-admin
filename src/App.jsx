import MainLayout from "./layout/MainLayout";
import "./App.css";
import AdminLogin from "./components/Auth/Login/Login";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import AccountDetails from "./components/AccountDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="admin/*" element={<MainLayout />}>
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="accounts/:id" element={<AccountDetails />} />
        </Route>
      </Routes>
    </>
  );
}
