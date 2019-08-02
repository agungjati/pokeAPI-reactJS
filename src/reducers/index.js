import { ActionTypeEnum } from '../actions'
import { combineReducers } from 'redux'

const ListPokeState = ( state = { pokes : [], fetching : true, error: false } , 
    { type, pokes = [], errorMessage = "" }) => {
    switch(type) {
        case ActionTypeEnum.REFRESH_POKES :
            return {
             pokes : pokes,
             fetching : false,
             error : false,
             errorMessage : ""
            };
        case ActionTypeEnum.FETCHING_POKES :
            return {
             pokes : state.pokes,
             fetching : true,
             error : false,
             errorMessage : ""
            };
        case ActionTypeEnum.ERROR_FETCHING_POKES :
            return {
             pokes : state.pokes,
             fetching : false,
             error : true,
             errorMessage : errorMessage
            };
        default :
            return state
    }
}

const PokeState = ( state =  { pokes : [], fetching : true, error: false } , 
    { type, poke = {}, errorMessage = "" }) => {
    switch(type) {
        case ActionTypeEnum.ADD_POKE :
            state.pokes = updatePoke(state, poke)
            return {
             pokes : state.pokes,
             fetching : false,
             error : false,
             errorMessage : ""
            };
        case ActionTypeEnum.FETCHING_POKE :
            return {
             pokes : state.pokes,
             fetching : true,
             error : false,
             errorMessage : ""
            };
        case ActionTypeEnum.ERROR_FETCHING_POKE :
            return {
             pokes : state.pokes,
             fetching : false,
             error : true,
             errorMessage : errorMessage
            };
        default :
            return state
    }
}

const updatePoke = (state, poke) => {
    const oldPoke = state.pokes.filter(p => p.id === poke.id)
            if(oldPoke.length === 0){
                state.pokes.push(poke)
            }else{
                state.pokes = state.pokes.map(p =>{ 
                    if(p.id === oldPoke.id)
                        return poke;
                    else
                        return p;
                })
            }

    return state.pokes
}

export default combineReducers({ ListPokeState, PokeState })