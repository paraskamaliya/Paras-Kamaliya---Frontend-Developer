import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Roadmap from "./Components/Roadmap";
import Token from "./Components/Token";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Roadmap />
      <Token />
      <Footer />
    </div>
  );
}

export default App;
