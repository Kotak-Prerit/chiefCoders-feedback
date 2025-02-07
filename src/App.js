import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "./Pages/form/FeedbackForm";
import ThankYou from "./Pages/Thankyou/Thankyou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
