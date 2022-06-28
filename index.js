let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop("Ralph")
}

function destructivelyRemoveFirstCat() {
    cats.shift("Ralph")
}

let newCats
function appendCat() {
    return newCats = [...cats, "Broom"]
}

function prependCat() {
    return newCats = ["Arnold", ...cats]
}

function removeLastCat() {
    return newCats = cats.slice(0, 2)
}

function removeFirstCat() {
    return newCats = cats.slice(1)
}
