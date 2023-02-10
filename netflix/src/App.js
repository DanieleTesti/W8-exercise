import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyBody from "./Components/MyBody";
import MyNavBar from "./Components/MyNavBar";
// import Corpo from "./Components/prova";
// import "./style.scss";
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyBody />
      <MyFooter />
      {/* <Corpo /> */}
    </div>
  );
}

export default App;
