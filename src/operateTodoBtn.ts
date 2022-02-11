import axios, {AxiosResponse} from 'axios';

interface MouseEvent {
    target : any
}

export default function operateTodoBtn () {
    let todoList = document.querySelector<HTMLDivElement>('.todo-list') // 리스트
    if(todoList) {
        todoList.addEventListener("click", (e:MouseEvent) => {
            if(e.target.tagName == "BUTTON") { // 버튼 클릭했을 경우
                let todoName = e.target.parentElement.parentElement.querySelector("label")
                let todoRevise = e.target.parentElement.parentElement.querySelector(".todo-revise")
                if(e.target.dataset.option == "revise") { 
                    if(e.target.textContent == "변경") { // 변경
                        let completeBtn = e.target
                        let cancelBtn = completeBtn.nextElementSibling
                        todoName.classList.add("off")
                        todoRevise.classList.remove("off")
                        todoRevise.value = todoName.textContent
                        completeBtn.textContent = '완료'
                        cancelBtn.textContent = '취소'
                    } else if(e.target.textContent == "완료") { // 완료
                        let todoId = e.target.dataset.number
                        let newTodoName = todoRevise.value
                        let todoChecked = e.target.parentElement.dataset.checked
                        let isChecked = false
                        if(todoChecked == "false") isChecked = false
                        else if(todoChecked == "true") isChecked = true
                        let completeBtn = e.target
                        let cancelBtn = completeBtn.nextElementSibling
                        axios.put(`http://localhost:3000/todos/${todoId}`, {
                                "title" : newTodoName,
                                "completed" : isChecked
                            }).then((res:AxiosResponse) => {
                                console.log(res.data)
                            }).catch((error) => {
                                console.log(error.response.data)
                            })
                        todoName.classList.remove("off")
                        todoRevise.classList.add("off")
                        completeBtn.textContent = '변경'
                        cancelBtn.textContent = '삭제'
                    }
                } else if(e.target.dataset.option == "delete"){ 
                    if(e.target.textContent == "삭제") { // 삭제
                        let todoId = e.target.dataset.number
                        axios.delete(`http://localhost:3000/todos/${todoId}`)
                            .then((res:AxiosResponse) => {
                                console.log(res)
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    } else if(e.target.textContent == "취소") { // 취소
                        let cancelBtn = e.target
                        let completeBtn = cancelBtn.previousElementSibling
                        todoName.classList.remove("off")
                        todoRevise.classList.add("off")
                        completeBtn.textContent = '변경'
                        cancelBtn.textContent = '삭제'
                    }
                }
            } else if(e.target.tagName == "LABEL") { // 상품명 클릭했을 경우
                let todoId = e.target.parentElement.dataset.number
                let todoChecked = e.target.parentElement.dataset.checked
                let todoName = e.target.textContent
                let isChecked = false
                if(todoChecked == "false") isChecked = true
                else if(todoChecked == "true") isChecked = false
                console.log(todoId)
                console.log(isChecked)
                console.log(todoName)
                axios.put(`http://localhost:3000/todos/${todoId}`, {
                    "title" : todoName,
                    "completed" : isChecked
                }).then((res:AxiosResponse) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error.response.data)
                })
            }
        })
    }
}