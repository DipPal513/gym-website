import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer.js/Footer";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import AuthProvider from "./Hooks/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ServiceDetail from "./Components/Services/ServiceDetail/ServiceDetail";
import Notfound from "./Components/Notfound/Notfound";
import Service from "./Components/Services/Service/Service";
import Services from "./Components/Services/Services";
import Registration from "./Components/Registration/Registration";
import About from "./Components/About/About";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceDetail />
            </PrivateRoute>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/about">
              <About />
            </PrivateRoute>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/contact">
              <Contact />
            </PrivateRoute>
            <Route exact path="/service">
              <Services />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
