// // Задача № 1
// let var_1 = 10;
// let var_2 = var_1 * 3;
// let var_total_result = var_1 + var_2;
// alert("var_1 = " + var_1);
// alert("var_2 = " + var_2);
// alert("var_total_result = " + var_total_result);

// // Задача № 2
// let firstName = prompt("Ваше Имя");
// let secondName = prompt("Ваша Фамилия");
// alert("What’s up " + firstName + " " + secondName);

// // Задача № 3
// let x = +prompt("Введите первое значение");
// let y = +prompt("Введите второе значение");
// alert("Сумма " + x + " + " + y + " = " + (x + y));
// alert("Частное " + x + " / " + y + " = " + (x / y));
// alert("Произведение " + x + " * " + y + " = " + (x * y));
// alert("Разность " + x + " - " + y + " = " + (x - y));


// // Задача № 4
// let var_daysWeek = prompt("Колличество рабочих дней в неделю");
// let var_hour = prompt("Колличество рабочих часов в день");
// let var_moneyPerHour = prompt("Колличество денег в час");
// alert("ЗП за Июль = " + ((var_daysWeek * var_hour) * 4) * var_moneyPerHour + " $")


// // Задача № 5
// let var_first_number = prompt("Введите число");
// if (var_first_number == 0) {
// 	alert("Это же ноль!");
// } else {
// 	let form = var_first_number % 2;
// 	if (form == 0) {
// 		alert("четное");
// 	} else {
// 		alert("не четное");
// 	}
// }

// // Задача № 6
// let word = +prompt('Введите число');
// if (Number.isInteger(word)) {
// 	alert("число");
// } else {
// 	alert("Что то другое");
// }

// // Задча № 7
// let var_random = Math.round(Math.random() * 100);
// let var_prompt = prompt();
// if (var_random > var_prompt && var_random != var_prompt) {
// 	alert("Наше рандомнео число " + var_random + " > " + var_prompt + " веденного числа")
// } else if (var_random == var_prompt) {
// 	alert("Наше рандомнео число " + var_random + " = " + var_prompt + " веденному числу")
// } else {
// 	alert("Наше рандомнео число " + var_random + " < " + var_prompt + " веденного числа")
// }

// // Задача № 8
// const VAR_STR = "Мне нравится изучать Front-end";
// let var_like = prompt();
// if (VAR_STR.indexOf(var_like)) {
// 	alert("Совпадение есть");
// } else {
// 	alert("Совпадений нету");
// }
// let VAR_STR_slice = VAR_STR.slice(0, 20);
// let var_result = `${VAR_STR_slice} ${var_like}`;
// alert(var_result);
