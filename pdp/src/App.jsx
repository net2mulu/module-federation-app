import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";
import PDPcontent from "./PDPcontent";
import "./index.scss";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  // const [showheader, setShowheader] = useState(false);
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl mt-0">
        {/* <button onClick={() => setShowheader(!showheader)}>show header</button> */}
        {true && (
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
          </Suspense>
        )}
        <Routes>
          <Route path="/product/:id" element={<PDPcontent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
