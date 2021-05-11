import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;
