import { useState, useEffect } from "react";
import {
    LuCircleCheck,
    LuFilter,
    LuClock,
    LuCircleAlert,
    LuClipboardX,
    LuSquarePen,
    LuBuilding2,
    LuDot

} from "react-icons/lu";

import { GoDotFill } from "react-icons/go";

import { useStore } from "../../../stores/store.js";

export default function AccountsComp() {
    const { accounts, fetchAccounts } = useStore();

    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);

    const getAccountStatus = (status) => {
        return status.toLowerCase();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "bg-emerald-100 text-emerald-700";
            case "blocked":
                return "bg-amber-100 text-amber-700";
            case "closed":
            case "rejected":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "active":
                return <GoDotFill className="w-4 h-4" />;
            case "blocked":
                return <LuClock className="w-4 h-4" />;
            case "closed":
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
                    Account Management
                </h2>
                <button className="px-5 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium">
                    Create Account
                </button>
            </div>
            <div className="space-y-3">
                {accounts.map((account) => 
                    { const status = account.status.toLowerCase();
                return (    
                    <div
                        key={account._id}
                        className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:shadow-md group"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                                <LuBuilding2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 text-lg">
                                    {account.user.firstName} {account.user.lastName}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    {account.accountNumber}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <p className="text-xs text-slate-500 mb-1">Balance</p>
                                <p className="text-xl font-bold text-slate-800">
                                    {account.balance}
                                </p>
                            </div>
                            <div className="text-center ">
                                <p className="text-xs text-slate-500 mb-1">Status</p>
                                <span
                                    className={`inline-flex items-center space-x-1 mx-auto px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                        status
                                    )}`}
                                >
                                    {getStatusIcon(status)}
                                    <span className="capitalize">{status}</span>
                                </span>
                            </div>
                            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                <LuSquarePen className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>
                )})}
            </div>
        </div>

    )
}