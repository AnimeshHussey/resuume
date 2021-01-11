import "./App.scss";
import AppHeader from "./components/Header/header";
import Appcontainer from "./components/appcontainer/appcontainer";
function App() {
  return (
    <div className="App">
      <div className="header">
        <AppHeader />
      </div>
      <div className="container">
        <Appcontainer></Appcontainer>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
