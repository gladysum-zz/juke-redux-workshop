import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

export default class extends React.Component {

  constructor () {
    super();
    this.state = Object.assign({artistQuery: '', songQuery: ''}, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
	this.handleSongInput = this.handleSongInput.bind(this);
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
		console.log('Inside handleSubmit: ');
		console.log(this.state);
	}

	render () {
		return (
			<Lyrics 
				artistQuery={this.state.artistQuery}
				songQuery={this.state.songQuery}
      			text={this.state.text}
      			setArtist={this.handleArtistInput}
      			setSong={this.handleSongInput}
      			handleSubmit={this.handleSubmit}
			/>
			)
	}
}