import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="select-days" element={<Step2 />} />
          <Route path="select-days/select-goal" element={<Step3 />} />
          <Route path="select-days/select-goal/final" element={<Step4 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
