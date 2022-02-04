export default function createTodo () {
    let todoInput = document.querySelector('.todo-input')
    todoInput.addEventListener("keyup", function(event) {
        if(event.keyCode == 13) { // 엔터키 입력했을 경우
            let todoContent = event.target.value
            axios.post("http://localhost:3000/todos", {
                "title" : todoContent,
                "completed" : false
            }).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error.response.data)
            })
        }
    })
}
