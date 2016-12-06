import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';


export default class extends React.Component {

  constructor () {
    super();
    this.state = Object.assign({artistQuery: '', songQuery: ''}, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
	this.handleSongInput = this.handleSongInput.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe(()=>{
			this.setState(store.getState());
			})
	}

	componentWillUnmount () {
		this.unsubscribe();
	}

	handleArtistInput (theArtist) {		//handleArtistInput
		this.setState({artistQuery: theArtist});
	}

	handleSongInput (theSong) {			//handleSongInput
		this.setState({songQuery: theSong});
	}

	handleSubmit() {
		if (this.state.artistQuery && this.state.songQuery) {
			store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
		     
		}

	}

	render () {
		return (
			<Lyrics 
				artistQuery={this.state.artistQuery}
				songQuery={this.state.songQuery}
      			text={this.state.lyrics.text}
      			setArtist={this.handleArtistInput}
      			setSong={this.handleSongInput}
      			handleSubmit={this.handleSubmit}
			/>
			)
	}
}