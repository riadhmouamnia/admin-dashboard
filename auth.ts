import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectToDB } from "./app/lib/utils";
import { User } from "./app/lib/models";

const login = async (credentials: UserCredentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin)
      throw new Error("Wrong credentials, user is not admin");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Password incorrect!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials as UserCredentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
        token.role = user.isAdmin ? "Administrator" : "User";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.username;
        session.user.image = token.img;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
