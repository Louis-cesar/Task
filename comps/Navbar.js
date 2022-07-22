import styles from "../comps/Navbar.module.css";
import Link from "next/link";
const Navbar = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.titleContainer}>
        {title}
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
