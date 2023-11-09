import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[url('/images/404.svg')] h-screen w-screen">
      <div className="container flex flex-col justify-center h-full">
        <div className="not-found text-transparent bg-clip-text bg-gradient-to-br from-violet-900 via-[#F69132] to-purple-800 text-9xl">
          404
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-purple-800 my-4 font-light text-xl">
          You are lost.
        </div>
        <Link href="/">
          <Button className="bg-gradient-to-r from-violet-800 to-[#F69132] text-gray-800 hover:opacity-80 transition-opacity duration-150 ease-out hover:ease-in">
            Comeback to reality
          </Button>
        </Link>
      </div>
    </main>
  );
}
