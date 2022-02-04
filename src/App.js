import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Todo from "./pages/todo/todo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Header headerName="Prashanth Reddy" />
      <div className="App" style={{ height: "80vh" }}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
