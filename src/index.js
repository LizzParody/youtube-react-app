import React, { Component } from 'react'; //Find the library 'react' install as a dependency in node_modules, and assign it to the variable React
import ReactDOM from 'react-dom'; //To actually render into the dom
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB3ARWf_pG7O6TYHkNbW6VwLP4p0MLiL7o';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => { //two arguments, an object and a callback function
      this.setState({ videos }); // the same as this.setState({ videos: videos })
    });
  }
  render() {
    return (
      <div>
        <SearchBar /> { /* instance of SearchBar */ }
        <VideoList videos={this.state.videos}/> {/* Passing props*/}
      </div>
    );
  }
}

//Take the component and put it into the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //Get the div with the class container and put the app component into that div
