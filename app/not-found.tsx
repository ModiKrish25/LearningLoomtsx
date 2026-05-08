import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section errorPage">
        <span>404</span>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or may have been moved.</p>
        <Link href="/">Back To Home</Link>
      </section>
    </main>
  );
}
