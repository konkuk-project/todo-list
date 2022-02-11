import './main.css'
import getTodos from './getTodos'
import createTodo from './createTodo'
import getTodayDate from './getTodayDate'
import operateTodoBtn from './operateTodoBtn'

// const app = document.querySelector<HTMLDivElement>('#app')!

getTodos(); // 리스트 생성 및 개수 조회
createTodo();
getTodayDate();
operateTodoBtn();

