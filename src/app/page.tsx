import HomePage from "@/components/home";
import { get } from "@/server/actions/auth";

export default async function Authorize() {
  const token = (await get("token"))?.value;
  console.log({ token });
  if (!token) {
    return <div className="text-3xl flex items-center justify-center text-balance p-6">Please Login...</div>;
  }
  return <HomePage />;
}
