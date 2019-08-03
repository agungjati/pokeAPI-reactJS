import { connect } from 'react-redux'
import ListPoke from '../components/ListPoke'
import { fetchPokes } from '../actions'

const mapStateProp = ({ ListPokeState }) => {
    console.log("li ", ListPokeState)
    return { ListPokeState }
}

const mapDispatchProp = (dispatch) => ({
    getPokes : () => dispatch(fetchPokes())
})

export default connect(mapStateProp, mapDispatchProp, null, { pure : false })
            (ListPoke)
