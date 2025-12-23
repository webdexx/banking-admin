// UserDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import {
  LuArrowLeft,
  LuMail,
  LuPhone
} from "react-icons/lu";
import { useStore } from "../stores/store";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Replace this with your actual users array or API call
  const users = useStore((s) => s.users);

  const user = users.find((u) => u._id === id);

  const fullName = `${user.firstName} ${user.lastName}`;
  const status = user.isActive ? "Active" : "Inactive";

  {
    fullName.charAt(0);
  }
  <h1>{fullName}</h1>;

  if (!user) {
    return (
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <LuArrowLeft size={20} />
            Back
          </button>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-semibold">User not found</p>
            <p className="text-gray-600 mt-2">
              The user with ID "{id}" does not exist.
            </p>
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
          <LuArrowLeft size={20} />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-500 to-sky-600 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                {fullName.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{fullName}</h1>
                <div className="flex items-center gap-3 mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      status === "Active" ? "bg-green-500/20" : "bg-red-500/20"
                    }`}
                  >
                    {status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                    {user.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2">
                  Contact Information
                </h2>

                <div className="flex items-start gap-3">
                  <LuMail className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.mobileNo}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LuPhone className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{user.flag}</p>
                  </div>
                </div>
              </div>

              {/* <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2">
                  Account Information
                </h2>

                <div className="flex items-start gap-3">
                  <LuShield className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="font-medium">{user.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LuCalendar className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Created At</p>
                    <p className="font-medium">{user.createdAt}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LuCalendar className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Last Login</p>
                    <p className="font-medium">{user.lastLogin}</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Edit User
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Reset Password
              </button>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 ml-auto">
                Deactivate User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
