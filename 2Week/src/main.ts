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

function addTask(value: String) {
    // let ul = document.querySelector<HTMLUListElement>('ul');
    let li = document.createElement('li');
    li.innerHTML = `<li class="item"><label>${value}<span class="cancle">&times;</span></label><input class="check-Box" type="checkbox"></li>`;
    toDoList?.append(li);

    const id = document.querySelectorAll(".item-list.li").length+1;
    const delBtn = document.querySelector<HTMLButtonElement>(".cancle");
    const Checkinput = document.querySelector<HTMLInputElement>(".check-Box");
    const toDoInput = taskInput!.value;

    const deleteTodo: Todo = {
        id: id
    }

    delBtn.addEventListener('click', async (e) => {
        e.preventDefault();
    
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


    const CheckTodo: Todo = {
        id: id,
        item: toDoInput,
        status: "DONE"
    }
    
    Checkinput.addEventListener('click', async (e) => {
        e.preventDefault();
        
        await fetch("/todo", {
            method: "PATCH",
            headers: {
                "Content-Type": "application-json",
            },
            body: JSON.stringify(CheckTodo),
        })
        .then(res => res.json())
        .then((res) => {
            Checkinput.checked = true;
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