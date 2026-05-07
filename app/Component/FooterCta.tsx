import Logo from "./Logo";

export default function FooterCta() {
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
