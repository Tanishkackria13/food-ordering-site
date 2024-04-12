import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        id: 'credentials',// remove
        credentials: {
          username: { label: "Email", type: "email", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" },
        },
          async authorize(credentials, req) {
           
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user.ok && user) {
            
              return user
            } else {
             
              return null
      
             
            }
          }
        })
      ]
});

export { handler as GET, handler as POST }