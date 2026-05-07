type IconType = "bag" | "target" | "doc" | "send" | "check";
type Report = [string, IconType, string];
type TimelineItem = [string, string];
type DotColor = "blue" | "yellow" | "pink" | "teal" | "red" | "purple";
type DotConfig = [DotColor, string, string];

const reports: Report[] = [
  ["Year 3", "bag", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."],
  ["Year 4", "target", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."],
  ["Year 5", "doc", "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."],
  ["Year 6", "send", "Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."]
];

const timeline: TimelineItem[] = [
  ["Planning", "It is a long established fact that a reader will be distracted by the readable content of a page."],
  ["Marking", "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."],
  ["Data", "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."]
];

const dots: DotConfig[] = [
  ["blue", "11%", "6%"], ["yellow", "83%", "10%"], ["pink", "8%", "19%"], ["teal", "74%", "24%"],
  ["red", "92%", "31%"], ["purple", "78%", "38%"], ["yellow", "18%", "36%"], ["pink", "82%", "58%"],
  ["teal", "11%", "71%"], ["purple", "92%", "85%"], ["blue", "84%", "96%"]
];

function Logo() {
  return (
    <a className="logo" href="#">
      <span className="logoMark">
        <b>A</b><b>B</b><b>C</b>
      </span>
      <span><strong>Learning</strong>Loom</span>
    </a>
  );
}

function DotField() {
  return <>{dots.map(([color, left, top], index) => <span key={index} className={`dot ${color}`} style={{ left, top }} />)}</>;
}

function Icon({ type }: { type: IconType }) {
  const glyphs: Record<IconType, string> = { bag: "▣", target: "◉", doc: "▧", send: "➤", check: "✓" };
  return <span className="icon">{glyphs[type] || glyphs.check}</span>;
}

function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="loginPills"><span>Pupil Login</span><span>Parent Login</span><span>School Login</span></div>
        <div className="socials">f&nbsp;&nbsp;t&nbsp;&nbsp;◎</div>
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

function Hero() {
  return (
    <section className="hero section">
      <DotField />
      <h1>Boost Maths and English<br />skills from year 3-6</h1>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
      <div className="tabs"><button>School</button><span>Parents</span></div>
      <div className="heroImages">
        <img src="/assets/hero-grad.jpg" alt="" />
        <img src="/assets/hero-study.jpg" alt="" />
        <img src="/assets/hero-red.jpg" alt="" />
        <img src="/assets/hero-boy.jpg" alt="" />
      </div>
      <div className="trusted">Trusted by several unicorn companies</div>
      <div className="brands"><b>Class</b><b>treva.</b><b>kanba</b><b>Evergreen</b><b>Castrol</b></div>
    </section>
  );
}

function Reporting() {
  return (
    <section className="section reporting">
      <span className="dot yellow near" />
      <span className="dot pink near2" />
      <h2>KS2 All-Through Reporting</h2>
      <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <div className="reportGrid">
        {reports.map(([title, icon, text]) => (
          <article className="reportCard" key={title}>
            <Icon type={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="section platform">
      <div className="personBlock orange"><img src="/assets/laptop-girl.jpg" alt="" /></div>
      <div className="copy">
        <h2>All-in-one Assessment Platform<br />for Catching up and Beyond</h2>
        <p>Mirodo can help you to:</p>
        <ul>
          <li>Sed venenatis dui id tellus pulvinar feugiat at sit amet dui.</li>
          <li>Donec in lacus sed tortor molestie accumsan.</li>
          <li>Curabitur eu lacus a sapien maximus bibendum vitae vel turpis.</li>
        </ul>
        <p><strong>LearningLoom</strong> gives you access to simple, easy-to-use assessments and passage variations.</p>
      </div>
      <div className="featureStrip">
        <div><Icon type="bag" /><h3>Formative</h3><p>Save time preparing assessments for unit tests, intervention, homework and in class.</p></div>
        <div><Icon type="target" /><h3>Summative</h3><p>Our KS2 summative assessment range includes Maths, Grammar, Punctuation and Reading.</p></div>
        <button>Book A Demo</button>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section whyChoose">
      <div>
        <h2>Why Choose Us?</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum by Cicero.</p>
      </div>
      <div className="teacherPhoto"><img src="/assets/teacher.jpg" alt="" /><span>Thomas Kowalski, AHT<br /><small>St Clare's Catholic School</small></span></div>
    </section>
  );
}

function DemoForm() {
  return (
    <section className="section demo">
      <div className="demoText">
        <h2>Register For Your Free Demo</h2>
        {["Book a demo to see our all-in-one assessment platform.", "Take a look at our formative question bank", "Review summative tests", "View our full range of tracking and reporting tools", "Get a quote"].map((item) => <p key={item}><Icon type="check" />{item}</p>)}
      </div>
      <form>
        <input placeholder="School Name" />
        <input placeholder="Full Name" />
        <input placeholder="School Email Address" />
        <button>Book A Free 20-Minutes Demo</button>
      </form>
    </section>
  );
}

function Help() {
  return (
    <section className="section help">
      <h2>How Mirodo can help you</h2>
      <p className="lead">Spend less time preparing, marking and analysing assessments. Our comprehensive range of resources will give you data insights.</p>
      <div className="timeline">
        {timeline.map(([title, text], i) => (
          <article key={title} className={i === 1 ? "left" : ""}><span>{i + 1}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
      <img className="globe" src="/assets/globe.jpg" alt="" />
    </section>
  );
}

function Confidence() {
  return (
    <section className="section confidence">
      <div className="confidenceCard">
        <div><h2>Build Confidence<br />And Fluency</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p></div>
        <img src="/assets/kids-reading.jpg" alt="" />
      </div>
      <div className="lessonCards">
        <article><img src="/assets/small-student.jpg" alt="" /><h3>GO<br /><span>LIVE</span></h3><p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p></article>
        <article><img src="/assets/video-card.jpg" alt="" /><h3>Engaging Video Lessons</h3><p>Electronic typesetting remained essentially unchanged and popularised passages of Lorem Ipsum.</p></article>
      </div>
    </section>
  );
}

function BottomWhy() {
  return (
    <section className="section bottomWhy">
      <div className="greenPhoto"><img src="/assets/girl-tablet.jpg" alt="" /></div>
      <div>
        <h2>Why Us?</h2>
        <ul>{["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Nunc faucibus massa ut mollis mollis.", "Phasellus id diam ut odio tristique hendrerit.", "Proin malesuada dui vitae mollis consectetur.", "Mauris pellentesque neque eu purus sagittis.", "Ut quis lacus imperdiet justo semper pellentesque."].map((item) => <li key={item}><Icon type="check" />{item}</li>)}</ul>
      </div>
    </section>
  );
}

function FooterCta() {
  return (
    <>
      <section className="section footerCta">
        <div><h2>Boost KS2 Results</h2><p>Nam at risus ullamcorper, fringilla purus in, placerat velit pellentesque efficitur.</p><button>Free Demo</button></div>
        <div><h2>Join the Community</h2><p>Subscribe to our newsletter to keep up-to-date with the latest news.</p><div className="subscribe"><input placeholder="Email" /><select><option>Select</option></select><button>Subscribe</button></div></div>
      </section>
      <footer className="footer"><Logo /><nav><a>Terms and Condition</a><a>DPP</a><a>About us</a><a>Privacy Policy</a></nav></footer>
    </>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Reporting />
      <Platform />
      <WhyChoose />
      <DemoForm />
      <Help />
      <Confidence />
      <BottomWhy />
      <FooterCta />
    </main>
  );
}
