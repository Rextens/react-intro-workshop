// Hi!

import { useEffect, useState } from "react";
import DisplayTodoList from './DisplayTodoList'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, title: "Learn ReactJS", isDone: false, isArchived: false },
    { id: 1, title: "Attend ReactJS workshops", isDone: true, isArchived: false },
    { id: 2, title: "Learn Ruby on Rails", isDone: true, isArchived: false },
    { id: 3, title: "Attend Ruby on Rails workshops", isDone: true, isArchived: false },
    {
      id: 4,
      title: "This one shouldn't be visible - archived",
      isDone: true,
      isArchived: true,
    },
  ])

  useEffect(() => {

    //console.log('abc')
    if(localStorage.getItem('todoList') != null)
    {

      
      setTodos(JSON.parse(localStorage.getItem('todoList')))
    }

    console.log()
  }, [])

  const addTodo = (event) => {
    event.preventDefault()

    setTodos([...todos, {id: todos.length != 0 ? todos[todos.length - 1].id + 1 : 0, title: event.target[0].value, isDone: false, isArchived: false}])
  }

  return (
    <div className="main__wrapper">
      <h1 className="main__title"> To Do List</h1>
      <div>
        Here you can store all the things you need to complete
      </div>
      <div>
        <form onSubmit={addTodo}>
          <label>
            <input/>
          </label>

          <button type="submit">Add Todo</button>
        </form>
      </div>

      <DisplayTodoList todos={todos} setTodos={setTodos} filteredItems={todos.filter(item => !item.isArchived)} />
      <DisplayTodoList todos={todos} setTodos={setTodos} filteredItems={todos.filter(item => item.isArchived)} />
        
    </div>
  );
};

export default App;
