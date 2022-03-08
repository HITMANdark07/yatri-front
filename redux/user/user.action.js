import { userActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
        type: userActionTypes.SET_CURRENT_USER,
        payload: user 
})

export const toggleShow =  () => ({
        type:userActionTypes.TOGGLE_SHOW_MODAL
});