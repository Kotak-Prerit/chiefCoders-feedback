import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./FeedbackForm.css";
import banner from "../../Assets/The Chief Coders.png";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clarity: "",
    engagement: "",
    effectiveness: "",
    improvement: "",
    additionalFeedback: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_85f238f",
        "template_jncxbp9",
        formData,
        "g4QhypsSQjinTNCqo"
      );

      setStatus("Thank you for your feedback!");
      setFormData({
        name: "",
        email: "",
        clarity: "",
        engagement: "",
        effectiveness: "",
        improvement: "",
        additionalFeedback: "",
      });

      setTimeout(() => {
        navigate("/thank-you"); // Redirect to Thank You page after 2 seconds
      }, 500);
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Enable button after sending
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-box">
        <img src={banner} alt="banner" className="banner" />
        <h2>The Chief Coders (M_44B)</h2>
        <p>Your feedback helps us improve! 🚀</p>

        <form onSubmit={handleSubmit} className="feedForm">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />

          <label className="formlabel">How clear was our explanation?</label>
          <select
            name="clarity"
            value={formData.clarity}
            onChange={handleChange}
            required
            className="select-field"
          >
            <option value="">Select an option</option>
            <option value="Very Clear">Very Clear</option>
            <option value="Somewhat Clear">Somewhat Clear</option>
            <option value="Confusing">Confusing</option>
          </select>

          <label className="formlabel">
            Did the presentation keep you engaged?
          </label>
          <select
            name="engagement"
            value={formData.engagement}
            onChange={handleChange}
            required
            className="select-field"
          >
            <option value="">Select an option</option>
            <option value="Very Engaging">Very Engaging</option>
            <option value="Somewhat Engaging">Somewhat Engaging</option>
            <option value="Not Engaging">Not Engaging</option>
          </select>

          <label className="formlabel">
            Do you think our system can effectively detect drug trafficking?
          </label>
          <select
            name="effectiveness"
            value={formData.effectiveness}
            onChange={handleChange}
            required
            className="select-field"
          >
            <option value="">Select an option</option>
            <option value="Yes, definitely">Yes, definitely</option>
            <option value="Somewhat">Somewhat</option>
            <option value="Not really">Not really</option>
          </select>

          <input
            type="text"
            name="improvement"
            placeholder="One area we should improve?"
            value={formData.improvement}
            onChange={handleChange}
            className="input-field"
          />

          <textarea
            name="additionalFeedback"
            placeholder="Any additional feedback?"
            value={formData.additionalFeedback}
            onChange={handleChange}
            rows="3"
            className="textarea-field"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`submit-button ${loading ? "sending" : ""}`}
          >
            {loading ? "Sending..." : "Submit Feedback"}
          </button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default FeedbackForm;
