import { Menu, X, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { useSession, signOut } from "next-auth/react";

const MobileNav = ({ resolvedTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative -ml-10 inline-flex items-center justify-center rounded-md text-gray-400"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex ">
        <div className="w-4/5">
          <div
            className={`relative flex w-full  h-[100vh] max-w-sm flex-col overflow-y-auto pb-12 shadow-xl ${
              resolvedTheme === "light" ? "bg-white" : "bg-[#131617]"
            } `}
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2 flex flex-col">
              <Link
                onClick={() => closeOnCurrent("/")}
                className={`${buttonVariants({
                  variant: "link",
                })}`}
                href={"/"}
              >
                Home
              </Link>
              <Link
                onClick={() => closeOnCurrent("/about")}
                className={`${buttonVariants({
                  variant: "link",
                })}`}
                href={"/about"}
              >
                About
              </Link>
              <Link
                onClick={() => closeOnCurrent("/redem")}
                className={`${buttonVariants({
                  variant: "link",
                })}`}
                href={"/redem"}
              >
                Redem
              </Link>
              {session ? (
                <Link
                  className={`${buttonVariants({
                    variant: "link",
                  })}`}
                  href={"/add-movies"}
                >
                  Add Movies
                </Link>
              ) : null}
            </div>

            {session ? (
              <Button
                onClick={() => signOut()}
                variant="link"
                className="flex items-center p-2 font-medium"
              >
                Log out <LogOutIcon size={15} className="ml-1" />
              </Button>
            ) : (
              <Link
                onClick={() => closeOnCurrent("/sign-in")}
                href={"/sign-in"}
                className={`text-sm ${buttonVariants({
                  variant: "link",
                })}`}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
