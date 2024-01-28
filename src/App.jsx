import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";
import About from "./components/about/About";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

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
