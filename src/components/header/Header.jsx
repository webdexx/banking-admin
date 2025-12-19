import { LuSearch, LuBell, LuSettings2 } from "react-icons/lu";

export default function Header() {
    return (
        <>
            <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-600 to-sky-900 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">AdminPro</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <LuSearch className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <LuBell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <LuSettings2 className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer">
                A
              </div>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}