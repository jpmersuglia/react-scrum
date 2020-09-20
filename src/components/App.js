import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Header from '../components/Header'
import Scrums from '../components/Scrums'
import Blockers from '../components/Blockers'
import '../public/styles/index.css';

function App() {
        return (
            <Router>
                    <Header />
                    <Switch>
                        <Route path="/Scrums">
                            <Scrums />
                        </Route>
                        <Route path="/Blockers">
                            <Blockers />
                        </Route>
                    </Switch>
            </Router>
        )
}

export default App;