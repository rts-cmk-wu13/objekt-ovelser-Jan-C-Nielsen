let person = {
    name: "Jan",
    adress: "Bistruplund",
    number: 8,
    zip: 3320
}

let person2 = {
    name: "Jan",
    adress: "Bistruplund",
    number: 8,
    zip: 3320,
    atHome: false,
    stores: ["meny", "netto", "rema1000"],
    transport: {
        bus: true,
        train: true
    }
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

person2.stores.forEach(x => console.log(x))
console.log(person2.transport.bus)
console.log(person2.transport.train)

}
)
