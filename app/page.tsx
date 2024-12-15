import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";
import { users } from "@/schemas/drizzle";
import UserList from "./UserList";

export default async function Home() {
  const { env } = getRequestContext();
  const DB = drizzle(env.DB);

  const userList = await DB.select().from(users).all();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Next.js + Cloudflare Pages</div>

      <UserList initialUsers={userList} />
    </main>
  );
}
