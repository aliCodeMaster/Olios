import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Category, Home, Single} from "./Components/module";
import DefaultLayout from "./Layouts/DefaultLayout";
import {CategoryPage, HomePage, ProductPage} from "./Configs/links";

class App extends Component {
    render() {
        return (
            <Router>
                <DefaultLayout>
                    <Switch>
                        <Route path={HomePage} exact component={Home} />
                        <Route path={CategoryPage} component={Category} />
                        <Route path={CategoryPage + "/:slug"} component={Category} />
                        <Route path={ProductPage + "/:slug"} component={Single} />
                    </Switch>
                </DefaultLayout>
            </Router>
        );
    }
}

export default App;