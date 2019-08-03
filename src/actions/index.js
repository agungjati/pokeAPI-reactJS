export const ActionTypeEnum = {
    REFRESH_POKES : "Refresh Pokes",
    REMOVE_POKE_LIST : "Remove poke list",
    FETCHING_POKES : "Fetching Pokes",
    ERROR_FETCHING_POKES : "Error on fetching pokes",

    ADD_POKE : "Add a Poke",
    FETCHING_POKE : "Fetching a Poke",
    ERROR_FETCHING_POKE : "Error on fetching a poke",

    CATCH_POKE : "Catchs a Poke",
    REMOVE_MYPOKE : "Remove mypoke",
    ADD_POKE_TO_LIST : "add a poke to list"

}

export const addPokes =  (pokes = []) => ({
    type : ActionTypeEnum.REFRESH_POKES,
    pokes : pokes,
})

export const  removeaPokeFromList = (id) => ({
    type : ActionTypeEnum.REMOVE_POKE_LIST,
    id : id,
})

export const fetchingPokes =  () => ({
    type : ActionTypeEnum.FETCHING_POKES,
})

export const errorOnFetchPokes =  (err) => ({
    type : ActionTypeEnum.ERROR_FETCHING_POKES,
    errorMessage : err
})

export const fetchPokes = () => (dispatch) => {
    dispatch(fetchingPokes())
    fetch("http://localhost:3000/pokes")
    //  fetch("http://pokeapi.co/api/v2/pokemon?offset=0&limit=12")
    .then(response => response.json())
    // .then(json => dispatch(addPokes(json.results)))
    .then(json => dispatch(addPokes(json)))
    .catch(err => {
        dispatch(errorOnFetchPokes(err))
    })
}


export const addPoke = (poke) => ({
    type : ActionTypeEnum.ADD_POKE,
    poke : poke
})

export const fetchingPoke  =  () => ({
    type : ActionTypeEnum.FETCHING_POKE,
})

export const errorFetchingPoke  =  (err) => ({
    type : ActionTypeEnum.ERROR_FETCHING_POKE,
    error: true,
    errorMessage: err
})

export const fetchPoke  =  (id) => (dispatch) => {
    dispatch(fetchingPoke())
    fetch("http://localhost:3000/pokes/"+ id)
    //fetch("http://pokeapi.co/api/v2/pokemon/"+ id)
    .then(response => response.json())
    .then(json => dispatch(addPoke(json)))
    .catch(err => {
        dispatch(errorFetchingPoke(err))
    })
}


export const catchPoke =  (poke = {}) => dispatch => {
    dispatch(removeaPokeFromList(poke.id))
    dispatch(addMyPoke(poke))
} 

export const addMyPoke = (poke) => ({
    type : ActionTypeEnum.CATCH_POKE,
    poke : poke,
})


export const removeMyPoke = (poke) => dispatch =>{
    dispatch(removerealMyPoke(poke))
    dispatch(addaPoketoList(poke))
} 


export const removerealMyPoke = (poke) => ({
    type : ActionTypeEnum.REMOVE_MYPOKE,
    poke : poke,
})

export const addaPoketoList = (poke) => ({
    type : ActionTypeEnum.ADD_POKE_TO_LIST,
    poke : poke,
})