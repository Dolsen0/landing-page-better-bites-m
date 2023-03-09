import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>Better Bites</li> 
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Delicious and Healthy Food</h1>
        <p>Try our all-natural, organic, and locally sourced food.</p>
        <button>Order Now</button>
      </header>
      <section className="App-section">
        <h2>About Better Bites</h2>
        <p>Better Bites is a health food company that specializes in delicious and nutritious food. We use only the freshest and highest quality ingredients, sourced locally whenever possible.</p>
      </section>
      <section className="App-section">
        <h2>Our Menu</h2>
        <ul>
          <li>Avocado Toast - $8.99</li>
          <li>Acai Bowl - $9.99</li>
          <li>Kale Salad - $10.99</li>
          <li>Quinoa Bowl - $11.99</li>
        </ul>
        <button>Order Now</button>
      </section>
      <section className="App-section">
        <h2>Contact Us</h2>
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
      </section>
    </div>
  );
}

export default App;