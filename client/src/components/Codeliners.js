import React, { Component } from "react";
import axios from "axios";

class Codeliners extends Component {
  state = {
    name: "",
    snippets: [],
    shuffledSnippets: []
  };
  componentDidMount() {
    const codelineId = this.props.match.params.id;
    this.fetchCodeline(codelineId);
}

// Randomize codlines in the map 

fetchCodeline = (codelineId) => {
    axios.get(`/api/codelines/${codelineId}`).then(res => {
        this.setState({
            name: res.data.name,
            snippets: res.data.snippets
        });
        this.shuffleSnippets()
    });
  };

  // Shuffle snippets into shuffledSnippets

  shuffleSnippets = () => {
    let input = [...this.state.snippets]
    for (var i = input.length-1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    console.log(input)
    this.setState({ shuffledSnippets: input }) 
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {this.state.shuffledSnippets.map(snippet => (
          <div key={snippet.id}>
            <h4>{snippet.snippets}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Codeliners;
