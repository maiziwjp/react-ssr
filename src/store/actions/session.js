import * as types from '../action-type';
export default {
    login(user){
        return function (dispatch,getState,request) {
            return request.post('/api/login', user).then(result => {
                let data = result.data;
                dispatch({
                    type: types.SET_SESSION,
                    payload: data.data
                });
            });
        }
    },
    logout(){
        return function (dispatch,getState,request) {
            return request.get('/api/logout').then(result => {
                let data = result.data;
                dispatch({
                    type: types.SET_SESSION,
                    payload: data.data
                });
            });
        }
    },
    getUser(){
        return function (dispatch,getState,request) {
            return request.get('/api/user').then(result => {
                let data = result.data;
                dispatch({
                    type: types.SET_SESSION,
                    payload: data.data
                });
            });
        }
    }
}