import { useState, useEffect } from "react";
import {
  LuBuilding2,
  LuUsers,
  LuCreditCard,
  LuArrowLeftRight,
  LuTrendingUp,
  LuCircleCheck,
  LuClock,
  LuSearch,
  LuFilter,
  LuCircleAlert,
  LuEllipsisVertical,
  LuEye,
  LuClipboardX,
} from "react-icons/lu";
import { useStore } from "../../stores/store.js";

import UsersComp from "./components/UsersComp.jsx";
import AccountsComp from "./components/AccountsComp.jsx";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { users, fetchUsers } = useStore();
  const { accounts, fetchAccounts } = useStore();

  useEffect(() => {
    fetchUsers();
    fetchAccounts();
  }, [fetchUsers, fetchAccounts]);

  const stats = [
    { label: "Total Users", value: users.length, change: "+10%", icon: LuUsers },
    {
      label: "Active Accounts",
      value: accounts.length,
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

  const cards = [
    {
      id: 1,
      user: "Sarah Johnson",
      type: "Platinum",
      last4: "3847",
      status: "active",
      expires: "12/26",
    },
    {
      id: 2,
      user: "Michael Chen",
      type: "Gold",
      last4: "9201",
      status: "active",
      expires: "08/27",
    },
    {
      id: 3,
      user: "Emma Williams",
      type: "Platinum",
      last4: "5632",
      status: "suspended",
      expires: "03/26",
    },
    {
      id: 4,
      user: "James Rodriguez",
      type: "Silver",
      last4: "7418",
      status: "blocked",
      expires: "11/25",
    },
  ];

  const transactions = [
    {
      id: 1,
      user: "Sarah Johnson",
      amount: "$1,234.50",
      type: "Transfer",
      status: "completed",
      time: "2 mins ago",
    },
    {
      id: 2,
      user: "Michael Chen",
      amount: "$450.00",
      type: "Payment",
      status: "pending",
      time: "15 mins ago",
    },
    {
      id: 3,
      user: "Emma Williams",
      amount: "$2,890.00",
      type: "Withdrawal",
      status: "completed",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: "James Rodriguez",
      amount: "$125.00",
      type: "Purchase",
      status: "failed",
      time: "3 hours ago",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
      case "approved":
      case "completed":
        return "bg-emerald-100 text-emerald-700";
      case "pending":
        return "bg-amber-100 text-amber-700";
      case "suspended":
      case "frozen":
      case "blocked":
      case "rejected":
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
      case "approved":
      case "completed":
        return <LuCircleCheck className="w-4 h-4" />;
      case "pending":
        return <LuClock className="w-4 h-4" />;
      case "suspended":
      case "frozen":
      case "blocked":
      case "rejected":
      case "failed":
        return <LuCircleAlert className="w-4 h-4" />;
      default:
        return <LuClipboardX className="w-4 h-4" />;
    }
  };

  const tabs = [
    { id: 1, label: "Users", icon: LuUsers },
    { id: 2, label: "Accounts", icon: LuBuilding2 },
    { id: 3, label: "Cards", icon: LuCreditCard },
    { id: 4, label: "Transactions", icon: LuArrowLeftRight },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
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
                    ? "bg-white text-sky-900 shadow-lg scale-100"
                    : "text-white hover:backdrop-blur-sm"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Search and Filter Bar */}
          <div className="bg-gradient-to-t from-stone-200 to-stone-300 px-8 py-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-md relative">
                <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={`Search ${tabs
                    .find((t) => t.id === activeTab)
                    ?.label.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="ml-4 flex items-center space-x-2 px-5 py-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors">
                <LuFilter className="w-5 h-5 text-slate-600" />
                <span className="font-medium text-slate-700">Filters</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 1 && (
                  <UsersComp />
            )}

            {activeTab === 2 && (
              <AccountsComp />
            )}

            {activeTab === 3 && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">
                    Card Management
                  </h2>
                  <button className="px-5 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium">
                    Issue New Card
                  </button>
                </div>
                <div className="space-y-3">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:shadow-md group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                          <LuCreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-lg">
                            {card.user}
                          </h3>
                          <p className="text-slate-500 text-sm">
                            {card.type} Card • **** {card.last4}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-xs text-slate-500 mb-1">Expires</p>
                          <p className="text-sm font-semibold text-slate-700">
                            {card.expires}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500 mb-1">Status</p>
                          <span
                            className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              card.status
                            )}`}
                          >
                            {getStatusIcon(card.status)}
                            <span className="capitalize">{card.status}</span>
                          </span>
                        </div>
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                          <LuEllipsisVertical className="w-5 h-5 text-slate-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">
                    Transaction Monitoring
                  </h2>
                  <button className="px-5 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium flex items-center space-x-2">
                    <LuEye className="w-5 h-5" />
                    <span>View All</span>
                  </button>
                </div>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:shadow-md group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <LuArrowLeftRight className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-lg">
                            {transaction.user}
                          </h3>
                          <p className="text-slate-500 text-sm">
                            {transaction.type} • {transaction.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-xs text-slate-500 mb-1">Amount</p>
                          <p className="text-xl font-bold text-slate-800">
                            {transaction.amount}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500 mb-1">Status</p>
                          <span
                            className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              transaction.status
                            )}`}
                          >
                            {getStatusIcon(transaction.status)}
                            <span className="capitalize">
                              {transaction.status}
                            </span>
                          </span>
                        </div>
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                          <LuEllipsisVertical className="w-5 h-5 text-slate-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
