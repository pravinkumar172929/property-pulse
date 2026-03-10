import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
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
    // 1. invoke on successful login
    async signIn({ profile }) {
      // connect to database
      await connectDB();
      //   check if user exists
      const userExists = await User.findOne({ email: profile.email });
      //   if not, add user to database, turnacate the name
      const username = profile.name.slice(0, 20);
      //   save in db
      await User.create({
        email: profile.email,
        username,
        image: profile.picture,
      });
      //   return true to sign in
      return true;
    },

    // 2. modifies the session object
    async session({ session }) {
      // get user from db
      const user = User.findOne({ email: session.user.email });
      //   assign user id to session
      session.user.id = user._id.toString();
      //   return session
      return session;
    },
  },
};
