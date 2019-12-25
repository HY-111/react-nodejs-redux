import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';



import _omit from 'lodash/omit';


import RouterCenter from './routerCenter';
import combineReducers from './store/combineReducers';




const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f // 配合 redux 插件 方便开发
)(createStore);

window.store = createStoreWithMiddleware(combineReducers, _omit(window.DATA, ['externalConfig']));



class App extends Component {
    render() {
        return (
            <Provider store={window.store} >
                <BrowserRouter>
                    <div id="global-container">
                        <RouterCenter />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default App;
