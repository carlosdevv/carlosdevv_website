import { Socials } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer-gradient relative bottom-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container w-full flex flex-row items-center justify-between py-8">
        <div className="text-[#9b96b0] font-light text-sm">
          ©{currentYear} Carlos Lopes.
        </div>
        <div className="text-[#9b96b0] flex items-start gap-3">
          {Socials.map((data) => (
            <a key={data.name} href={data.src}>
              {data.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
