import Icon from "./Icon";

const demoPoints = [
  "Book a demo to see our all-in-one assessment platform.",
  "Take a look at our formative question bank",
  "Review summative tests",
  "View our full range of tracking and reporting tools",
  "Get a quote"
];

export default function DemoForm() {
  return (
    <section className="section demo">
      <div className="demoText">
        <h2>Register For Your Free Demo</h2>
        {demoPoints.map((item) => <p key={item}><Icon type="check" />{item}</p>)}
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
