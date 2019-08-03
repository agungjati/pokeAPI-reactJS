import React from 'react'
import Paper from '@material-ui/core/Paper'
import './ListPoke.css'
import Poke from './Poke'

class ListPoke extends React.Component {
  
  componentDidMount(){
    this.props.getPokes()
  }

  componentDidUpdate(){
    const { error, errorMessage } = this.props.ListPokeState
    if(error)
      console.error(errorMessage)
    
  }

  
  render() {
    let { pokes, fetching } = this.props.ListPokeState

    return (
      <div className="flex-center" style={ fetching ? { opacity: 0.5 } : { opacity: 1 }}>
        <Paper className="container-poke" style={{  backgroundColor: "#f5ae46d6" }}>
        <h3 className="head-listpoke">Available Pokemons</h3>
        <div>
        {pokes.map((p, idx) => 
          <Poke key={idx} id={p.id} name={p.name} enableDetail="true" /> 
        )}
        </div>
        </Paper>
      </div>
    )
  }
}

export default ListPoke

