import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
import clientRequest from "../client/request";
import createServerRequest from "../server/request";

export function getServerStore(req) {
    return createStore(reducers,applyMiddleware(thunk.withExtraArgument(createServerRequest(req)),logger));
}
export function getClientStore() {
    let initState=window.context.state;
    return createStore(reducers,initState,applyMiddleware(thunk.withExtraArgument(clientRequest),logger));
}