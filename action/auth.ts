'use server'
import { signIn, signOut } from "@/auth"

export async function login(formData: {email: string, password: string}) {
  // if(!formData.email || !formData.password) {
  //   throw new Error("FormData is Required")
  // }

  // const data = {
  //   email: formData.email,
  //   password: formData.password
  // }
  await signIn("google", {redirectTo: "/"})
}

export async function signup(formData: {email: string, password: string, username: string}) {
  // if(!formData.email || !formData.password || !formData.username) {
  //   throw new Error("FormData is Required")
  // }
  // const clientData = {
  //   email: formData.email,
  //   password: formData.password,
  // }
  await signIn("google", {redirectTo: "/"})
}

export async function logout() {
  console.log("Logout")
  await signOut({redirectTo: "/login"})
}