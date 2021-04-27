import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:productId" component={ProductDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
