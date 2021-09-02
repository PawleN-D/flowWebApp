import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Header";

import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Navbar />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch> */}
      <Footer />
    </Router>
  );
}

export default App;
