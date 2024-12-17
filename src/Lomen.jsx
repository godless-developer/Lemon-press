import "./lemon.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div class="headers">
      <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
      <Header />
      <button class="headers-button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <button class="headers-button-read">Уншаад үзье</button>
    </div>
  );
};
export default App;
