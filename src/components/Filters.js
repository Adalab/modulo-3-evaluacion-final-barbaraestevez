import React from "react";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  
}

export default CharacterList;