import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    selected: [],
    score: 0,
    highestScore: 0
  };

  removeFriend = id => {
    var isSelected = this.state.selected.some(friend => friend.id === id);
    if(isSelected){

    }else{
      this.setState({ score: this.state.score + 1 });
      const selectedFriend = this.state.friends.find(friend => friend.id === id);
      this.state.selected.push(selectedFriend)
    }
    const friends = this.state.friends.sort(friend => friend.id === id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
   
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Navbar></Navbar>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
