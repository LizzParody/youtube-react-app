import React from 'react'; //Find the library 'react' install as a dependency in node_modules, and assign it to the variable React
import ReactDOM from 'react-dom'; //To actually render into the dom
import YTSeach from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB3ARWf_pG7O6TYHkNbW6VwLP4p0MLiL7o';

//Create a component
const App = () => { //Create the class App
  return (
    <div>
      <SearchBar /> { /* instance of SearchBar */ }
    </div>
  );
}

//Take the component and put it into the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //Get the div with the class container and put the app component into that div
