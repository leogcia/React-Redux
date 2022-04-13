import { combineReducers } from 'redux';
import alertaReducer from './alertaReducer';
import productoReducer from './productoReducer';


export default combineReducers({
    productos: productoReducer,
    alerta: alertaReducer
})