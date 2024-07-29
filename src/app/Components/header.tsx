"use client";
import { useRouter } from "next/navigation";
import styles from "./header.module.css"; // Adjust path as needed

const Header: React.FC = () => {
  const router = useRouter();

  const navigate = (path: string) => {  router.push(path);  };
   
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.navLink}`}>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() =>navigate('/About')}>About</button>
        <button onClick={() => navigate('/Pricing')}>Pricing</button>
        <button onClick={() => navigate('/SignIn')}>Sign In</button>
      </nav>
    </header>
  );
};

export default Header;