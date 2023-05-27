function showDate(){
    let out = document.getElementById('current-date');/*Поиск элемента для вывода*/
    let today = new Date(); /*Определяем текующую дату*/
    out.innerHTML='Дата и время для локали России: '+today.toLocaleString('ru-RU')+"<br />"+
    'Дата и время для локали Канады: '+today.toLocaleString('en-CA')+"<br />"+
    'Дата и время для локали Греции: '+today.toLocaleString('el-EL')+"<br />"+
    'Дата и время для локали Испании: '+today.toLocaleString('es-ES')+"<br />"+
    'Дата и время для локали Франции: '+today.toLocaleString('fr-FR')+"<br />"+
    'Дата и время для локали Италии: '+today.toLocaleString('it-IT');/*Запись даты в тег*/
}