import React, { Component } from 'react'
import Flashcards from './components/Flashcards';
import FlashcardForm from './components/FlashcardForm';
import { Container, Header, Segment, Button, Divider } from "semantic-ui-react"; 


class App extends Component {
  state = {
    cards: [
      {
        id: 1, 
        front: "Question", 
        back: "Answer"
      },
      {
        id: 2, 
        front: "Question", 
        back: "Answer"
      },
      {
        id: 3, 
        front: "Question", 
        back: "Answer"
      },
      {
        id: 4, 
        front: "Question", 
        back: "Answer"
      },
    ],
    showCard: true, 
    showForm: false,
  }

  toggleForm = () => this.setState( {showForm: !this.state.showForm} )

  toggleCard = () => this.setState({ showCard: !this.state.showCard })

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
 
  addCard = (cardData) => {
    let card = {id: this.getId(), ...cardData }; 
    this.setState({cards: [...this.state.cards, card], }); 
  }; 

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card
    });
    
    this.setState({cards, });
  }; 

  render() {
    return (
      <Container textAlign="center" style={{paddingTop: "15px", letterSpacing:"3px"}}>
        <Header as="h1">React Flashcards</Header>
        <Divider/>
        <br/>
        <Button onClick={this.toggleForm}>Create A Card</Button>
        <Segment basic>
          {this.state.showForm ? <FlashcardForm add={this.addCard} /> : null}
        </Segment>
        <Divider/>
        <br/>
        <Flashcards cardsList={this.state.cards} remove={this.removeCard}/>
      </Container>
    )
  }
}

export default App; 
