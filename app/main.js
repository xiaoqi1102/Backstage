/**
 * Created by xiaoqi on 2016/9/5.
 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory,hashHistory} from 'react-router';
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
//import 'antd/dist/antd.css'
import './containers/styles/root.less'
import Routers from './router'
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
injectTapEventPlugin();
const store = configureStore();
const rootDocument = document.getElementById('content');
const history=syncHistoryWithStore(browserHistory,store);
render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                {Routers}
            </Router>
        </MuiThemeProvider>
    </Provider>
  , rootDocument);
if (module.hot) {
    module.hot.accept();
}
