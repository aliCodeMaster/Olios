import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Category, Home} from "./Components/module";
import DefaultLayout from "./Layouts/DefaultLayout";
import {CategoryPage, HomePage} from "./Configs/links";

class App extends Component {
    render() {
        return (
            <Router>
                <DefaultLayout>
                    <Switch>
                        <Route path={HomePage} exact component={Home} />
                        <Route path={CategoryPage} component={Category} />
                        <Route path={CategoryPage + "/:slug"} component={Category} />
                    </Switch>
                </DefaultLayout>
            </Router>
        );
    }
}

export default App;