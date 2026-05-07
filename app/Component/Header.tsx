import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="loginPills"><span>Pupil Login</span><span>Parent Login</span><span>School Login</span></div>
        <div className="socials">f&nbsp;&nbsp;t&nbsp;&nbsp;&#9679;</div>
      </div>
      <nav className="nav">
        <Logo />
        <div className="navLinks">
          <a className="active">School</a><a>Parents</a><a>Year 7 Intervention</a><a>Blog</a>
        </div>
        <button>Sign Up</button>
      </nav>
    </header>
  );
}
