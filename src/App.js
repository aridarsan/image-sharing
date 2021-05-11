import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import ImageDetail from './components/ImageDetail';


function App() {
  return (
    <div className="App">
      <div>
      <Switch>
      <Route path="/detail/">
          <ImageDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;
