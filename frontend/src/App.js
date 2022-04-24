import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route to="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
