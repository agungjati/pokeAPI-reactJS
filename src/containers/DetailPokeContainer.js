import { connect } from 'react-redux'
import DetailPoke from '../components/DetailPoke'
import { fetchPoke, catchPoke } from '../actions'

const mapStateProp = ({ PokeState, MyPokeState }, ownProps) => {
     console.log("my poke  ", MyPokeState )
    const poke = PokeState.pokes.filter(p => p.id == ownProps.id)[0]
    if(poke)
        return { poke : poke, fetching : PokeState.fetching }
    else 
        return { poke: { id : ownProps.id }, fetching : PokeState.fetching }
}

const mapDispatchProp = (dispatch) => ({
    getPoke : (id) => dispatch(fetchPoke(id)),
    catchPoke : (poke) => dispatch(catchPoke(poke))
})

export default connect(mapStateProp, mapDispatchProp, null, { pure : false })
            (DetailPoke)
