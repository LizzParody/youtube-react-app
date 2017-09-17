import React, { Component } from 'react'; //Find the library 'react' install as a dependency in node_modules, and assign it to the variable React
import ReactDOM from 'react-dom'; //To actually render into the dom
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB3ARWf_pG7O6TYHkNbW6VwLP4p0MLiL7o';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'Beyonce'}, (videos) => { //two arguments, an object and a callback function
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // the same as this.setState({ videos: videos })
    });
  }
  render() {
    return (
      <div>
        <SearchBar /> { /* instance of SearchBar */ }
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} // We defined a function that just update app state, we pass it as a property to video_list 
          videos={this.state.videos}/> {/* Passing props to VideoList*/}
      </div>
    );
  }
}

//Take the component and put it into the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //Get the div with the class container and put the app component into that div
