import { reports } from "./data";
import Icon from "./Icon";

export default function Reporting() {
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
