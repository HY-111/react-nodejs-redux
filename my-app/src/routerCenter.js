import React, {Component} from 'react';
import { HashRouter,Route, Switch } from 'react-router-dom';
import HomePage from './Home';





class RouterCenter extends Component {

    

    render() {
            return (
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </HashRouter>  
            );
    }
}


export default RouterCenter;
