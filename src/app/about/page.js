import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
// import { LoginIsRequiredServer } from "../api/auth/[...nextauth]/route";

const AboutPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  // await LoginIsRequiredServer();

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <MaxWidthWrapper>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-28">
          {posts.map((post, i) => (
            <div
              key={i}
              className="border-0 p-4 border-r-2 border-b-2 border-gray-900"
            >
              <p className="mb-2 font-bold text-1xl">{post.title}</p>
              <p className="post-body">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutPage;
