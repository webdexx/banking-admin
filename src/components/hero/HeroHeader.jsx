import {
  LuUsers,
  LuBuilding2,
  LuCreditCard,
  LuArrowLeftRight,
} from "react-icons/lu";

import { useStore } from "zustand";

export default function HeroHeader() {
  const users = useStore((s) => s.users);
  const accounts = useStore((s) => s.accounts);

  const stats = [
    {
      label: "Total Users",
      value: users.length,
      change: "+12%",
      icon: LuUsers,
    },
    {
      label: "Active Accounts",
      value: "45,231",
      change: "+8%",
      icon: LuBuilding2,
    },
    {
      label: "Cards Issued",
      value: "38,492",
      change: "+15%",
      icon: LuCreditCard,
    },
    {
      label: "Transactions Today",
      value: "89,234",
      change: "+23%",
      icon: LuArrowLeftRight,
    },
  ];

  const tabs = [
    { id: 1, label: "Users", icon: LuUsers },
    { id: 2, label: "Accounts", icon: LuBuilding2 },
    { id: 3, label: "Cards", icon: LuCreditCard },
    { id: 4, label: "Transactions", icon: LuArrowLeftRight },
  ];

  return (
    <div className="bg-gradient-to-t from-sky-600 to-sky-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-blue-100 text-lg">
              Manage users, accounts, cards, and monitor transactions in
              real-time
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200">Last login</p>
              <p className="text-sm font-semibold">Today, 09:24 AM</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center text-sm font-semibold text-emerald-200">
                  <LuTrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-2 bg-white/10 backdrop-blur-sm p-1.5 rounded-xl border border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-sky-900 shadow-lg scale-105"
                  : "text-white hover:bg-cyan-600/70"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
