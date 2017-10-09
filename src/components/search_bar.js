import React, { Component } from 'react'; //even if we don't use it here we still need to import it

class SearchBar extends Component { //new class called SearchBar and give it access to all the functionality that React.Component has
  constructor(props) { //is the first and only function called automatically whenever a new instance of the SearchBar class is created
    super(props); //calling the parent method Component

    this.state = { term: '' };
  }

  render() { //Every class component needs to have a defined render method and JSX inside
    return (
      <div className="search-bar">
      <img src='logo.png'/>
        <input
          value={this.state.term} //Controlled component, the state is telling the input what it should be, not the other way around
          onChange={event => this.onInputChange(event.target.value)} //The same as {event => this.setState({ term: event.target.value})}
        />
        <button onClick={() => this.state.videos}><i className="fa fa-search"></i></button>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
