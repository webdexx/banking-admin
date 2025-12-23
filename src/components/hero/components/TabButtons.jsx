import { LuUsers, LuBuilding2, LuCreditCard, LuArrowLeftRight } from "react-icons/lu";

export default function TabButtons({ activeTab, onChange }) {
  const tabs = [
      { id: 1, label: "Users", icon: LuUsers },
      { id: 2, label: "Accounts", icon: LuBuilding2 },
      { id: 3, label: "Cards", icon: LuCreditCard },
      { id: 4, label: "Transactions", icon: LuArrowLeftRight },
    ];

  return (
    <div className="flex space-x-2 bg-white/10 backdrop-blur-sm p-1.5 rounded-xl border border-white/20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-white text-sky-900 shadow-lg"
              : "text-white hover:backdrop-blur-sm"
          }`}
        >
          <tab.icon className="w-5 h-5" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
