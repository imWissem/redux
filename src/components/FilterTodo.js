import { useDispatch } from "react-redux";
import { Filtering } from "../redux/action";
const FilterTodo = () => {
    const dispatch=useDispatch()

    const statusHandler=(e)=>{
        dispatch (Filtering(e.target.value))}
    return ( 
    <div>
            <select onChange={statusHandler} className="ff">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>   
    </div> 
    );
}
 
export default FilterTodo;