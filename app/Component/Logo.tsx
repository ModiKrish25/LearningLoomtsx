import Link from "next/link";

export default function Logo() {
  return (
    <Link className="logo" href="/" prefetch={false}>
      <span className="logoMark">
        <b>A</b><b>B</b><b>C</b>
      </span>
      <span><strong>Learning</strong>Loom</span>
    </Link>
  );
}
