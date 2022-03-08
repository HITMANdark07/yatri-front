import {userActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser:null,
    show:false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser:action.payload,
            }
        case userActionTypes.TOGGLE_SHOW_MODAL :
            return {
                ...state,
                show: !state.show
            }
        default:
            return state;
    }
}

export default userReducer;