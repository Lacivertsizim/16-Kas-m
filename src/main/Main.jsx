import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [todoName, settodoName] = useState("");
  const [todoList, settodoList] = useState([
    { id: 1, todoName: "Learn JS", completed: false },
    { id: 2, todoName: "Learn HTML", completed: true },
    { id: 3, todoName: "Learn CSS", completed: false },
    { id: 4, todoName: "Learn REACT", completed: true },
    { id: 5, todoName: "Learn BOOTSTRAP", completed: false },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: new Date().getTime(),
      todoName: e.target[0].value,
      completed: false,
    };
    settodoList([...todoList, newTodo]);
    settodoName("");
    console.log(todoList);
  };

  const handleCompleted = (id) => {
    let newTodoList = todoList.map((item) => {
      if (id === item.id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    settodoList(newTodoList);
  };

  const handleDelete = (id) => {
    let newTodoList = todoList.filter((item) => 
      item.id !== id
    );
    settodoList(newTodoList);
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => settodoName(e.target.value)}
          placeholder="Add todo"
        />
      </form>
      <div className="todo-list">
        {todoList.map((item) => (
          <div key={item.id}>
            <p>{item.todoName}</p>
            {item.completed ? (
              <div>
                <i
                  onClick={() => handleDelete(item.id)}
                  className="ri-close-line"
                ></i>
                <i
                  onClick={() => handleCompleted(item.id)}
                  className="ri-checkbox-line"
                ></i>
              </div>
            ) : (
              <i
                onClick={() => handleCompleted(item.id)}
                className="ri-checkbox-blank-line"
              ></i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
