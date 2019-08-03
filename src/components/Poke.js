import React from 'react'
import Card from '@material-ui/core/Card'
import './Poke.css'
import DetailPokeContainer from '../containers/DetailPokeContainer'
import { ImagePoke } from '../assets/ListPokeImage'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Remove from '@material-ui/icons/Remove';
import { connect } from 'react-redux'
import { removeMyPoke } from '../actions'

class Poke extends React.Component {

    constructor(props){
        super(props)

        this.state = { open : false, selected : false }
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

    handleSelect = () => {
        if(this.props.enableDetail)
            this.setState({ open : true })
        if(this.props.enableSelect)
            this.setState({ selected : !this.state.selected })

    }

    removeMe = () => {
        const poke = { id : this.props.id, name : this.props.name }
        this.props.removePoke(poke)
    }

    render() {
        let { id, name, enableDetail } = this.props
        return(
            <>
        <Card className="poke" onClick={this.handleSelect} style={this.state.selected ? {background: "#afc1c7"} : {} } >
            {this.state.selected ? 
           <Button onClick={this.removeMe} align="right" size="small" className="remove-btn">
                <Remove />
            </Button>
                :""}
            <div className="poke-no">{id}</div>
            <div className="poke-description">
                <img alt={name} src={ImagePoke[id]} />
                <div>{name}</div>
            </div>
        </Card>
        {(this.state.open && enableDetail) ? <DetailPokeContainer open={this.state.open} id={this.props.id} handleClose={this.handleCloseDetail} /> : "" }
        </>
        )

    }
}


const mapDispatchProp = (dispatch) => ({
    removePoke : (poke) =>  dispatch(removeMyPoke(poke))
})

export default connect( null, mapDispatchProp, null, { pure : false })(Poke);