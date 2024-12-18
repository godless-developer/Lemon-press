import "./styles/lemon.css";
import "./styles/towhimol.css";
import "./styles/ads.css";
import "./styles/ontsloh.css";
import "./styles/scrollSide.css"
import Header from "./components/Header";
import Scrol from "./components/Towhimol";
import Ads from "./components/ads";
import Ontsloh from "./components/Ontsloh";
import ThreeNews from "./components/ThreeNews";
import ThreeNews1 from "./components/ThreeNews1";
import ScrollSides from "./components/ScrollSide";
const App = () => {
  return (
    <div className="body">
      <Header />
      <Ads />
      <ScrollSides />
    </div>
  );
};
export default App;
