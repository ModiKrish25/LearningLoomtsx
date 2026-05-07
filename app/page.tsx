import BottomWhy from "./Component/BottomWhy";
import Confidence from "./Component/Confidence";
import DemoForm from "./Component/DemoForm";
import FooterCta from "./Component/FooterCta";
import Header from "./Component/Header";
import Help from "./Component/Help";
import Hero from "./Component/Hero";
import Platform from "./Component/Platform";
import Reporting from "./Component/Reporting";
import WhyChoose from "./Component/WhyChoose";

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
