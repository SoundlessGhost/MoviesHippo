"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { usePathname } from "next/navigation";
import { Clapperboard } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="font flex-grow-0">
      {pathname == "/sign-in" || pathname == "/sign-up" ? null : (
        <MaxWidthWrapper>
          <div className="border-t mt-10 border-gray-200">
            <div className="pt-8">
              <div className="flex justify-center">
                <Clapperboard />
              </div>
            </div>

            <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
              <div className="text-center relative mx-auto max-w-sm">
                <h3 className="font-semibold">
                  Contact or Report Anything Here{" "}
                  <span className="text-blue-500">
                    Email: shahedak47mk47@gmail.com
                  </span>
                </h3>
                <div className="mt-2 text-sm text-muted-foreground">
                  Do you want to watch all our movies?, you can do so in
                  minutes.{" "}
                  <Link
                    href="/sign-in"
                    className="whitespace-nowrap font-bold hover:text-black"
                  >
                    Get started &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <div className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-black"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-black"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-black"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-black"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      )}
    </footer>
  );
};

export default Footer;
