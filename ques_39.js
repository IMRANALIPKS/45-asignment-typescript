/*
39. City Names:
Write a function called city_country() that takes in the name of a city and its country. The
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
//  let mycities = city_country("karachi","Pakistan")
//console.log(mycities)
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
console.log(city_country('Dubai', 'UAE'));
