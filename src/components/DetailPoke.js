import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types'
import { ImagePoke } from '../assets/ListPokeImage'
import Chip from '@material-ui/core/Chip';

class DetailPoke extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        poke: PropTypes.object
    }

    componentDidMount() {
        this.props.getPoke(this.props.id)
    }

    componentDidUpdate() {
        console.log("detail poke ", this.props.id, " ", this.props)
    }

    render() {
        const { id, name, height, weight } = this.props.poke
        console.log("fetching poke detail : ", this.props.fetching)
        return (
            <Dialog
                style={this.props.fetching ? { opacity: 0.5 } : { opacity: 1 }}
                open={this.props.open}
                onClose={this.props.handleClose}
            >
                <DialogTitle>
                    {id}. {name}
                </DialogTitle>
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
                    <Button onClick={this.props.handleClose} color="primary">Close</Button>
                    <Button onClick={this.props.handleClose} color="primary">Catch</Button>
                </DialogActions>
            </Dialog>)
    }
}

export default DetailPoke;