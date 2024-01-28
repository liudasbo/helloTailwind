import Pricing from "./components/Pricing/Pricing.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import About from "./components/about/About.jsx";
import Feature from "./components/feature/Feature.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Feature />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
