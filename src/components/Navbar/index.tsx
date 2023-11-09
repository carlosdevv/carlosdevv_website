import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50">
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

        <div className="flex flex-row gap-6 text-gray-200 items-center border border-[#ffffff14] bg-[#ffffff05] rounded-full py-2 px-5 md:mr-20 text-sm">
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
          <a
            href="#contact"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Contact
          </a>
        </div>

        <Link
          href="/about"
          className="cursor-pointer hover:text-violet-300 transition-colors"
        >
          <div className="button-primary rounded-lg py-2 px-4 text-white font-light cursor-pointer">
            About me
          </div>
        </Link>
      </div>
    </div>
  );
};
