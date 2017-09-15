import React, { Component } from 'react'; //even if we don't use it here we still need to import it

class SearchBar extends Component { //new class called SearchBar and give it access to all the functionality that React.Component has
  constructor(props) { //is the first and only function called automatically whenever a new instance f the class is created
    super(props); //calling the parent method Component

    this.state = { term: '' };
  }

  render() { //Every class component needs to have a defined render method
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value }) }
        />
      </div>
    );
  }

}
export default SearchBar;