import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from 'components/Header'
import Home from "pages/Home";
import Cart from "pages/Cart";
import Footer from "components/Footer";
import Category from "pages/Category";
import NavBar from 'components/NavBar';


const Routes = () => {

    return (
        <>
            <Router>
                <Header />
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/category" component={Category} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default Routes;
