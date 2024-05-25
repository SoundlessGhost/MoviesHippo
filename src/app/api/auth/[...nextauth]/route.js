import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { User } from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Google Profile", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },

      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const dbUser = await User.findOne({ email: credentials.email });

        if (
          credentials?.email === dbUser.email &&
          credentials?.password === dbUser.password
        ) {
          return dbUser;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};

export const LoginIsRequiredServer = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/sign-in");
  }
};

// export const LoginIsRequiredClient = async () => {
//   const session = useSession();
//   const router = useRouter();
//   if (typeof window !== "undefined") {
//     if (!session) {
//       router.push("/");
//     }
//   }
// };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
