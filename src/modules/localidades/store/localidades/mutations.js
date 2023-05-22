
export const setLocalidades =  (state,localidades) => {

    //crea un nuevo array con los valores anteriores y los actuales
    state.localidades = [...state.localidades, ...localidades]
    
    state.isLoading = false
}

export const updateLocalidad = (state, localidad ) => {

    const idx = state.entries.map(e=> e.id).indexOf(localdidad.id)
    console.log({idx})

}


export const addLocalidad = (state, localidad ) => {

    state.localidades = [localidad, ...state.localidades]

}




