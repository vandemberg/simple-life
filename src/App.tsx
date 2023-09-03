import Home from "./pages/Home";
import Layout from "./pages/Application/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = function () {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
