// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function(a) {
    return cats.push(a);
}

const destructivelyPrependCat = function(a) {
    return cats.unshift(a);
}

const destructivelyRemoveLastCat = function(a) {
    return cats.pop(a);
}

const destructivelyRemoveFirstCat = function(a) {
    return cats.shift(a);
}

const appendCat = function(a) {
    return [...cats, a]
}

const prependCat = function(a) {
    return [a, ...cats];
}

const removeLastCat = function(a) {
    return a = cats.slice(0, cats.length - 1);
}

const removeFirstCat = function() {
    return cats.slice(1, cats.length)
}