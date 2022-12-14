import "./Todo.css";
import { useNavigate } from "react-router-dom";

function TodoCard (props) {
const { todo } = props
const { id, title, completed } = todo;
let history = useNavigate();
return (
    <div className="Todocard" onClick={() => history(`./todo/${id}`)}>
        <h4>{title}</h4>
        <h6>{`Completed: ${completed}`}</h6>
    </div>
)
}

export default TodoCard