import React, { Component } from 'react'; //even if we don't use it here we still need to import it

class SearchBar extends Component { //new class called SearchBar and give it access to all the functionality that React.Component has
  render() { //Every class component needs to have a defined render method
    return <input onChange={event => console.log(event.target.value)}/>;
  } //onChange is the name of the event, this.onInputChange is the reference to the event handler

}
export default SearchBar;
