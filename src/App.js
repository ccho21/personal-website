import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import routes;

/* import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Resume from "./containers/Resume/Resume";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home"; */

//  import containers;
import routes from "./route";
import Navigation from "./components/Navigation/Navigation";
//

import "./App.css";
//AIzaSyAlBNVUWbIRVYVXAZho8Pf8q438GAczLK4

class App extends Component {
    render() {
        console.log("app props");
        return (
            <BrowserRouter basename='/'>
                <div className='App'>
                    <div className='background-wrapper'>
                        <div className='page-wrapper'>
                            <Navigation />
                            <TransitionGroup>
                                <Switch>
                                    {routes.map(
                                        ({ path, Component, exact }) => {
                                            return (
                                                <Route
                                                    key={path}
                                                    path={path}
                                                    exact={exact}
                                                >
                                                    {route => {
                                                        return (
                                                            <CSSTransition
                                                                in={
                                                                    route.match !=
                                                                    null
                                                                }
                                                                timeout={300}
                                                                classNames='page'
                                                                unmountOnExit
                                                                exit={false}
                                                            >
                                                                <div className='page'>
                                                                    <Component
                                                                        route={
                                                                            route
                                                                        }
                                                                    />
                                                                </div>
                                                            </CSSTransition>
                                                        );
                                                    }}
                                                </Route>
                                            );
                                        }
                                    )}
                                </Switch>
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
