'use client'
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";



export default function AppLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={path} className="h-full">
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
