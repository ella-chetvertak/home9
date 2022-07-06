const object = {
    a: 5,
    b: { g: 8, y: 9, t: { q: 48 }},
    x: 47
};
let newObject = Object.assign({}, object);
newObject.b = {...object.b};
newObject.b.t = {...object.b.t};

    // For example

newObject.b.t.q = 20;
console.log(object); //nothing changed
console.log(newObject); // q = 20 now