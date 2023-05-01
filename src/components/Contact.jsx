function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("contactForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    form.reset();
    alert("Thank you for your message. We will get back to you shortly.")
  };

  return (
    <>
    <div>
      <h2 id="contact">Contact Us</h2>

      <form id="contactForm">
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Phone:</label>
        <input type="tel" name="phone" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
      </div>
    </>
  );
}

export default Contact;

// Path: src/components/Contact.jsx