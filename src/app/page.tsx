"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {

const router = useRouter();

const navigateToGridbaseFitness = () => {
  router.push('/GridbaseFitness');
};

  return (
    <main className={styles.main}>

    <div className={styles.centeredContent} > 
      <h1>Welcome to Rose Network Hub</h1>
      <button onClick={navigateToGridbaseFitness}>GridBase Fitness</button>
    </div>
    

    </main>
  );
}
