import React from "react";
import { MdDelete } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-2 py-4 gap-2">
        <div  onClick={()=>{toggle(id)}} className="flex flex-1 items-center">
        {isComplete ?  <MdCheckBox className="size-6"/> : <MdCheckBoxOutlineBlank className="size-6"/>}
        <p className={` size-8 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
      <div>
        <div onClick={()=> {deleteTodo(id)}} className="btn btn-sm btn-circle btn-primary">
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
