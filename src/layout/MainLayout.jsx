import Header from "../header/Header";
import Hero from "../hero/Hero";

export default function MainLayout() {
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
