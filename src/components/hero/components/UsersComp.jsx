import { useEffect } from "react";
import {
    LuUsers,
    LuCircleCheck,
    LuFilter,
    LuClock,
    LuCircleAlert,
    LuClipboardX,
    LuSquarePen
} from "react-icons/lu";
import { useStore } from "../../../stores/store.js";

export default function UsersComp() {
    const { users, fetchUsers } = useStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const getAccountStatus = (isActive) => {
        return isActive ? "active" : "suspended";
    };

    const getKycStatus = (flag) => {
        return flag.toLowerCase(); // "APPROVED" → "approved"
    };

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

    return (

        <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                    User Management
                </h2>
                <button className="px-5 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium">
                    Add New User
                </button>
            </div>
            <div className="space-y-3">
                {users.map((user) => {
                    const accountStatus = getAccountStatus(user.isActive);
                    const kycStatus = getKycStatus(user.flag);
                    return (
                        <div
                            key={user._id}
                            className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:shadow-md group"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {user.firstName.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 text-lg">
                                        {`${user.firstName} ${user.lastName}`}
                                    </h3>
                                    <p className="text-slate-500 text-sm">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="text-right">
                                    <p className="text-xs text-slate-500 mb-1">
                                        Account Status
                                    </p>
                                    <span
                                        className={`inline-flex items-center space-x-1 mx-auto px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                            accountStatus
                                        )}`}
                                    >
                                        {getStatusIcon(accountStatus)}
                                        <span className="capitalize">{accountStatus}</span>
                                    </span>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-slate-500 mb-1">
                                        KYC Status
                                    </p>
                                    <span
                                        className={`inline-flex items-center space-x-1 m px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                            kycStatus
                                        )}`}
                                    >
                                        {getStatusIcon(kycStatus)}
                                        <span className="capitalize">{kycStatus}</span>
                                    </span>
                                </div>
                                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                    <LuSquarePen className="w-5 h-5 text-slate-600" />
                                </button>
                            </div>
                        </div>)
                })}
            </div>
        </div>

    )
}

