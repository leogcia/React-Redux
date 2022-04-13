import { types } from "../types";

// Muestra una alerta:

export const mostarAlerta = alerta => {
    return (dispatch) => {
        dispatch( crearAlerta(alerta) )
    }
}

const crearAlerta = alerta => ({
    type: types.mostarAlerta,
    payload: alerta
});

//ocultar alerta:
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch( ocultarAlerta() )
    }
};

const ocultarAlerta = () => ({
    type: types.ocultarAlerta,
})  