import * as types from '../action-type';
import axios from 'axios';
export default {
    getHomeList(){
        return function (dispatch,getState,request) {
            //http://localhost:4000/api/users
            return request.get('/api/users').then(result => {
                let list=result.data;
                dispatch({
                    type: types.SET_HOME_LIST,
                    payload:list
                });
            });
        }
    }
}