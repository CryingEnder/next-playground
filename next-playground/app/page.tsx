import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 className="text-black">
        Yo {session && <span>{session.user!.name}</span>}
      </h1>
    </main>
  );
}
