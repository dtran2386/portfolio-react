import { contact } from "../../utils/sections";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
      <form name="contact-form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="text" placeholder="Enter your email" name="email" />
        <textarea placeholder="Enter your message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
