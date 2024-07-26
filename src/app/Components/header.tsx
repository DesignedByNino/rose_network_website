"use client";
import { useRouter } from "next/navigation";
import styles from "./header.module.css"; // Adjust path as needed

const Header: React.FC = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.navLink}`}>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/pricing')}>Pricing</button>
        <button onClick={() => navigate('/signin')}>Sign In</button>
      </nav>
    </header>
  );
};

export default Header;