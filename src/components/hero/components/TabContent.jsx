import UsersComp from "./UsersComp";
import AccountsComp from "./AccountsComp";

export default function TabContent({
  activeTab,
  cards,
  transactions,
  getStatusColor,
  getStatusIcon,
}) {
    
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
  if (activeTab === 1) return <UsersComp />;
  if (activeTab === 2) return <AccountsComp />;

  if (activeTab === 3) {
    return (
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Card Management</h2>
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
    );
  }

  if (activeTab === 4) {
    return (
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
                    <span className="capitalize">{transaction.status}</span>
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
    );
  }

  return null;
}
