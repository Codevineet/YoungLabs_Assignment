import { useState } from "react";
import "./Greeting.css"; 

const Greeting = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching greeting:", error);
      setMessage("Failed to fetch greeting.");
    }
  };

  return (
    <div className="greeting-container">
      <h2>Get Your Greeting</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="greeting-input"
        />
        <button onClick={getGreeting} className="greeting-button">Get Greeting</button>
      </div>
      <h3 className="greeting-message">{message}</h3>
    </div>
  );
};

export default Greeting;
