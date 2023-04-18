import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <div className={styles.wrapperButton}>
          <button className={styles.button} onClick={() => signIn("github")}>
            Login with github
          </button>
        </div>
      </div>
    );
  }
  router.push("/home");
}
