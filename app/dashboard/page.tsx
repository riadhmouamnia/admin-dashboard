import Card from "@ui/dashboard/card";
import styles from "@ui/dashboard/dashboard.module.scss";
import Rightbar from "@ui/dashboard/rightbar";
import Transactions from "@ui/dashboard/transactions";
import Chart from "@ui/dashboard/chart";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
