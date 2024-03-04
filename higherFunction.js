// first Quest:
const arrName = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

arrName.forEach((item) => console.log(`Привет, ${item}`));

// second Quest:
const arrNumbers = [1, 2, 3, 4, 5];

let result = arrNumbers.map(item => item * 10);
console.log(result);

// third Quest:
const arrAnarhiaNumbers = [10, 5, 12, 8, 130, 44];
let filterNumbers = arrAnarhiaNumbers.filter(item => item > 10);
console.log(filterNumbers);

// fourht Quest:
const objPeopples = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}]
let filterAge = objPeopples.filter(item => item.age > 18);
let arrStrings = filterAge.map(item => `${item.name} (${item.age} лет)` );
console.log(arrStrings);

// fifth Quest:
const arrObj = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
let totalPrice = arrObj.reduce((accum, current) => {
    const priceCard = accum + (current.price * current.quantity);
    return priceCard;
}, 
0);
console.log(totalPrice);