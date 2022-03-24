import React from "react";

const todos = ({ todolist, newTodo, setNewTodo, update, deletetodo }) => {
  return (
    <div className="todowrapper">
      {todolist && console.log(todolist.reverse())}
      {todolist &&
        todolist.map((todo, i) => {
          return (
            <div className="todo" key={i}>
              <h1>{todo.data.todo}</h1>
              <div className="action">
                <div className="update">
                  <input
                    type="text"
                    defaultValue={todo.data.todo}
                    onChange={(e) => setNewTodo(e.target.value)}
                  />
                  <button onClick={() => update({ newTodo, id: todo.id })}>
                    Update
                  </button>
                </div>
                <button onClick={() => deletetodo({ id: todo.id })}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default todos;
