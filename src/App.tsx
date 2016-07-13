import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./model/store";
import ActiveComponent from "./ActiveComponent";

import './App.less';

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <ActiveComponent/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.body);
