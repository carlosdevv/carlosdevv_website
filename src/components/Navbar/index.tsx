"use client";

import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <div className="w-full fixed shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="container w-full flex flex-row items-center justify-between py-4">
        <Link href="/">
          <div className="h-auto w-auto flex flex-row items-center">
            <Avatar className="cursor-pointer hover:animate-slowspin h-8 w-8">
              <AvatarImage src="https://github.com/carlosdevv.png" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>

            <span className="font-bold ml-3 hidden md:block text-gray-300">
              Carlosdevv
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center w-full justify-between">
          <Link
            href="#contact"
            className="mx-auto cursor-pointer hover:text-violet-300 transition-colors"
          >
            <div className="button-primary rounded-lg py-2 px-4 text-white font-light cursor-pointer">
              Contact
            </div>
          </Link>
          <button
            className="text-gray-200 hover:text-violet-300 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icons.menubar className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-black rounded-e-sm absolute z-20 py-2 top-16 right-0 left-0 ">
            <a
              href="#skills"
              className="cursor-pointer text-gray-200 hover:text-violet-300 py-2 px-4"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="cursor-pointer text-gray-200 hover:text-violet-300 py-2 px-4"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-gray-200 hover:text-violet-300 py-2 px-4"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-row gap-6 text-gray-200 items-center border border-[#ffffff14] bg-[#ffffff05] rounded-full py-2 px-5 md:mr-20 text-sm">
          <a
            href="#skills"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Projects
          </a>
        </div>
        <Link
          href="#contact"
          className="hidden md:flex cursor-pointer hover:text-violet-300 transition-colors"
        >
          <div className="button-primary rounded-lg py-2 px-4 text-white font-light cursor-pointer">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};
