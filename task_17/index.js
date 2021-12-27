const speech = prompt('Введите пожалуйста строку');
const arr = [];
let sum = 0;

function newArray(sp) {
  for (let i = 0; i < sp.length; i++)
    arr[i] = sp[i];
};

newArray(speech);

//  Использование метода массива forEach:

arr.forEach(it => {
  if (it == 'а' || it == 'А' ||
  it == 'е' || it == 'Е' ||
  it == 'ё' || it == 'Ё' ||
  it == 'и' || it == 'И' ||
  it == 'о' || it == 'О' ||
  it == 'э' || it == 'Э' ||
  it == 'ю' || it == 'Ю' ||
  it == 'я' || it == 'Я')
  sum++; 
});

console.log(sum);

// Использование метода массива filter:

function filterArray(it) {
  return it == 'а' || it == 'А' ||
    it == 'е' || it == 'Е' ||
    it == 'ё' || it == 'Ё' ||
    it == 'и' || it == 'И' ||
    it == 'о' || it == 'О' ||
    it == 'э' || it == 'Э' ||
    it == 'ю' || it == 'Ю' ||
    it == 'я' || it == 'Я';
};

sum = arr.filter(filterArray);

console.log(sum.length);

// Использование метода массива reduce:

let sumReduce = arr.reduce((summa, it) => 
  summa + (it == 'а' || it == 'А' ||
  it == 'е' || it == 'Е' ||
  it == 'ё' || it == 'Ё' ||
  it == 'и' || it == 'И' ||
  it == 'о' || it == 'О' ||
  it == 'э' || it == 'Э' ||
  it == 'ю' || it == 'Ю' ||
  it == 'я' || it == 'Я'), 0);

console.log(sumReduce);
