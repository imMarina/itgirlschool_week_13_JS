/* 2. Напишем программу, которая будет считать количество дней до дня рождения пользователя и отображать это значение на странице.
    - Создайте HTML-страницу с заголовком "Дни до дня рождения"
    - Добавьте на страницу инпут, который позволит пользователю выбрать дату рождения в текущем году, 
    и кнопку, при нажатии на которую, на страницу будет выводиться значение количества дней до дня рождения.
    - Если пользователь не ввёл дату рождения, под полем ввода будет появляться красное сообщение с просьбой ввести дату. 
    Если пользователь введёт дату или изменит её, сообщение об ошибке будет скрыто.
    
    *** Добавьте условия, которые будут правильно определять склонение слова "день" в соответствии с грамматикой русского языка */


    const birthApp = document.querySelector('#main-container');

    const inputDate = birthApp.querySelector('#input-date');
    const result = birthApp.querySelector('#result');
    
    const button = birthApp.querySelector('#button');
    // button.addEventListener("click", () => {}); заглушка, когда функция еще не объявлена

function calculateDaysPassed () {
    // date of birth
    const birthdayDateStr = inputDate.value;

    // get current Timestamp
    const currentTimestamp = Date.now();

    // convert Date to Timestamp
    const timestampBirthDay = Date.parse(birthdayDateStr);

    // calculate difference in milliseconds between dates
    let diffBetweenDates = timestampBirthDay - currentTimestamp;

    // convert the difference to the number of days
    const daysPassed = Math.floor(diffBetweenDates / (1000 * 60 * 60 * 24));
    console.log(daysPassed);

    // Get last symbol at the string - синтаксис string.at(-1)
    let lastNumberFromTheDay = (String(daysPassed)).at(-1);
    console.log(lastNumberFromTheDay);

    // Input Value
    if (birthdayDateStr === "") {
        result.textContent = "Пожалуйста выберете дату!"; // .style.color.red 
    } else if (lastNumberFromTheDay === '1') {
        result.textContent = `До дня рождения остался ${daysPassed} день`;
    } else if (lastNumberFromTheDay === '2' || lastNumberFromTheDay === '3' || lastNumberFromTheDay === '4') {
        result.textContent = `До дня рождения осталось ${daysPassed} дня`;
    } else {
        result.textContent = `До дня рождения осталось ${daysPassed} дней`;
    }

    // (birthdayDateStr === "") ? result.textContent = "Choose your date of birth!" : result.textContent = `${daysPassed} days left until the birthday`;
}

button.addEventListener("click", calculateDaysPassed);
