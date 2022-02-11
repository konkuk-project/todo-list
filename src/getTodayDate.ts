export default function getTodayDate() { 
    let todayItem = document.querySelector<HTMLDivElement>('.today-item')
    const today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 일
    let todayDate = year + "-" + month + "-" + date // 오늘날짜 형태
    if(todayItem) todayItem.textContent = todayDate
}
