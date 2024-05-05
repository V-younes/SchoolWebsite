let titleApp = document.getElementById('titleApp');
let dateApp = document.getElementById('dateApp');
let timeApp = document.getElementById('timeApp');
let tbody = document.getElementById('tbody');


let dataAll;
if(localStorage.school != null){
    dataAll = JSON.parse(localStorage.school)
}else{
    dataAll = [];
}
function submitAll()
{
let dataObject = {
    title:titleApp.value,
    date:dateApp.value,
    time:timeApp.value,
};
dataAll.push(dataObject);
localStorage.setItem('school' , JSON.stringify(dataAll));
}

