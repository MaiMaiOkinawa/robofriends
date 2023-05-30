import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

// Create a STATE
// When you use STATE you want to use 'class'
// 'Smart Component'
class App extends Component {
  //Add STATE
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  // Everytime we get inputs in searchBox, we want to display the event
  onSearchChange = (event) => {
    //Filtered searchfield. To change the STATE, use 'setState'
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        {/*
            SearchBox and CardList need to communicate in order to complete the searchBox
            We need to use "STATE" 
            Parent is STATE & Child component is PROPS
            */}
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
