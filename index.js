// 1️⃣ Find drivers that match the name (case insensitive)
function findMatching(array, value) {
    return array.filter((element) => element.toLowerCase() === value.toLowerCase());
}

// 2️⃣ Find drivers whose names *start with* the given letters
function fuzzyMatch(array, value) {
    return array.filter((element) => element.startsWith(value));
}

// 3️⃣ Find drivers with an exact name match inside an object
function matchName(array, value) {
    return array.filter((element) => element.name === value);
}


