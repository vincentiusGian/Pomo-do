import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import TodoItems from "./TodoItems";
import React, { useEffect, useRef, useState } from "react";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState([]);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <>
      <div className="card bg-inherit w-full max-w-md md:max-w-lg lg:max-w-xl shadow-xl border-4 border-primary">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-lg md:text-2xl">To-do list</h2>
            <FaRegCalendarCheck className="text-lg md:text-2xl" />
          </div>
          <div className="flex gap-2 mt-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Input task"
              className="input input-bordered w-full"
            />
            <button onClick={add} className="btn btn-circle btn-primary">
              <FaPlus />
            </button>
          </div>
          <div className="mt-4">
            {todoList.map((item, index) => {
              return (
                <TodoItems
                  toggle={toggle}
                  deleteTodo={deleteTodo}
                  key={index}
                  isComplete={item.isComplete}
                  id={item.id}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
