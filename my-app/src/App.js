import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Checkout from "./pages/checkout/Checkout"

function App() {
  return (
    <div className="App">
      <nav>
		<Link to="/smartcook">똑똑한 취사병</Link>
		
      </nav>
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/counter" element={<Counter />} />
		<Route path="/input" element={<Input />} />
		<Route path="/smartcook" element={<Checkout />} />

	  </Routes>
    </div>
  );
}

export default App;
