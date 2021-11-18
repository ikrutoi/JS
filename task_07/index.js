const speech = prompt('Введите пожалуйста строку');
let sum = 0;

function searchVowel(sp) {
  for (let i = 0; i < sp.length; i++) {
    if (sp[i] == 'а' || sp[i] == 'А' ||
      sp[i] == 'е' || sp[i] == 'Е' ||
      sp[i] == 'ё' || sp[i] == 'Ё' ||
      sp[i] == 'и' || sp[i] == 'И' ||
      sp[i] == 'о' || sp[i] == 'О' ||
      sp[i] == 'э' || sp[i] == 'Э' ||
      sp[i] == 'ю' || sp[i] == 'Ю' ||
      sp[i] == 'я' || sp[i] == 'Я')
    sum++; 
  }
}

searchVowel(speech);
console.log(sum);
