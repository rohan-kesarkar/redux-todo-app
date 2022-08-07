const initialSatate = {
    lists : []
}

const reducers = (state = initialSatate, action)=>{
    switch(action.type){
        case "ADD_TODO" :
            const {id, data} = action.payload
           return{
            ...state,
            lists:[
                ...state.lists,
                {
                    id:id,
                    data:data
                }
            ]
           }
           case "DELETE_TODO" :
           const newLists = state.lists.filter((elem)=>elem.id !== action.id)
           return{
            ...state,
          lists: newLists
           }
           case "REMOVE_TODO" : 
           return{
            ...state,
            lists:[]
           }
           
           default: return state
    }

}

export default reducers