import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/es/integration/react";
import { withStyles } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './style/theme';
import cn from 'classnames';
import PickACard from './PickACard';
import {
    Topbar,
} from './components';
import reducer from './store/reducers';
import rootSaga from './store/sagas';

const purgeOnLoad = false;
const purgeStore = () => {
    console.log(`Purging redux`);
    localStorage.clear();
};
if (purgeOnLoad) {
    purgeStore();
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);
// const persistor = persistStore(store);

const styles = () => ({
    container: {
        margin: 'auto',
        maxWidth: 800,
    }
});

class PlayingCards extends Component {

    componentDidMount() {
        // window.document.title = window.pwaConfig.brand.title;
    }

    render() {
        const { classes } = this.props
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={createMuiTheme(theme)}>
                    {/* <PersistGate loading={null} persistor={persistor}> */}
                    <Topbar />
                    <div className={cn(classes.container)}>
                        <PickACard />
                    </div>
                    {/* </PersistGate> */}
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(PlayingCards);
