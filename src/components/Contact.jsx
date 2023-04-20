function Contact() {
  return (
    <>
      <h2 id="contact">Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Phone:</label>
        <input type="tel" name="phone" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Contact;

// Path: src/components/Contact.jsx