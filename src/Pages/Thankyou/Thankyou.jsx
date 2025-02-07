import React from "react";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css"; // Custom styles

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h2>🎉 Thank You! 🎉</h2>
        <p>Your feedback has been submitted successfully.</p>
        <button onClick={() => navigate("/")} className="home-button">
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
