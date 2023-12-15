import Navbar from "@ui/dashboard/navbar";
import Sidebar from "@ui/dashboard/sidebar";
import styles from "@ui/dashboard/dashboard.module.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
