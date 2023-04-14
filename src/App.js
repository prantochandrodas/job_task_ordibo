import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Payment from './Components/Payment/Payment';
import Company from './Components/Company/Company';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Payment></Payment>
        <Company></Company>
        <Service></Service>
        <Footer></Footer>
    </div>
  );
}

export default App;
