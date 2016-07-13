declare module "redux-promise-track" {
    export let promiseTrackReducer: any;
    export let promiseTrackMiddleware: any;
    export let getLoadingState: (state: any, actionType: string, actionId?: string) => any;
}
