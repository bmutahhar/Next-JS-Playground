import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooopss...</h1>
      <h2>Page not found!</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
