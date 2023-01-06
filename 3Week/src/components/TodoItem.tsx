import React, {useState, useCallback} from 'react'
import { SetterOrUpdater } from 'recoil';
import { TodoTypes } from '../recoil/todo';
import { MdClose } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

interface TodoPropTypes {
  id?: string;
  item?: string;
  status?: "DONE" | "NOT_DONE";
  
  onComplete: (id: string, item: string) => void;
  onDelete: (id: string) => void;
  
  todos: TodoTypes[];
  setTodos: SetterOrUpdater<TodoTypes[]>;
}

const TodoItem = ({
  id,
  item,
  status,
  onComplete,
  onDelete,
  todos,
  setTodos,
}: TodoPropTypes) => {
    
    return (
        <>
            <li className='flex mt-4 justify-between'>
                <div className='flex'>
                <input
                    className="check-Box ml-1"
                    type="checkbox"
                    onChange={(e)=> {e.preventDefault(); e.target.checked = true; if(id !== undefined && item !== undefined) onComplete(id, item)}}
                />
                {status == "DONE" ?
                <label
                className='text-black font-medium ml-3 line-through'
                title={item}
                >
                {item}
                </label>
                :
                <label
                className='text-black font-medium ml-3'
                title={item}
                >
                {item}
                </label>
                }
                </div>
                <div className='flex items-center relative'>
                    {/* <FaRegEdit className='fill-blue-500' onClick={onModify} /> */}
                    <MdClose className='ml-2 fill-red-500' 
                             onClick={(e) => {e.preventDefault(); if(id !== undefined) onDelete(id)}}
                    />
                </div>
            </li>
            <div className='text-black'>_________________________________________</div>
        </>
  )
}

export default TodoItem