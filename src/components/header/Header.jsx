import { LuSearch, LuBell, LuSettings2, LuShieldCheck } from "react-icons/lu";
import { useStore } from "../../stores/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GlobalSearch from "../GlobalSearch";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const {
    adminName,
    logout,
  } = useStore();

  const handleLogout = () => {
    const result = logout();

    console.clear();

    if (result) {
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-600 to-sky-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  <LuShieldCheck size={22} />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  {adminName}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <GlobalSearch />
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <LuBell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <LuSettings2 className="w-5 h-5 text-gray-600" />
              </button>
              <div className="relative">
                <div
                  className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  A
                </div>

                {isOpen && (
                  <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      Logout
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors border-t border-gray-100">
                      Settings
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
