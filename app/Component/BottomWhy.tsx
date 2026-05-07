import Icon from "./Icon";

const reasons = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nunc faucibus massa ut mollis mollis.",
  "Phasellus id diam ut odio tristique hendrerit.",
  "Proin malesuada dui vitae mollis consectetur.",
  "Mauris pellentesque neque eu purus sagittis.",
  "Ut quis lacus imperdiet justo semper pellentesque."
];

export default function BottomWhy() {
  return (
    <section className="section bottomWhy">
      <div className="greenPhoto"><img src="/assets/girl-tablet.jpg" alt="" /></div>
      <div>
        <h2>Why Us?</h2>
        <ul>{reasons.map((item) => <li key={item}><Icon type="check" />{item}</li>)}</ul>
      </div>
    </section>
  );
}

