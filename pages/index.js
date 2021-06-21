import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}> Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        voluptas fugiat culpa tenetur laudantium accusantium impedit quia
        cupiditate atque. Ut!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        repellendus sed ut amet quibusdam quod voluptatem cupiditate ex
        accusamus voluptas.
      </p>
      <Link href="/list">
        <a className={styles.btn}>User List</a>
      </Link>
    </div>
  );
}
