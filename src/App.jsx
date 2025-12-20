import MainLayout from "./layout/MainLayout";
import "./App.css";
import { useState } from "react";
import AdminLogin from "./components/Auth/Login/Login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn && <AdminLogin>
        <button className="bg-sky-600 text-amber-50 hover:bg-sky-900 hover:shadow-md flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300" onClick={() => setLoggedIn(true)}>Login</button>
      </AdminLogin>}
     
      {loggedIn && (
        <div className="w-full h-screen flex-col items-center justify-center">
          <MainLayout />
        </div>
      )}
    </>
  );
}
