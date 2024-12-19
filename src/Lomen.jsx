import "./styles/lemon.css";
import "./styles/towhimol.css";
import "./styles/ads.css";
import "./styles/ontsloh.css";
import "./styles/scrollSide.css"
import "./styles/threenews.css"
import "./styles/threenews1.css"
import "./styles/emailboxs.css"
import "./styles/News.css"
import Header from "./components/Header";
import Scrol from "./components/Towhimol";
import Ads from "./components/ads";
import Ontsloh from "./components/Ontsloh";
import ThreeNews from "./components/ThreeNews";
import ThreeNews1 from "./components/ThreeNews1";
import ScrollSides from "./components/ScrollSide";
import { EmailBoxs } from "./components/EmailBox";
import { News } from "./components/News";
const App = () => {
  return (
    <div className="body">
      <Header />
      <Ads />
      <div className="body-content1">
        <Ontsloh />
        <ThreeNews />
      </div>
      <div className="body-content2">
        <Scrol />
        <ScrollSides />
        <ThreeNews1 />
      </div>
      <EmailBoxs />
      <div className="body-content3">
        <News />
      </div>
    </div>
  );
};
export default App;
