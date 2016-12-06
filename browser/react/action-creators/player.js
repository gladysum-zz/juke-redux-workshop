import {
	START_PLAYING,
	STOP_PLAYING,
	SET_CURRENT_SONG,
	SET_LIST
} from '../constants';

export const startPlaying = function() {
	return {
		type: START_PLAYING
	}	
}

export const stopPlaying = function() {
	return {
		type: STOP_PLAYING
	}	
}

export const setCurrentSong = function(song) {
	return {
		type: SET_CURRENT_SONG,
		currentSong: song
	}	
}

export const setCurrentSongList = function(songList) {
	return {
		type: SET_LIST,
		currentSongList: songList
	}	
}


