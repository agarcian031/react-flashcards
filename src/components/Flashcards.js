import React from 'react'
import Flashcard from './Flashcard'; 
import {Card} from 'semantic-ui-react'

const Flashcards = ({cardsList, remove}) => (
  <Card.Group itemsPerRow={4}>
    {
      cardsList.map(card => (
        <Flashcard key={card.id} {...card} remove={remove}/>
      ))
    }
  </Card.Group>
); 

export default Flashcards; 
