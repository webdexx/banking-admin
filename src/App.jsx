import MainLayout from "./layout/MainLayout";
import "./App.css";
import AdminLogin from "./components/Auth/Login/Login";
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<AdminLogin />} />

        <Route path="admin/*" element={<MainLayout />} />
      </Routes>
    </>
  );
}
