import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM
} from '../constants';


export const onLoad = (albums, artists, playlists) =>
	({ type: RECEIVE_ALBUMS,
		albums: convertAlbums(albums),
   		artists: artists,
   		playlists: playlists	
});

