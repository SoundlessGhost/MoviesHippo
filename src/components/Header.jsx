"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import MobileNav from "./MobileNav";
import HeaderItems from "./HeaderItems";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
import { useSession } from "next-auth/react";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const { data: session } = useSession();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <main
      className={`flex items-center justify-between py-6 border-0 border-b border-gray-200 px-20`}
    >
      <div>
        <MobileNav resolvedTheme={resolvedTheme} />
        <HeaderItems />
      </div>

      <div className="flex items-center ">
        <div>
          <DropdownMenuDemo
            handleThemeChange={handleThemeChange}
            resolvedTheme={resolvedTheme}
          />
        </div>
        <div>
          {session ? null : (
            <div onClick={handleThemeChange}>
              {resolvedTheme === "light" ? (
                <Moon className="cursor-pointer" size={20} />
              ) : (
                <Sun className="cursor-pointer" size={20} />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
