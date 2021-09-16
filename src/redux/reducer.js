import { ADDTODO, DELETETODO,DONETODO, EDITTODO, Filter, FilteredTodos} from "./action-types"
const initialState={
    todos:[
        {
            id: 1,
            text: 'i should eat',
            time: '10:00',
            done: true ,
        },
        {
            id: 2,
            text: 'i should code',
            time: '12:00',
            done: true ,
        },
        {
            id: 3,
            text: 'i should sleep',
            time: '22:00',
            done: false ,
        },
      ], 
      filter : 'All',
      filteredTodos : [],
}

const todosReducer=(state=initialState, action)=>{
    switch (action.type) {
        case DELETETODO:return{
            ...state,
            todos: state.todos.filter(el=> el.id!== action.payload )
        }

        case DONETODO: return{
            ...state,
            todos: state.todos.map(el=> el.id===action.payload ?  {...el, done:!el.done }:el )
        }

        case ADDTODO: return{
            ...state,
            todos: [...state.todos, action.payload]
        }
    case EDITTODO:return{
        ...state, 
        todos:state.todos.map(todo=> todo.id===action.payload.idt? {...todo, text:action.payload.editText,time:action.payload.editTime}:todo )
    }
    case Filter :
        return {
            ...state,
            filter:action.payload.status
        }
    case FilteredTodos :
        return {
            ...state,
            filteredTodos:  state.filter==="Completed"? state.todos.filter(el=>el.done===true):
                            state.filter==="Uncompleted"? state.todos.filter(el=>el.done===false):
                            state.filter==="All"? state.todos:
                            null
        }
        default:return state
           
    }
}
export default todosReducer