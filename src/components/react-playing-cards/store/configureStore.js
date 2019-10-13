import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';
import initialState from './initialState';

const persistConfig = {
    key: "listingslab",
    storage,
};

const rootReducer = persistReducer(persistConfig, reducers);

export function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk)),
    )
};
