import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  };

  return (
    <div className="container section">
      <div className="page-header">
        <h1>Contact</h1>
        <p>Send a message. This form is for demo only.</p>
      </div>

      <div className="two-col">
        <article className="card">
          <h3>Get in touch</h3>
          <p className="muted">We would love to hear from you.</p>
          <ul className="contact-info">
            <li><strong>Email</strong><span>example@email.com</span></li>
            <li><strong>Phone</strong><span>+91 98765 43210</span></li>
            <li><strong>Location</strong><span>India</span></li>
          </ul>
        </article>

        <form className="card form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Write your message" required />

          <button type="submit" className="btn btn-primary">Send Message</button>
          {sent && <p className="success">Thanks! Your message was sent.</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;