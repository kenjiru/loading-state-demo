import {FluxStandardAction} from "flux-standard-action";
import {Promise} from "es6-promise";

export const GET_DATA: string = "GET_DATA";

export function getData(): FluxStandardAction {
    return {
        type: GET_DATA,
        payload: new Promise((resolve, reject) => {
            setTimeout(resolve, 1500);
        })
    }
}
