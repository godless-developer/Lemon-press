import "./styles/lemon.css";
import "./styles/towhimol.css";
import "./styles/ads.css";
import "./styles/ontsloh.css";
import Header from "./components/Header";
import Scrol from "./components/Towhimol";
import Ads from "./components/ads";
import Ontsloh from "./components/Ontsloh";
import ThreeNews from "./components/ThreeNews";
const App = () => {
  return (
    <div className="body">
      <Header />
      <Ads />
      <div className="medkv">
        <Ontsloh />
        <Scrol />
        <Ontsloh />
        <Scrol />
        <Ontsloh />
        <Scrol />
        <Ontsloh />
        <Scrol />
        <Ontsloh />
        <Scrol />
        <Ontsloh />
        <Scrol />
      </div>
    </div>
  );
};
export default App;
