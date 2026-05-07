import Link from "next/link";
import Header from "../app/Component/Header";

export default function Custom404() {
  return (
    <main>
      <Header />
      <section className="section errorPage">
        <span>404</span>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or may have been moved.</p>
        <Link href="/">Back To Home</Link>
      </section>
    </main>
  );
}
