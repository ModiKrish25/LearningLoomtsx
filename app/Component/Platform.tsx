import Icon from "./Icon";

export default function Platform() {
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
