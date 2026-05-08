import FooterCta from "../Component/FooterCta";
import Header from "../Component/Header";

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="section contactPage">
        <div className="contactIntro">
          <span>Contact us</span>
          <h1>Talk to LearningLoom</h1>
          <p>Tell us a little about your school, pupils, or learning goals and we will help you find the right next step.</p>
        </div>

        <form className="contactForm">
          <div className="formRow">
            <label>
              Name
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>

          <div className="formRow">
            <label>
              Number
              <input type="tel" name="phone" placeholder="Phone number" required />
            </label>
            <label>
              School or organisation
              <input type="text" name="school" placeholder="School name" />
            </label>
          </div>

          <label>
            Message
            <textarea name="message" placeholder="How can we help?" rows={7} required />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>
      <FooterCta />
    </main>
  );
}
