const newBtn = document.getElementById("btn");
const userInfo = document.getElementById("userinfo");
const userPhoto = document.getElementById("userimg");
let userData;

newBtn.onclick = function () {
    userData = prompt("Введіть дані у форматі:", "Ім'я Прізвище Вік Телефон Пошта");
    userData = userData.split(" ");
    if (userData.length !== 5){
        alert("Інформацію введено не коректно!")
        return;
    };

    const info =  `
    <div> <br>
    <span>Ім'я: ${userData[0]}</span> <br><br>
    <span>Прізвище: ${userData[1]}</span> <br><br>
    <span>Вік: ${userData[2]}</span> <br><br>
    <a href= "tel: +380970017700">Телефон: ${userData[3]}</a> <br><br> 
    <a href= "mailto: oleg770@gmail.com">Пошта: ${userData[4]}</a> <br><br>
    `
    userInfo.innerHTML = info;

    userPhoto = prompt("Додайте посилання на картинку");
    userPhoto = userPhoto.split(" ")

    const image = `
    <div>
    <img src"${userPhoto}" alt="">
    </div>
    `;
    userPhoto.innerHTML = image;
}



