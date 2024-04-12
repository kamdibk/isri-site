import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Navbar/Technologies/Technologies";
function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Navbar />
        {/* <Test/> */}
        <Technologies />
      </div>
      <div className="main-body">{/* <Hero /> */}</div>
    </div>
  );
}

export default App;
