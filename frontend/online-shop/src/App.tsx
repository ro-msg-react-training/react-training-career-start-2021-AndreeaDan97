import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products/:productId" component={ProductDetails} />
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
