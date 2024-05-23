/*
QUESTION # 3
3. Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase. */
let person_name = "imran ali";
console.log(`original case`, person_name);
console.log(`lower case = `, person_name.toLowerCase()); //string in lower case
console.log(`upper case = `, person_name.toUpperCase()); // upper case
//Title Case
const toTitleCase = (str) => {
    var _a;
    return (_a = str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
};
let capitalized = toTitleCase(person_name);
console.log(`title case=`, capitalized);
