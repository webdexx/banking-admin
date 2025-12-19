import { adminLogin } from "../api/auth.api";
import { useStore } from "../stores/store";

export default function Login() {
  const setAdmin = useStore((s) => s.setAdmin);

  const handleLogin = async (formData) => {
    const data = await adminLogin(formData);
    setAdmin(data.admin);
  };

  return null;
};