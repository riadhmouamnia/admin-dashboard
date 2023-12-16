import Pagination from "@/app/ui/dashboard/pagination";
import Search from "@/app/ui/dashboard/search";
import styles from "@ui/dashboard/users/users.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Chabira
              </div>
            </td>
            <td>chabira@yo.co</td>
            <td>12-1-2023</td>
            <td>Client</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
