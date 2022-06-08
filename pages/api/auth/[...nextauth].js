import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@utils/mongodb';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async ({ session, user }) => {
      // Add user ID to session
      const userSession = session;
      if (session.user) {
        userSession.user.userId = user.id;
      }
      return userSession;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
