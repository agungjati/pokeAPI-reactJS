import { connect } from 'react-redux'
import DetailPoke from '../components/DetailPoke'
import { fetchPoke } from '../actions'

const mapStateProp = ({ PokeState }, ownProps) => {
    // console.log("poke  ", PokeState )
    const poke = PokeState.pokes.filter(p => p.id == ownProps.id)[0]
    if(poke)
        return { poke : poke, fetching : PokeState.fetching }
    else 
        return { poke: { id : ownProps.id }, fetching : PokeState.fetching }
}

const mapDispatchProp = (dispatch) => ({
    getPoke : (id) => dispatch(fetchPoke(id))
})

export default connect(mapStateProp, mapDispatchProp, null, { pure : false })
            (DetailPoke)
