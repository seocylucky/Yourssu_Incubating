// const toDoForm = document.querySelector<HTMLFormElement>(".todo-form");
// const toDoList = document.querySelector<HTMLUListElement>('.item-list');

// type Todo = {
//     id?: number
//     item?: string
//     status?: "DONE" | "NOT_DONE"
// }

// let taskInput = document.querySelector<HTMLInputElement>("new-task-input");

// toDoForm?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let toDoInput = taskInput.value;
//     if (toDoInput !== '') {
//         addTask(toDoInput);
//         toDoInput = '';
//         const InputTodo: Todo = {
//             item: toDoInput,
//             status: "NOT_DONE",
//         }

//         fetch("/todo", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application-json",
//             },
//             body: JSON.stringify(InputTodo),
//         })
//         .then(res => res.json())
//         .then(res => console.log(res)
//     )}
//     fetch('/todo', {
//         method: "GET",
//         headers: {
//             "Content-Type": "application-json",
//         },
//         })
//         .then(res => res.json())
//         .then(res => console.log(res)
//         )
// })

// function addTask(value: string) {
//     let ul = document.querySelector<HTMLUListElement>('ul');
//     let li = document.createElement('li');
//     li.innerHTML = `<li class="item"><label for="1">${value}<span class="cancle">&times;</span></label><input id="1" type="checkbox" checked/></li>`;
//     ul.appendChild(li);
//     document.querySelector<HTMLUListElement>('item-list').style.display = 'block';
// }

// toDoList?.addEventListener('click', (e) => {
//     e.preventDefault();
//     const id = document.querySelectorAll("item-list.li").length+1;
//     const target = e.target as HTMLUListElement
//     if(target.className == 'cancle') {
//         toDoList.addEventListener('click', (e) => {
//             e.preventDefault();
//             const deleteTodo: Todo = {
//                 id: id
//             }
        
//             fetch("/todo", {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application-json",
//                 },
//                 body: JSON.stringify(deleteTodo),
//             })
//             .then(res => res.json())
//             .then(res => console.log(res)
//         )  
//             let remove = target.parentNode;
//             let parent = remove.parentNode;
//             parent.removeChild(remove);
//         })
//     }
//     else {
//         toDoList.addEventListener('click', (e) => {
//             e.preventDefault();
//             let toDoInput = taskInput.value;
//             const Checkinput = document.querySelector<HTMLInputElement>("checkbox");
        
//             const CheckTodo: Todo = {
//                 id: id,
//                 item: toDoInput,
//                 status: "DONE"
//             }
            
//             fetch("/todo", {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application-json",
//                 },
//                 body: JSON.stringify(CheckTodo),
//             })
//             .then(res => res.json())
//             .then((res) => {
//                 Checkinput.checked = true;
//                 console.log(res)}
//         )  
//         })
//     }
// })