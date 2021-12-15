class HashStorageFunc {
    
    constructor(nameDrink) {
        console.log(nameDrink);
    }
    
    addValue(key, value) {
        this.key = value;
    } 
    
    getValue(key) {
        
    }
    
    deleteValue(key) {
        
    }
    
    getKeys() {
        alert('Перечень всех напитков: ${this.name}');
    }
}

const nameDrink = prompt('Введите название напитка');
const onOffAlcohol = confirm('Напиток алкогольный или нет?');
const recept = prompt('Введите рецепт напитка');
const drink = new HashStorageFunc();
