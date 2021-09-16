import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterHandler } from "../redux/action";
import Todo from './todo'
export default function TodoList() {

const dispatch=useDispatch()
const todos = useSelector(state => state.todos)
const filteredTodos=useSelector(state=>state.filteredTodos) 
const filter=useSelector(state=>state.filter)

useEffect(()=>{
    dispatch(FilterHandler())
},[filter,todos])

    return (
      <div>
      {filteredTodos.map((task)=>(<Todo key={task.id} task={task}
      />))}
  </div> 

    )
}
