import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link
        href="https://github.com/riadhmouamnia"
        target="_blank"
        className={styles.logo}
      >
        Riadh Mouamnia
      </Link>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;
