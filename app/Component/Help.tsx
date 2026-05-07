import { timeline } from "./data";

export default function Help() {
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
