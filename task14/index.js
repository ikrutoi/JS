let drink = {};

class HashStorageFunc {
  
  addValue(key, value) {
    drink[key] = value;
  };

  getValue(key) {
    return drink[key]
  };

  deleteValue(key) {
    if (key in drink) {
      delete drink[key];
      return true
    } 
    else {
      return false
  }
  };

  getKeys() {
    const arrNameDrink = Object.keys(drink);
    console.log(arrNameDrink);
    const b = arrNameDrink.forEach(elem => (elem+=' '));
    console.log(b);
    return b
  }

};

let drinkStorage = new HashStorageFunc();

function addDrink() {
  const name = prompt('Введите название напитка');
  const alcohol = confirm('Напиток алкогольный?');
  const recept = prompt('Введите рецепт напитка');

  drinkStorage.addValue(name, {alcohol: alcohol, recept: recept});
};

function getDrink() {
  const nameDrink = prompt('Введите название напитка');
  const infoDrink = drinkStorage.getValue(nameDrink);
  let alc;
    
  if (infoDrink == undefined)
    alert('Запрашиваемого напитка в списке нет!!');
  else {
    if (infoDrink.alcohol)
      alc = "да!!";
    else 
      alc = "нет!!";
      
    alert(`Информация о напитке "${nameDrink}" следующая:
    содержит алкоголь: ${alc},
    рецепт: ${infoDrink.recept}`);
  } 
}  

function deleteDrink() {
  const nameDrink = prompt('Какой напиток удалить?')
  const deleteDrink = drinkStorage.deleteValue(nameDrink);

  if (deleteDrink) 
    alert('Напиток удален!!');
  else
    alert('Запрашиваемого напитка в списке нет!!');
};

function getNameDrink() {
  const nameDrink = drinkStorage.getKeys();
  alert(`Список напитков: ${nameDrink}`);
};

document.querySelector('.add_info').onclick = addDrink;
document.querySelector('.get_info').onclick = getDrink;
document.querySelector('.delete_info').onclick = deleteDrink;
document.querySelector('.get_all_drink').onclick = getNameDrink;