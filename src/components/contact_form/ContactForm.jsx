function ContactForm() {
  return (
    <form
      className="card contact-card reveal delay-2"
      aria-labelledby="contact-form-heading"
    >
      <input name="firstName" type="text" placeholder="First Name" />

      <input name="lastName" type="text" placeholder="Last Name" />

      <input name="instagram" type="text" placeholder="Instagram Handle" />

      <input name="phone" type="tel" placeholder="Phone Number" />

      <input name="email" type="email" placeholder="Email" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
