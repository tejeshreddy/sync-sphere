// import NextAuth from "next-auth";

// import { authOptions } from "@/server/auth";

// export default NextAuth(authOptions);

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider(<GithubAuth>{
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
