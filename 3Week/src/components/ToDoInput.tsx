import React, {useState, ChangeEvent, KeyboardEvent, useCallback} from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputState, TodoTypes, todosState } from '../recoil/todo';
import { requestGetTodo, requestPost } from '../apis/index';

interface InputTodo {
    id?: string
    item?: string
    status?: 'DONE' | 'NOT_DONE'
  }

const ToDoInput = () => {
  const [item, setItems] = useRecoilState<string>(inputState);
  const [todos, setTodos] = useRecoilState<TodoTypes[]>(todosState);
  const [isInput, setIsInput] = useState(''); 

  const addTodo = useCallback((): void => {

  }, [item, setItems, setTodos, todos]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setItems(e.target.value);
  }, [setItems]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
        addTodo();
    }
  }, [addTodo]);

  return (
    <form className='flex'
          onSubmit={(e) => {
              e.preventDefault();

              const nextId: string = (todos.length + 1).toString();

              const todoInput: InputTodo = {
                // id: nextId,
                item,
                status: "NOT_DONE",
              };

              
              if(todoInput.status !== undefined){
              requestPost(item, todoInput?.status)
              .then((res) => {    
                requestGetTodo()
                .then((res) => {
                  setTodos(res.data)
                  console.log(res.data)
                  setTodos([...todos, todoInput]);
                }) 
                  console.log(res.data)
                  console.log(todos)
              })
              .catch((err) => {
                  console.log(err);
              })

              setItems('');
          }
        }}
    >
        <input
            className='w-80 p-2 border-2 border-gray-400 rounded-md bg-white text-black'
            placeholder='Write your ToDo...'
            type='text'
            value={item}
            onChange={onChange}
            onKeyPress={onKeyDown}
        />
        <button
            className='ml-1 bg-black'
            type='submit'
            onClick={addTodo}
        >Add</button>
    </form>
  )
}

export default ToDoInput