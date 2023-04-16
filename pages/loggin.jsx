import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex justify-center items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn("github")} className="bg-white p-2">
            Login with github
          </button>
        </div>
      </div>
    );
  }
  router.push("/home");
}
