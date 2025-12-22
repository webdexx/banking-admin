import { useEffect, useState } from "react";
import { LuLock, LuUserRound, LuKeyRound } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../stores/store";

export default function TwoStepLogin() {
   const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { login, fetchMe, isAuthenticated, authLoading } = useStore();

  useEffect(() => {
    document.title = "Admin Login";
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    pin: ["", "", "", ""],
  });

  const [error, setError] = useState("");

  /* ---------------- STEP 1 ---------------- */
  const handleStep1Submit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setStep(2);
  };

  const handleLogin = async () => {
    const payload = {
      password: formData.password,
      pin: formData.pin.join(""),
    };

    if (formData.username.includes("@")) {
      payload.email = formData.username;
    } else {
      payload.mobileNo = formData.username;
    }

    const result = await login(payload);

    if (!result.success) {
      setError(result.message);
      return;
    }

    if(isAuthenticated) {
     navigate("/admin", { replace: true });
    }

  };

  /* ---------------- PIN HANDLERS ---------------- */
  const handlePinChange = (index, value) => {
    if (value.length > 1) return;
    if (value && !/^\d$/.test(value)) return;

    const updatedPin = [...formData.pin];
    updatedPin[index] = value;

    setFormData((prev) => ({
      ...prev,
      pin: updatedPin,
    }));

    if (value && index < 3) {
      document.getElementById(`pin-${index + 1}`)?.focus();
    }
  };

  const handlePinKeyDown = (index, e) => {
    if (e.key === "Backspace" && !formData.pin[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`)?.focus();
    }
  };

  /* ---------------- STEP 2 ---------------- */
  const handleBack = () => {
    setStep(1);
    setFormData((prev) => ({
      ...prev,
      pin: ["", "", "", ""],
    }));
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-sky-700 to-sky-950 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full mb-4">
            <LuLock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          <div
            className={`h-1 flex-1 ${step >= 1 ? "bg-sky-500" : "bg-gray-200"}`}
          />
          <div
            className={`h-1 flex-1 duration-300 ease-in-out ${
              step >= 2 ? "bg-sky-500" : "bg-gray-200"
            }`}
          />
        </div>

        <form onSubmit={handleStep1Submit} className="space-y-5">
          {/* STEP 1 */}
          {!authLoading && step === 1 && (
            <div>
              <div>
                <label className="block text-sm font-medium my-2">
                  Username
                </label>
                <div className="relative">
                  <LuUserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium my-2">
                  Password
                </label>
                <div className="relative">
                  <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="button"
                className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold mt-6 mb-4 hover:bg-sky-800 cursor-pointer"
                onClick={() => setStep(2)}
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {!authLoading && step === 2 && (
            <div>
              <div className="text-center">
                <LuKeyRound className="w-12 h-12 mx-auto text-sky-800 mb-3" />
                <h2 className="text-xl font-semibold mb-4">Enter Your PIN</h2>
              </div>

              <div className="flex justify-center gap-3">
                {formData.pin.map((digit, index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type="password"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    onKeyDown={(e) => handlePinKeyDown(index, e)}
                    className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                  />
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold mt-6 mb-4 hover:bg-sky-800 cursor-pointer"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full bg-gray-200 py-3 rounded-lg font-semibold mb-4 hover:bg-stone-300 cursor-pointer"
              >
                Back
              </button>
            </div>
          )}
          {authLoading && <h1>Logging In...</h1>}
        </form>
      </div>
    </div>
  );
}
