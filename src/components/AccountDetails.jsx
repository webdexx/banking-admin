// AccountDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

export default function AccountDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Replace this with your actual accounts array or API call
  const accounts = [
    {
      _id: '1',
      accountNumber: 'ACC-2024-001',
      accountName: 'Premium Business Account',
      balance: 15430.50,
      currency: 'USD',
      type: 'Business',
      status: 'Active',
      owner: 'John Doe',
      createdAt: '2024-01-15',
      lastTransaction: '2024-12-22'
    },
    // ... your other accounts
  ];
  
  const account = accounts.find(a => a._id === id);
  
  if (!account) {
    return (
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-semibold">Account not found</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
            <p className="text-sm opacity-90 mb-1">Account Number</p>
            <h1 className="text-3xl font-bold mb-3">{account.accountNumber}</h1>
            <h2 className="text-xl font-semibold">{account.accountName}</h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                {account.status}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                {account.type}
              </span>
            </div>
          </div>
          
          {/* Balance */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-b">
            <p className="text-sm text-gray-600 mb-1">Current Balance</p>
            <p className="text-4xl font-bold">
              {account.currency} {account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
          
          {/* Details */}
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2">Account Details</h2>
                <div>
                  <p className="text-sm text-gray-500">Account Type</p>
                  <p className="font-medium mt-1">{account.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Currency</p>
                  <p className="font-medium mt-1">{account.currency}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Owner</p>
                  <p className="font-medium mt-1">{account.owner}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2">Activity</h2>
                <div>
                  <p className="text-sm text-gray-500">Created At</p>
                  <p className="font-medium mt-1">{account.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Transaction</p>
                  <p className="font-medium mt-1">{account.lastTransaction}</p>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                View Transactions
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Edit Account
              </button>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 ml-auto">
                Close Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}