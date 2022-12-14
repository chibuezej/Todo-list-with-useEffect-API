import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Todo = () => {
    const {id} = useParams();
    const [todoDetails, setTodosDetials] = useState()

    useEffect(() => { 
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            const responseTodo = res.data;
            setTodosDetials(responseTodo);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



const { id: todoid, userid, title, completed } = todoDetails || {};
    return(
        <div>
           {todoDetails ? (
            <div>
            <h1>{`Todo Id: ${todoid}`}</h1>
            <h1>{`Todo User: ${userid}`}</h1>
            <h1>{`Todo Title: ${title}`}</h1>
            <h1>{`Todo Completed: ${completed}`}</h1>
       </div>
           ) : (<CircularProgress />)
           } 
        </div>
       
    )
}

export default Todo;