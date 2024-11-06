import { get, login, logout } from "@/server/actions/auth";
import { Button } from "./ui/button";

export default async function Navbar() {
  const token = (await get("token"))?.value;

  return (
    <header className="flex bg-background py-4 shadow">
      <nav className="container flex items-center gap-10">
        <h1 className="text-lg mr-auto font-bold font-sans">Salesforce Orders</h1>
        {token ? <Button onClick={logout}>Logout</Button> : <Button onClick={login}>Login</Button>}
      </nav>
    </header>
  );
}
