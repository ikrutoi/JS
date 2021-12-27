let surname = prompt('Какая ваша фамилия?');
while (surname === null || !isNaN(+surname)) 
  surname = prompt('Введите вашу фамилию');

let name = prompt('Какое ваше имя?');
while (name === null || !isNaN(+name)) 
  name = prompt('Введите ваше имя');

let mName = prompt('Какое ваше отчество?');
while (mName === null || !isNaN(+mName)) 
  mName = prompt('Введите ваше отчество');

let age = +prompt('Какой ваш возраст?');
while (age === null || isNaN(age) || age > 100 || age < 5) 
  age = +prompt('Введите ваш возраст');

let gender = confirm('Ваш пол - мужской?');
let pension;

if (!!gender) {
  gender = "мужской";
  if (age < 65) pension = 'нет';
  else pension = 'да';
}
else { 
  gender = "женский";
  if (age < 60) pension = 'нет';
  else pension = 'да';
}

alert(`Ваше ФИО: ${surname} ${name} ${mName} 
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age * 365}
Через 5 лет вам будет: ${age + 5}
Ваш пол: ${gender}
Вы на пенсии: ${pension}`);
