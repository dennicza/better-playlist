import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'Rock',
        songs: [
          {name: 'Black Wedding', duration: 1234},
          {name: 'Simple Man', duration: 2345},
          {name: 'Enemies', duration: 3214}
        ]
      },
      {
        name: 'Metal',
        songs: [
          {name: 'No Leaf Clover', duration: 4325},
          {name: 'Fade to Black', duration: 3425},
          {name: 'Under and Over it', duration: 3442}
        ]
      },
      {
        name: 'Industrial',
        songs: [
          {name: 'Rosenrot', duration: 2341},
          {name: 'Du Hast', duration: 4311},
          {name: 'Klavier', duration: 3244}
        ]
      },
      {
        name: 'Core',
        songs: [
          {name: 'Writings on the Wall', duration: 3322},
          {name: 'Crashed', duration: 2323},
          {name: 'Atlas', duration: 3421}
        ]
      }
    ]
  }
};

class PlaylistsCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    // let totalDuration = allSongs.length;
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration / 60 / 60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '20%', display: 'inline-block'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      serverData: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {
          this.state.serverData.user ? 
          <div>
            <h1 style={{...defaultStyle, 'font-size': '54px'}}>
              Hello {this.state.serverData.user.name}
            </h1>
            <PlaylistsCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
        
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div> : <h1 style={defaultStyle}>Loading ...</h1>
        }
      </div>
    );
  }
}

export default App;
