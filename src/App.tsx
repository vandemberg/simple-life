import React from "react";
import Layout from "./components/Application/Layout";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = function () {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
};

export default App;
