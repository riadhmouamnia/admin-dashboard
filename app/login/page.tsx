import styles from "@/app/ui/login/login.module.scss";
import LoginForm from "@/app/ui/login/LoginForm";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
