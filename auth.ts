import NextAuth, { AuthError } from "next-auth"
import Google from "next-auth/providers/google"
import { connectToDatabase } from "./lib/ConnectDB"
import { User } from "./models/user"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn: async({user, account}) =>{
      if(account?.provider === "google"){
        try{
          const {email, name, image, id} = user
          await connectToDatabase()
          const alreadyUser = await User.findOne({email})
          if(!alreadyUser) {
            await User.create({
              username: name,
              email: email,
              avatar: image,
              googleId: id
            })
          }
          return true
        } catch (error){
          console.log(error)
          throw new AuthError("Error While creating user")
        }
      }
      return false
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  }
})