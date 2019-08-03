import React from 'react'
import './MyPokes.css'
import Paper from '@material-ui/core/Paper'
import Poke from './Poke'
import { connect } from 'react-redux'
import { catchPoke } from '../actions'

class MyPokes extends React.Component {
    componentDidUpdate(){
        console.log("my poke", this.props)
    }

    render() {
        let { pokes } = this.props
        return (
            <div className="flex-center">
                <Paper className="my-pokes" style={{ backgroundColor: "#6ac5e8db", color: "#fff" }}>
                    <h3 className="head-mypoke">My Pokemons</h3>
                    <div className="container-my-pokes">
                    {pokes.map((p, idx) => 
                        <Poke key={idx} id={p.id} name={p.name} enableSelect="true" /> 
                    )}
                    </div>
                </Paper>
            </div>
        )
    }
}


const mapStateProp = ({ MyPokeState }) => ({
    pokes : MyPokeState
})

export default connect( mapStateProp, null, null, { pure : false }) (MyPokes)

