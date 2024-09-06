import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/SignInPage";
import SignupPage from "./Pages/SignupPage";
import Goals from "./Pages/Goals";
import Tracker from "./Pages/Tracker";
import Calendar from "./Pages/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/calendar" element={<Calendar />} />

        {/* other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
