import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DemoPage from "./page/DemoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<DemoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
