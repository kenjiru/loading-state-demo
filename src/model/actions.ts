import * as _ from "lodash";
import {FluxStandardAction} from "flux-standard-action";
import {Promise} from "es6-promise";

export const GET_DATA: string = "GET_DATA";
export const SET_ITEM: string = "SET_ITEM";

export function getData(): FluxStandardAction {
    return createAction(GET_DATA, createNewPromise());
}

export function setItem(itemId: number): FluxStandardAction {
    return createSubAction(SET_ITEM, itemId.toString(), createNewPromise());
}

function createAction(actionType: string, payload: Promise<any>) {
    return {
        type: actionType,
        payload: payload
    }
}

function createSubAction(actionType: string, actionId: string, payload: Promise<any>) {
    return {
        type: actionType,
        payload,
        meta: {
            actionId
        }
    }
}

function createNewPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, _.random(500, 2000));
    });
}
