import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/layout/Footer";

export const AppShell = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-text-primary bg-bg">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};
