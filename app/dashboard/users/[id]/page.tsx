import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.scss";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const SingleUserPage = async ({ params }: Props) => {
  const { id } = params;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="user" fill />
        </div>
        Chabira
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <label>Username</label>
          <input type="text" name="username" placeholder="chabira17" />
          <label>Email</label>
          <input type="email" name="email" placeholder="chabira17@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="077752453" />
          <label>Address</label>
          <textarea name="address" placeholder="Djelfa, Algeria" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option>Yes</option>
            <option>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
