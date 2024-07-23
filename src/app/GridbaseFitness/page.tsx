"use client"
import styles from "./page.module.css";
import Header from "../Components/header";

const HomePage: React.FC = () => {
    return (
      <div className={styles.centeredContent} >
        <Header></Header>
        <h1>Welcome to the GridBase Fitness Home Page</h1>
      </div>
    );
  };
  
  export default HomePage;
  