import axios, {AxiosResponse} from 'axios';

interface KeyboardEvent {
    keyCode : number,
    target : any
}

export default function createTodo () {
    let todoInput = document.querySelector<HTMLInputElement>('.todo-input')
    if(todoInput) {
        todoInput.addEventListener("keyup", function(event: KeyboardEvent) {
            if(event.keyCode == 13) { // 엔터키 입력했을 경우
                let todoContent = event.target.value
                axios.post("http://localhost:3000/todos", {
                    "title" : todoContent,
                    "completed" : false
                }).then((res:AxiosResponse) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error.response.data)
                })
            }
        })
    } 
}
