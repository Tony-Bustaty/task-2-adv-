import "./App.css";
import Explore from "./components/Explore/Explore";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Header/>
      <div className="main">

      <Hero/>
      <Services/>
      <Testimonials/>
      <FAQ/>
      <Explore/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
