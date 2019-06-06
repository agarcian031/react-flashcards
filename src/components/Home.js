import React from 'react'
import {Segment, Header, Divider, Card} from 'semantic-ui-react'

const Home = () => {
  return (
    <Segment padded raised color="red">
      <Header as="h1" textAlign="center">Home Page</Header>
      <Divider/>
      <Card.Group>
        <Card color="red" raised>
          <Card.Content textAlign="center">
            Flashcard Game
          </Card.Content>
          <Card.Content extra>
            Press the link on the nav to play the game
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  )
}

export default Home
