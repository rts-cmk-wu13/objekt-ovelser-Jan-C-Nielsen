let person = {
    name: "Jan",
    adress: "Bistruplund",
    number: 8,
    zip: 3320
}

document.addEventListener("DOMContentLoaded", function() {
console.log(person.name)
console.log(person.adress)
console.log(person.number)
console.log(person.zip)

console.log(person["name"])
console.log(person["adress"])
console.log(person["number"])
console.log(person["zip"])
}
)
