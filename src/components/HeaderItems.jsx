import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";

const HeaderItems = () => {
  const { data: session } = useSession();
  return (
    <div className="lg:block hidden">
      <Link
        className={`${buttonVariants({
          variant: "link",
        })}`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${buttonVariants({
          variant: "link",
        })}`}
        href={"/about"}
      >
        About
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
  );
};

export default HeaderItems;
