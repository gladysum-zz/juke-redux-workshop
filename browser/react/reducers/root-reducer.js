import {SET_LYRICS} from '../constants';

const initialState = {
	text: ""
}

export const reducer = function(prevState = initialState, action) {
	switch(action.type) {
		case SET_LYRICS:
			return Object.assign({}, prevState, { text: action.text });
		default:
			return prevState;	
	}
}