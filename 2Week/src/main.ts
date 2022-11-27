import './reset.css'
import './style.css'
import { worker } from './mocks/browser'

worker.start({ onUnhandledRequest: 'bypass' })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <div class="wrapper">
      <h1 class="title">Yourssu Todo List</h1>
      <form class="todo-form">
        <input placeholder="Write Your todo.." class="new-task-input"/>
        <button class="submitBtn">Submit</button>
      </form>
      <ul class="item-list">
      </ul>
    </div>
  </main>
`

const toDoForm = document.querySelector<HTMLFormElement>(".todo-form");
const toDoList = document.querySelector<HTMLUListElement>('.item-list');

type Todo = {
    id?: number
    item?: string
    status?: "DONE" | "NOT_DONE"
}

const taskInput = document.querySelector<HTMLInputElement>(".new-task-input");

toDoForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    let toDoInput = taskInput?.value;
    if (toDoInput !== '') {
        addTask(toDoInput);
        const InputTodo: Todo = {
            item: toDoInput,
            status: "NOT_DONE",
        }

        await fetch("/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application-json",
            },
            body: JSON.stringify(InputTodo),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            taskInput.value = '';
        }
    )}
    await fetch('/todo', {
        method: "GET",
        headers: {
            "Content-Type": "application-json",
        },
        })
        .then(res => res.json())
        .then(res => console.log(res)
        )
})

function addTask(value: string) {
    // let ul = document.querySelector<HTMLUListElement>('ul');
    let li = document.createElement('li');
    const label = document.createElement('label');
    label.innerText = value;
    const span = document.createElement('span');
    const checkInput = document.createElement('input');
    // li.innerHTML = `<li class="item"><label>${value}<span class="cancle">&times;</span></label><input class="check-Box" type="checkbox"></li>`;
    // toDoList?.append(li);

    const id = document.querySelectorAll(".item-list li").length+1;
    
    li.classList.add('item');
    span.classList.add('cancle');
    span.innerHTML = ' &times;';
    checkInput.type = 'checkbox';
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(checkInput);
    toDoList?.append(li);

    // const delBtn = document.querySelector<HTMLButtonElement>(".cancle");
    // const checkInput = document.querySelector<HTMLInputElement>(".check-Box");
    const toDoInput = taskInput?.value;

    span.addEventListener('click', async (e) => {
        e.preventDefault();
        const deleteTodo: Todo = {
            id: id
        }

        await fetch("/todo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application-json",
            },
            body: JSON.stringify(deleteTodo),
        })
        .then(res => res.json())
        .then(res => {
            li.remove();
            console.log(res)
            console.log('삭제 완료')
        })
        await fetch('/todo', {
            method: "GET",
            headers: {
                "Content-Type": "application-json",
            },
            })
            .then(res => res.json())
            .then(res => console.log(res)
            )  
    })
    
    checkInput.addEventListener('click', async (e) => {
        e.preventDefault();
        const CheckTodo: Todo = {
            id: id,
            item: toDoInput,
            status: "DONE"
        }

        await fetch("/todo", {
            method: "PATCH",
            headers: {
                "Content-Type": "application-json",
            },
            body: JSON.stringify(CheckTodo),
        })
        .then(res => res.json())
        .then((res) => {
            checkInput.checked = true;
            console.log(res)}
    ) 
    await fetch('/todo', {
        method: "GET",
        headers: {
            "Content-Type": "application-json",
        },
        })
        .then(res => res.json())
        .then(res => console.log(res)
        ) 
})}