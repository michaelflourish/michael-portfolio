import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        I am open to full-time software development opportunities, especially
        onsite or hybrid roles in Connecticut.
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p className="success-message">
          Thank you! Your message has been received.
        </p>
      )}
    </section>
  );
}

export default Contact;