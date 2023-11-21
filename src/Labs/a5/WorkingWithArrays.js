import React,{ useState, useEffect} from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [id, setId] = useState(1);
    const[title, setTitle] = useState("NodeJS Assignment")
    const[todos, setTodos] = useState([])


    const fetchTodosPromise = () => {
        const promise = axios.get("http://localhost:4000/a5/todos");
        console.log(promise);
        promise.then((response) => {
            console.log(response.data);
            setTodos(response.data);
        })
    };


    const TODOS_API = "http://localhost:4000/a5/todos"

    const fetchTodos = async () => {
        const response = await axios.get(TODOS_API);
        setTodos(response.data);
    };

    const createTodo = async() =>{
        const response = await axios.get("http://localhost:4000/a5/todos/create");
        setTodos(response.data);
    }

    const postTodo = async() =>{
        const response = await axios.post("http://localhost:4000/a5/todos", {
            title: title,
        });
        setTodos(response.data);
    }

    const removeTodo = async(id) => {
        const response = await axios.get(`${TODOS_API}/${id}/delete`);
        setTodos(response.data);
    }
    const deleteTodo = async(id) => {
        const response = await axios.delete(`${TODOS_API}/${id}`);
        setTodos(response.data);
    }

    const updateTitle = async (id, title) => {
        const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
        setTodos(response.data);
    };

    useEffect(()=>{
        // fetchTodosPromise();
        fetchTodos();

    },[]);


    return (


        <div>
            <h3>Working with Arrays</h3>
            <h2>Todos from server</h2>
            <button
                className="btn btn-primary"
                onClick={() => updateTitle(id, title)}
            >
                Update Todo Title
            </button>
            <button className="btn btn-primary" onClick={createTodo}>
                Create Todo
            </button>

            <button className="btn btn-primary" onClick={postTodo}>
                Post Todo
            </button>
            <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className = "list-group-item" key = {todo.id}>
                        <button className={"btn btn-danger float-end"}
                        onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        {todo.title}
                        {todo.id}
                    </li>

                ))}
            </ul>



            <h2>Update item title</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value )}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item in an Array</h3>
            <a
                href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
                className="btn btn-primary me-2" >
                Update Title
            </a>



            <input
                className="form-control"
                value= {id}
                onChange={(e) => setId(e.target.value)}
            />
            <a href={'http://localhost:4000/a5/todos/${id}'}
               className="btn btn-primary">
                Fetch Todo {id}
            </a>







            <h2>Fetch Array</h2>
            <a href="http://localhost:4000/a5/todos" className="btn btn-primary">
                Fetch Todos
            </a>

        </div>
    );
}
export default WorkingWithArrays;