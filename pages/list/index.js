import styles from "../../styles/Items.module.scss";
import Link from "next/link";
export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  return {
    props: {
      items: data,
    },
  };
};

const List = ({ items }) => {
  return (
    <div>
      <h1>My Users</h1>
      {items.map((item) => (
        <Link href={`/list/${item.id}`} key={item.id}>
          <a className={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default List;
