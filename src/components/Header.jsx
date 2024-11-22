import React from "react";
import styles from "../styles/Header.module.css"; // Path ke file CSS

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Jogging Tracker</div>
      <nav className={styles.navMenu}>
        <a href="#" className={styles.navItem}>Home</a>
        <a href="#" className={styles.navItem}>Features</a>
        <a href="#" className={styles.navItem}>About</a>
        <a href="#" className={styles.navItem}>Help</a>
      </nav>
    </header>
  );
};

export default Header;
