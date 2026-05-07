import DotField from "./DotField";

export default function Hero() {
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
