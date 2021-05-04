import ProductList from "./components/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/PageNotFound";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Footer from "./components/Footer";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import UpdateForm from "./components/UpdateForm";
import AddForm from "./components/AddForm";

const store = configureStore({});

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/products">
                <Redirect to="/" />
              </Route>
              <Route path="/products/add" component={AddForm} />
              <Route
                exact
                path="/products/:productId"
                component={ProductDetails}
              />
              <Route
                path="/products/:productId/update"
                component={UpdateForm}
              />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
