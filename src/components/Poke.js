import React from 'react'
import Card from '@material-ui/core/Card'
import './Poke.css'
import DetailPokeContainer from '../containers/DetailPokeContainer'
import { ImagePoke } from '../assets/ListPokeImage'
import PropTypes from 'prop-types'

class Poke extends React.Component {

    constructor(props){
        super(props)

        this.state = { open : false }
    }
    
    static propTypes = {
        id : PropTypes.number.isRequired,
        name : PropTypes.string.isRequired
    }

    handleOpenDetail = () => {
        this.setState({ open : true })
    }

    handleCloseDetail = () => {
        this.setState({ open : false })
    }

    render() {
        const { id, name, isDetail } = this.props
        return(
            <>
        <Card className="poke" onClick={this.handleOpenDetail}>
            <div className="poke-no">{id}</div>
            <div className="poke-description">
                <img alt={name} src={ImagePoke[id]} />
                <div>{name}</div>
            </div>
        </Card>
        {(this.state.open) ? <DetailPokeContainer open={this.state.open} id={this.props.id} handleClose={this.handleCloseDetail} /> : "" }
        </>
        )

    }
}

export default Poke;