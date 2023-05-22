import { createStore } from "vuex";
import localidades from '../modules/localidades/store/localidades'

const store= createStore({
    modules:{
        localidades 
    }
})

export default store


