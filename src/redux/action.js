
import { ADDTODO, DELETETODO, DONETODO, EDITTODO, Filter, FilteredTodos} from "./action-types"


export const deleteHandler=(id)=>{
    return{
        type:DELETETODO,
        payload:id
    }
}

export const doneHandler=(id)=>{
    return{
        type:DONETODO,
        payload:id
    }
}
export const addHandler=(newTask)=>{
    return{
        type:ADDTODO,
        payload:newTask
    }
}
export const editHandler=(id,editText,editTime)=>{
    return{
        type:EDITTODO,
        payload:{id, editText,editTime}
    }
}
export const Filtering =(status)=>{
    return {
        type: Filter,
        payload:{status}

    }
}

export const FilterHandler =()=>{
    return {
        type: FilteredTodos
           
    }
}
