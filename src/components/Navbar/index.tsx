import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="container w-full flex flex-row items-center justify-between py-4">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src=""
            alt="logo"
            width={1}
            height={1}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-3 hidden md:block text-gray-300">
            Carlosdevv
          </span>
        </a>

        <div className="flex flex-row gap-6 text-gray-200 items-center border border-[#ffffff14] bg-[#ffffff05] rounded-full py-2 px-5 md:mr-20 text-sm">
          <a
            href="#about-me"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Me
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="cursor-pointer hover:text-violet-300 transition-colors"
          >
            Skills
          </a>
        </div>

        <div className="button-primary rounded-lg py-2 px-4 text-white font-light cursor-pointer">
          Contact
        </div>
      </div>
    </div>
  );
};
