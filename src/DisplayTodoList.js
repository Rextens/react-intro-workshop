import { useEffect } from "react"

const DisplayTodoList = (props) => {
    
    const archiveTodo = (event) => {
        let tempTodo = [...props.todos]
    
        tempTodo[props.todos.findIndex(item => item.id == event.target.value)].isArchived = true
        props.setTodos(tempTodo)
        
        localStorage.setItem('todoList', JSON.stringify(tempTodo))
    }
    
    const removeTodo = (event) => {
        let tempTodo = [...props.todos]
    
        tempTodo.splice(props.todos.findIndex(item => item.id == event.target.value), 1)
        props.setTodos(tempTodo)
    
        localStorage.setItem('todoList', JSON.stringify(tempTodo))
    }
    
    const setTodoAsDone = (event) => {
        let tempTodo = [...props.todos]
    
        tempTodo[props.todos.findIndex(item => item.id == event.target.value)].isDone = true
        props.setTodos(tempTodo)    

        localStorage.setItem('todoList', JSON.stringify(tempTodo))
    }

    return (
        <ul>
        {
          props.filteredItems.map(item => 
            <li className="ListElement">
              <button value={item.id} className={`${item.isDone && "isDone"}`} onClick={setTodoAsDone}> { item.title } </button>
              <button value={item.id} className="DeleteArchive" onClick={archiveTodo}>Archive</button>
              <button value={item.id} className="DeleteArchive" onClick={removeTodo}>Delete</button> 
            </li>
          )
        }
        </ul>
    )
}

export default DisplayTodoList