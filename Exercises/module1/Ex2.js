//Exercise 2
const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

//2.1
var arrayMap = users.map((item) => item.age);
console.log(arrayMap);

//2.2
var arrayFilter = users.filter(item => item.company == 'Rocketseat' && item.age > 18)
console.log(arrayFilter);

//2.3
var find = users.find(item => item.company == 'Google');
console.log(find);

//2.4
var mapFilter = users.map((item) => {
    return { ...item, age: item.age * 2 }
}).filter(item => item.age <= 50);
console.log(mapFilter);