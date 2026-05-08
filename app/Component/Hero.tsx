import Image from "next/image";
import DotField from "./DotField";

export default function Hero() {
  return (
    <section className="hero section">
      <DotField />
      <h1>Boost Maths and English<br />skills from year 3-6</h1>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
      <div className="tabs"><button>School</button><span>Parents</span></div>
      <div className="heroImages">
        <Image priority unoptimized={true} src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80" alt="Student 1" width={235} height={390} />
        <Image priority unoptimized={true} src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=500&q=80" alt="Student 2" width={235} height={390} />
        <Image priority unoptimized={true} src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80" alt="Student 3" width={235} height={390} />
        <Image priority unoptimized={true} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Student 4" width={235} height={390} />
      </div>
      <div className="trusted">Trusted by several unicorn companies</div>
      <div className="brandsWrapper">
        <div className="brands">
          <div className="brandGroup"><b>Class</b><b>treva.</b><b>kanba</b><b>Evergreen</b><b>Castrol</b></div>
          <div className="brandGroup"><b>Class</b><b>treva.</b><b>kanba</b><b>Evergreen</b><b>Castrol</b></div>
        </div>
      </div>
    </section>
  );
}
