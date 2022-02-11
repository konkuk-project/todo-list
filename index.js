import getTodos from './api/getTodos.js'
import getTodayDate from './api/getTodayDate.js'
import createTodo from './api/createTodo.js'
import operateTodoBtn from './api/operateTodoBtn.js'

getTodos(); // 리스트 생성 및 개수 조회
getTodayDate(); // 오늘날짜 조회
createTodo(); // 아이템 생성d
operateTodoBtn(); // 아이템 변경 및 삭제

