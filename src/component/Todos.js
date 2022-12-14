import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "./Todocard";
import "./Todo.css"


const Todos = () => {

    const [todos, setTodos] = useState()
    useEffect(() => { 
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos);
        })
    }, [])

    console.log(todos)
    return(
        <>
      {todos ? (
      <div className="setTodos">
        {todos.slice(0, 10).map((todo) =>(
            <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
      )
      : ( <CircularProgress />)} 
        </>
    )
}

export default Todos;