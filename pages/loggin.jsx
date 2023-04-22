import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

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
