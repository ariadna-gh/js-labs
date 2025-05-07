function idGenerator() {
    let id = 0;
    return function() {
        id ++;
        return id;
    };
}
const generateId = idGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());
