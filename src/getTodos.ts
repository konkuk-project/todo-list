import axios, {AxiosResponse} from 'axios';

interface ITodo {
    completed : Boolean;
}

export default function getTodos () {
    axios.get('http://localhost:3000/todos')
         .then((response:AxiosResponse) => {
            const users = response.data;
            let listTotal = document.querySelector<HTMLSpanElement>('.list-total')
            let uncompletedTodos = users.filter((todo:ITodo) => todo.completed == false)

            if(listTotal) {
                listTotal.textContent = uncompletedTodos.length
            }

            for(let i = 0; i < users.length; i++) { // 리스트 생성
                let todoList = document.querySelector('.todo-list')
                let todoItem
                if(users[i].completed == false) {
                    todoItem = `
                        <div class="todo">
                            <div class="todo-status" data-number="${users[i].id}" data-checked="${users[i].completed}">
                                <input type="checkbox" id="item${users[i].id}">
                                <label for="item${users[i].id}">${users[i].title}</label>
                                <input type="text" class="todo-revise off">
                            </div>
                            <div class="todo-menu" data-checked="${users[i].completed}">
                                <button data-option="revise" data-number="${users[i].id}">변경</button>
                                <button data-option="delete" data-number="${users[i].id}">삭제</button>
                            </div>
                        </div>
                    `
                } else if(users[i].completed == true){
                    todoItem = `
                        <div class="todo">
                            <div class="todo-status" data-number="${users[i].id}" data-checked="${users[i].completed}">
                                <input type="checkbox" id="item${users[i].id}" checked>
                                <label for="item${users[i].id}">${users[i].title}</label>
                                <input type="text" class="todo-revise off">
                            </div>
                            <div class="todo-menu" data-checked="${users[i].completed}">
                                <button data-option="revise" data-number="${users[i].id}">변경</button>
                                <button data-option="delete" data-number="${users[i].id}">삭제</button>
                            </div>
                        </div>
                    `
                }
                if(todoList) todoList.innerHTML += todoItem
            }
        })
        .catch(error => console.error(error));
};