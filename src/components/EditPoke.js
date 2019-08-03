import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types'
import { ImagePoke } from '../assets/ListPokeImage'
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux'
import { removeMyPoke, updatePoke } from '../actions'
import TextField from '@material-ui/core/TextField'

class EditPoke extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false, poke : {} }
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        poke: PropTypes.object
    }

    componentDidMount() {
        const poke =  this.props.getPoke(this.props.id)
        this.setState({ poke : poke })
    }

    removeMe = () => {
        this.props.removePoke(this.state.poke)
        this.props.handleClose()
    }

    changeNickName = (evt) =>{
        const name = evt.target.value
        this.setState({ poke: { ...this.state.poke, name : name } })
    }

    onLeft = () => {
        this.props.updatePoke(this.state.poke)
        this.props.handleClose()
    }

    render() {
        const { id, name, height, weight } = this.state.poke
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
            >
            <div className="head-edit-poke">
                    <h3>{id}. &nbsp;</h3>
                    <TextField  
                onChange={this.changeNickName}
                value={name}
                label="Judul"
                variant="outlined"
                margin="dense"
                placeholder="Masukan judul buku" /> 
                </div>
                <DialogContent className="detail-content">
                    <img src={ImagePoke[id]} alt={name} />
                    <Chip
                        style={{ margin: "5px" }}
                        size="medium"
                        variant="outlined"
                        color="primary"
                        label={"Height : " + height}
                    />
                    <Chip
                        style={{ margin: "5px" }}
                        size="medium"
                        variant="outlined"
                        color="primary"
                        label={"Weight : " + weight}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.removeMe} align="left" style={{ color: "red" }}>Remove</Button>
                    <Button onClick={this.onLeft} >Done</Button>
                </DialogActions>
            </Dialog>)
    }
}

const mapStateProp = ({ MyPokeState }) => {
    const getPoke = (id) => (MyPokeState.filter(s => s.id == id)[0]);
    return { getPoke }
}

const mapDispatchProp = (dispatch) => ({
    removePoke : (poke) =>  dispatch(removeMyPoke(poke)),
    updatePoke : (poke) => dispatch(updatePoke(poke))
})

export default connect( mapStateProp, mapDispatchProp, null, { pure : false })(EditPoke);