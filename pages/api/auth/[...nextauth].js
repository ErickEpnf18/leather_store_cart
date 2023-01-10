import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch("/your/endpoint", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        console.log("naflskdfa")
        // Return null if user data could not be retrieved
                return {
          id: "1234",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
        };
      }
    })
    // CredentialsProvider({
    //   type: "credentials",
    //   credentials: {

    //   },
    //   authorize(credentials, req) {
    //     const { email, password } = credentials;
    //     // perform you login logic
    //     // find out user from db
    //     if (email !== "john@gmail.com" || password !== "1234") {
    //       console.log("this is the: -->");
    //       throw new Error("invalid credentials");
    //     }

    //     // if everything is fine
    //     return {
    //       id: "1234",
    //       name: "John Doe",
    //       email: "john@gmail.com",
    //       role: "admin",
    //     };
    //   },
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },

  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },

  //   GithubProvider({
  //     clientId: process.env.GITHUB_ID,
  //     clientSecret: process.env.GITHUB_SECRET,
  //   }),

  // ],
  // callbacks: {
  //   async jwt({ token, account }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token
  //     }
  //     return token
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken
  //     return session
  //   }
  // }
});
