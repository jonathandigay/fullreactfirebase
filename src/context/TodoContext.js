import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase.config";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = ({ children }) => {
  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(false);

  const setTodo = async ({ todo }) => {
    try {
      await addDoc(collection(db, "Todolist"), {
        todo,
        timestamp: serverTimestamp(),
      }).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateTodo = async ({ newTodo, id }) => {
    const docref = await doc(db, "Todolist", id);
    try {
      await updateDoc(docref, { todo: newTodo });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async ({ id }) => {
    try {
      await deleteDoc(doc(db, "Todolist", id));
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getTodo = async () => {
      setLoading(true);
      try {
        const Todos = [];
        const q = query(collection(db, "Todolist"), orderBy("timestamp"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          Todos.push({ data: doc.data(), id: doc.id });
        });
        setTodolist(Todos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getTodo();
  }, []);

  const values = {
    todolist,
    setTodolist,
    setTodo,
    loading,
    updateTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
