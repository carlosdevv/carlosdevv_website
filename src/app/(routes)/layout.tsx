import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="h-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
