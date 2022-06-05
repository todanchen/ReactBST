import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import SplitLineComponent from "./components/splitLineComponent";
import HomeComponent from "./pages/home/homePage";
import SplunkFileDownPage from "./pages/splunk-file-down/splunkFileDown";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wholeLayout">
          <section className="left">
            <Sidebar />
          </section>
          <section className="right">
            <div className="content">
              <SplitLineComponent />
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/splunk_api" element={<SplunkFileDownPage />} />
              </Routes>
            </div>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
