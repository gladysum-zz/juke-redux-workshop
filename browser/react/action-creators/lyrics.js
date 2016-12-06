import {SET_LYRICS} from '../constants';

export const setLyrics = function(newLyrics) {
	return {
		type: SET_LYRICS,
		text: newLyrics
	}
}

