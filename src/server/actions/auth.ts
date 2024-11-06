"use server";

import { oauth2 } from "@/lib/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login() {
  const auth = oauth2.getAuthorizationUrl();
  if (!auth) {
    console.log("Unable to get the login url.");
  }
  redirect(auth);
}

export async function logout() {
  const cookiesStore = await cookies();
  cookiesStore.delete("token");
  redirect("/");
}

export async function set({ key, value }: { key: string; value: string }) {
  const cookiesStore = await cookies();
  cookiesStore.set(key, value);
}

export async function get(key: string) {
  const cookiesStore = await cookies();
  const value = cookiesStore.get(key);
  if (!value) {
    console.log("No key found");
  }
  return value;
}
