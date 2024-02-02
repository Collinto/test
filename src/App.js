import styles from './App.css';
import './global.css'
import PricingCard from './components/pricingCard/pricingCard'

function App() {
  return (
    <div className="App">
      <PricingCard
      label= "Pro"
      pricelabel ="#300/"
      duration = "year"
      image="/images/Screenshot (3).png"
      imgA="Menu"
      />
      <PricingCard
      label= "Pro"
      pricelabel ="#300/"
      duration = "year"
      image="/images/Screenshot (3).png"
      imgA="Menu"
      />
      <PricingCard
      label= "Pro"
      pricelabel ="#300/"
      duration = "year"
      image="/images/Screenshot (3).png"
      imgA="Menu"
      />
    </div>
  );
}

export default App;
