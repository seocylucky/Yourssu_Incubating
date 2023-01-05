import React, {useCallback, useEffect} from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { TodoTypes, todosState } from '../recoil/todo';
import TodoItem from './TodoItem';
import { requestDeleteTodo, requestGetTodo, requestPatchTodo } from '../apis/index';

const TodoList = () => {
  const [todos, setTodos] = useRecoilState<TodoTypes[]>(todosState);

  const onComplete = useCallback((id:string, item: string): void => {
    setTodos(todos.map((todo: TodoTypes) => {
      return todo.id === id ? {...todo, status: "DONE"} : todo;
    }));

    if(id !== undefined) {
      requestPatchTodo(id, item)
      .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
    }
  }, [setTodos, todos]);

//   const deleteTodo : TofdoTypes = {
//     id,
// }

  const onDelete = useCallback((id: string) => {
    // setTodos(todos.filter((todo: TodoTypes) => todo.id !== id));
    requestDeleteTodo(id)
    .then((res) => {
        setTodos(todos.filter((todo: TodoTypes) => todo.id !== id));
        console.log(res.data)
        console.log(todos);
    })
    .catch((err) => {
        console.log(err);
    })

    requestGetTodo()
    .then((res) => {
      console.log(res.data)
      console.log(todos);
  })
    .catch((err) => {
      console.log(err);
  })

  }, [setTodos, todos]);

  return (
    <div>
        {
           todos.length > 0 ? 
           
           todos.map((todo: TodoTypes) => {
            const { id, item, status } = todo;
            return (
              <TodoItem
                key={id}
                id={id}
                item={item}
                status={status}
                onComplete={onComplete}
                onDelete={onDelete}
                todos={todos}
                setTodos={setTodos}
              />
            );
           })

           :

           <div>Todo가 없습니다. 자유롭게 추가해보세요!</div>
        }
    </div>
  );
};

export default TodoList;