import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import connectDB from "@/config/database";
import User from "@/models/User";
import { GoogleProfile } from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      const googleProfile = profile as GoogleProfile;

      if (!googleProfile?.email) return false;

      await connectDB();

      const userExists = await User.findOne({ email: googleProfile.email });

      if (!userExists) {
        const username = googleProfile.name?.slice(0, 20);

        await User.create({
          email: googleProfile.email,
          username,
          image: googleProfile.picture,
        });
      }

      return true;
    },

    async session({ session }) {
      if (!session.user?.email) return session;

      const user = await User.findOne({ email: session.user.email });

      if (user) {
        session.user.id = user._id.toString();
      }

      return session;
    },
  },
};
