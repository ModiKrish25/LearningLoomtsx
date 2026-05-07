import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="loginPills"><span>Pupil Login</span><span>Parent Login</span><span>School Login</span><span><Link className="navButton" href="/contact">Contact</Link></span></div>
        <div className="socials">f&nbsp;&nbsp;t&nbsp;&nbsp;&#9679;</div>
      </div>
      <nav className="nav">
        <Logo />
        <div className="navLinks">
          <Link className="active" href="/">School</Link>
          <a>Parents</a>
          <a>Year 7 Intervention</a>
          <a>Blog</a>
        </div>
        
      </nav>
    </header>
  );
}
