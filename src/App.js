import Footter from './components/Footter';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import Map from './components/Map';
import SectionEmail from './components/SectionEmail';
import SectionSlider from './components/SectionSlider';
import Specialities from './components/Specialities';
import Varaities from './components/Varaities';
import YellowKitchen from './components/YellowKitchen';
import './css/App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout />
      <SectionSlider />
      <SectionEmail />
      <Specialities />
      <Varaities />
      <Map />
      <YellowKitchen />
      <Footter />
    </div>
  );
}

export default App;
