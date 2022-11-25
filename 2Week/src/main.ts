import './reset.css'
import './style.css'
import { worker } from './mocks/browser'

worker.start({ onUnhandledRequest: 'bypass' })


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <div class="wrapper">
      <h1 class="title">Yourssu Todo List</h1>
      <form class="toto-form">
        <input placeholder="Write Your tood.." />
        <button type="button">Submit</button>
      </form>
      <ul class="item-list">
          <li class="item">
            <label for="1">
              TODO1
              <span class="cancle" onClick="alert('Hello!');">&times;</span>
            </label>
            <input id="1" type="checkbox" checked/>
          </li>
          <li class="item">
            <label for="2">
              TODO2
              <span class="cancle">&times;</span>
            </label>
            <input id="2" type="checkbox"/>
          </li>
        </ul>
    </div>
  </main>
`