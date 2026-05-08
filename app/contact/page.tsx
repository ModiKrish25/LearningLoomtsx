// "use client";

// export default function Contact() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());
//     console.log("Form Data Submitted:", data);
//   };

//   return (
//     <main>
//       <section className="section contactPage">
//         <div className="contactIntro">
//           <span>Contact us</span>
//           <h1>Talk to LearningLoom</h1>
//           <p>Tell us a little about your school, pupils, or learning goals and we will help you find the right next step.</p>
//         </div>

//         <form className="contactForm" onSubmit={handleSubmit}>
//           <div className="formRow">
//             <label>
//               Name
//               <input type="text" name="name" placeholder="Your full name" required />
//             </label>
//             <label>
//               Email
//               <input type="email" name="email" placeholder="you@example.com" required />
//             </label>
//           </div>

//           <div className="formRow">
//             <label>
//               Number
//               <input type="tel" name="phone" placeholder="Phone number" required />
//             </label>
//             <label>
//               School or organisation
//               <input type="text" name="school" placeholder="School name" />
//             </label>
//           </div>

//           <label>
//             Message
//             <textarea name="message" placeholder="How can we help?" rows={7} required />
//           </label>

//           <button type="submit">Send Message</button>
//         </form>
//       </section>
//     </main>
//   );
// }




"use client";

import { useState } from "react";

export default function Contact() {
  // State for storing form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
  };

  return (
    <main>
      <section className="section contactPage">
        <div className="contactIntro">
          <span>Contact us</span>

          <h1>Talk to LearningLoom</h1>

          <p>
            Tell us a little about your school,
            pupils, or learning goals and we
            will help you find the right next
            step.
          </p>
        </div>

        <form
          className="contactForm"
          onSubmit={handleSubmit}
        >
          <div className="formRow">
            <label>
              Name

              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="formRow">
            <label>
              Number

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              School or organisation

              <input
                type="text"
                name="school"
                placeholder="School name"
                value={formData.school}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Message

            <textarea
              name="message"
              placeholder="How can we help?"
              rows={7}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}