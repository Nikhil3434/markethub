
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import WhyChoseUs from './Components/Whychoseus';
import UserTypeSection from './Components/UserTypeSection'; 
import HowItWorks from './Components/HowitWork';
import Footer from './Components/Footer';         

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChoseUs />
      <UserTypeSection />
      <HowItWorks />
      <Footer />
  
    </div>
  );
}

export default App;
