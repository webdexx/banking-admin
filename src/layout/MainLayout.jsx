import { useEffect } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import { useStore } from "../stores/store";
import { useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const isAuthenticated = useStore((s) => s.isAuthenticated);
  console.log("From Layout:", isAuthenticated);

  useEffect(() => {
    if(!isAuthenticated) {
      navigate("/", {replace: true});
    }
  }, [navigate])

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="header">
        <Header />
      </div>

      <Hero />
      </div>
    </>
  );
}
