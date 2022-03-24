import React, { useState } from "react";
import { UseAuthContext } from "../context/AuthContext";
import { useTodoContext } from "../context/TodoContext";

const Todolist = () => {
  const [todoInput, setTodoInput] = useState("");
  const { setTodo, todolist, updateTodo, deleteTodo, loading } =
    useTodoContext();
  const [newTodo, setNewTodo] = useState(null);
  const Addtodo = () => {
    if (!todoInput.trim()) return null;
    setTodo({ todo: todoInput });
    setTodoInput("");
  };
  const update = ({ newTodo, id }) => {
    if (!newTodo || !id) return null;
    updateTodo({ newTodo, id });
  };
  const deletetodo = ({ id }) => {
    deleteTodo({ id });
  };
  return (
    <div>
      <h1>Todolist</h1>
      <div className="todolist">
        <div className="todoInput">
          <input
            type="text"
            placeholder="Add todo"
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </div>
        <div className="todoAction">
          <button onClick={Addtodo}>Add Todo</button>
        </div>
      </div>
      <div className="todowrapper">
        {loading && <div>loading...</div>}

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
    </div>
  );
};

export default Todolist;
