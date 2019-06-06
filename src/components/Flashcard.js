import React from 'react'
import {Card, Reveal, Header, Button} from 'semantic-ui-react'; 

class Flashcard extends React.Component { 
  state = { showCard: true}

  toggleCard = () => this.setState( {showCard: !this.state.showCard} )

  
  render () {
    return (
      <Card color="red" raised >
        <Card.Content onClick={ this.toggleCard}>
        {this.state.showCard ? <Header>{this.props.front}</Header> : <Header>{this.props.back}</Header>}
        </Card.Content>
        <Card.Content extra> 
          <Button.Group>
            <Button positive>Edit</Button>
            <Button.Or />
            <Button negative onClick={() => this.props.remove(this.props.id)} >Delete</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}


export default Flashcard; 



// const Flashcard = ({id, front, back, remove})  => (
//   <Card color='red' raised >
//     <Card.Content>
//       <Header>{front}</Header>
//       <Header>{back}</Header>
//     </Card.Content>
//     <Card.Content extra>
//       <Button.Group>
//         <Button positive>Edit</Button>
//         <Button.Or />
//         <Button negative onClick={() => remove(id)}>Delete</Button>
//     </Button.Group>
//   </Card.Content>
//   </Card>

// )