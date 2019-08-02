import React from 'react'
import './MyPokes.css'
import Paper from '@material-ui/core/Paper'
import Poke from './Poke'

class MyPokes extends React.Component {
    render() {
        return (
            <div className="flex-center">
                <Paper className="my-pokes" style={{ backgroundColor: "#6ac5e8db", color: "#fff" }}>
                    sadas
                    <div className="container-my-pokes">
                        <Poke id={1} name="buraues" />
                        <Poke id={1} name="buraues" />
                        <Poke id={1} name="buraues" />
                    </div>
                </Paper>
            </div>
        )
    }
}

export default MyPokes

