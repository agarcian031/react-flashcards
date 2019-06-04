import React from 'react'
import {Card, Reveal, Header, Button} from 'semantic-ui-react'; 

const Flashcard = ({id, front, back, remove})  => (
  <Card color='red' raised >
    <Card.Content>
      <Header>{front}</Header>
      <Header>{back}</Header>
    </Card.Content>
    <Card.Content extra>
      <Button.Group>
        <Button positive>Edit</Button>
        <Button.Or />
        <Button negative onClick={() => remove(id)}>Delete</Button>
    </Button.Group>
  </Card.Content>
  </Card>

)

export default Flashcard; 


{/* <Reveal active animated='move'>
    <Reveal.Content visible>
    <Header>{front}</Header>
    </Reveal.Content>
    <Reveal.Content hidden>
     <Header as="h3">{back}</Header>
    </Reveal.Content>
  </Reveal> */}