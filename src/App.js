import logo from "./logo.svg";
import "./App.css";
import HeadNav from "./layout/HeadNav";
import SiderNav from "./layout/SiderNav";
import FootNav from "./layout/FootNav";
import MainPage from "./layout/MainPage";

function App() {
  return (
    <div class="grid-container">
      <div class="item1">
        <HeadNav />
      </div>
      <div class="item2">
        <SiderNav />
      </div>
      <div class="item3">
        <MainPage />
      </div>

      <div class="item4">
        <FootNav />
      </div>
    </div>
  );
}

export default App;
