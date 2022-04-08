import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        // Condicionante para prevenir en caso de que el navegador no tenga redux dev tools intalado:
        typeof window === 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;